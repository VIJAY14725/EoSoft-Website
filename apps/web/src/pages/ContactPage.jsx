import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import pb from "@/lib/pocketbaseClient";

const SERVICE_OPTIONS = ['IT Consulting', 'IT Services', 'AI-enabled Consulting', 'Other'];
const EMPTY = { name: '', email: '', phone: '', company: '', service: 'IT Consulting', message: '' };

const ContactPage = () => {
    const [form, setForm] = useState(EMPTY);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setError('');
        try {
            await pb.collection('inquiries').create(form);
            setStatus('sent');
            setForm(EMPTY);
        } catch (err) {
            setStatus('idle');
            setError(err?.message || 'Something went wrong. Please email hello@eosoftsolutions.com.');
        }
    };

    const field = 'mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent';
    const label = 'text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground';

    return (
        <SiteLayout>
            <Helmet>
                <title>Contact EoSoft Solutions Pvt Ltd | IT and AI Consulting Enquiries</title>
                <meta
                    name="description"
                    content="Contact EoSoft Solutions Pvt Ltd in Bengaluru. Send an enquiry, call +91 90000 12345, email hello@eosoftsolutions.com or find us on the map."
                />
            </Helmet>

            <section className="border-b border-border bg-secondary">
                <div className="mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">Contact</p>
                    <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
                        Start with a conversation, not a proposal template.
                    </h1>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-[72rem] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
                <Reveal>
                    <h2 className="font-display text-2xl font-bold text-primary">Send an enquiry</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        We reply to every enquiry within one business day.
                    </p>

                    {status === 'sent' ? (
                        <div className="mt-8 flex items-start gap-3 rounded-sm border border-accent/40 bg-accent/10 p-6">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
                            <div>
                                <p className="font-display text-lg font-semibold text-primary">Thank you</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Your enquiry has been received. A consultant will be in touch shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-sm font-semibold text-accent underline"
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className={label} htmlFor="name">Full name</label>
                                    <input id="name" required value={form.name} onChange={update('name')} className={field} placeholder="Your name" />
                                </div>
                                <div>
                                    <label className={label} htmlFor="email">Work email</label>
                                    <input id="email" type="email" required value={form.email} onChange={update('email')} className={field} placeholder="you@company.com" />
                                </div>
                                <div>
                                    <label className={label} htmlFor="phone">Phone</label>
                                    <input id="phone" value={form.phone} onChange={update('phone')} className={field} placeholder="+91 90000 00000" />
                                </div>
                                <div>
                                    <label className={label} htmlFor="company">Company</label>
                                    <input id="company" value={form.company} onChange={update('company')} className={field} placeholder="Company name" />
                                </div>
                            </div>
                            <div>
                                <label className={label} htmlFor="service">Area of interest</label>
                                <select id="service" value={form.service} onChange={update('service')} className={field}>
                                    {SERVICE_OPTIONS.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className={label} htmlFor="message">How can we help?</label>
                                <textarea id="message" required rows={5} value={form.message} onChange={update('message')} className={field} placeholder="Briefly describe your goal, systems or timeline." />
                            </div>
                            {error && <p className="text-sm text-destructive">{error}</p>}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60"
                            >
                                {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />}
                                {status === 'sending' ? 'Sending' : 'Submit enquiry'}
                            </button>
                        </form>
                    )}
                </Reveal>

                <Reveal delay={0.1}>
                    <h2 className="font-display text-2xl font-bold text-primary">Reach us directly</h2>
                    <ul className="mt-8 space-y-6 text-sm">
                        <li className="flex gap-4">
                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                            <span className="text-muted-foreground">
                                <span className="block font-semibold text-primary">Registered office</span>
                                MJR Magnifique, Khajaguda
                                <br />Hyderabad 500032, Telangana, India
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                            <span className="text-muted-foreground">
                                <span className="block font-semibold text-primary">Phone</span>
                                <a href="tel:+919000012345">+91 96524 07868</a>
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                            <span className="text-muted-foreground">
                                <span className="block font-semibold text-primary">Email</span>
                                <a href="mailto:hello@eosoftsolutions.com">career@eosoftsols.com</a>
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                            <span className="text-muted-foreground">
                                <span className="block font-semibold text-primary">Hours</span>
                                Monday to Friday, 18:30 - 03:30 IST
                            </span>
                        </li>
                    </ul>
                    <div className="mt-10 overflow-hidden rounded-sm border border-border">
                        <iframe
                                title="EoSoft Solutions office location on Google Maps"
                                src="https://www.google.com/maps?q=MJR+Magnifique,+Prashant+Hills,+Gachibowli,+Hyderabad,+Telangana+500104&output=embed"
                                className="h-80 w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                </Reveal>
            </section>
        </SiteLayout>
    );
};

export default ContactPage;
