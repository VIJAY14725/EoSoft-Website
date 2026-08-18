import React from 'react';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import SiteLayout from '@/components/SiteLayout';

const AboutPage = () => (
    <SiteLayout>
        <Helmet>
            <title>
                About EoSoft Solutions Pvt Ltd | IT and AI Consulting Firm in Bengaluru
            </title>

            <meta
                name="description"
                content="Learn about EoSoft Solutions Pvt Ltd, a Bengaluru-based IT and AI consulting firm combining senior advisory with hands-on engineering delivery."
            />
        </Helmet>

        {/* About Us */}
        <section className="border-b border-border">
            <div className="mx-auto grid w-full max-w-[72rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
                <Reveal>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">
                        About us
                    </p>

                    <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
                        A consulting firm built by people who still ship.
                    </h1>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-base leading-relaxed text-muted-foreground">
                        EoSoft Solutions Pvt Ltd was founded in Hyderabad in 2001
                        to close the gap between advice and delivery. Our
                        consultants lead engagements alongside the engineers who
                        implement them, which keeps recommendations honest and
                        timelines realistic. Today we support clients across
                        India,logistics, manufacturing and healthcare.
                    </p>
                </Reveal>
            </div>
        </section>

        {/* Company Statistics */}
        <section className="bg-secondary">
            <div className="mx-auto grid w-full max-w-[72rem] gap-8 px-5 py-16 sm:grid-cols-3 sm:px-8">
                {[
                    {
                        v: 2001,
                        s: '',
                        l: 'Founded in Hyderabad',
                    },
                    {
                        v: 650,
                        s: '+',
                        l: 'Consultants and engineers',
                    },
                    {
                        v: 4,
                        s: ' regions',
                        l: 'Client footprint',
                    },
                ].map((m) => (
                    <Reveal key={m.l}>
                        <p className="font-display text-4xl font-bold text-primary">
                            <CountUp
                                value={m.v}
                                suffix={m.s}
                            />
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                            {m.l}
                        </p>
                    </Reveal>
                ))}
            </div>
        </section>
    </SiteLayout>
);

export default AboutPage;