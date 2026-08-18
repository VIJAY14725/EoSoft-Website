import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import { SERVICES } from '@/data/services';

const IMAGES = {
    'it-consulting': 'https://images.hostinger.com/8463b0af-f6d4-45ed-b941-80ae64c1cf8d.png',
    'it-services': 'https://images.hostinger.com/3ad991d5-9a0b-4a96-a1b5-7a51b7f15be2.png',
    'ai-consulting': 'https://images.hostinger.com/bd67d8d2-3c26-4e14-894d-19430880315c.png',
};

const ServicesPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Services | IT Consulting, IT Services and AI Consulting | EoSoft Solutions</title>
            <meta
                name="description"
                content="EoSoft Solutions services: IT consulting and architecture, managed IT and engineering services, and AI-enabled consulting from readiness to production."
            />
        </Helmet>

        <section className="border-b border-border bg-secondary">
            <div className="mx-auto w-full max-w-[72rem] px-5 py-20 sm:px-8">
                <p className="text-xs uppercase tracking-[0.24em] text-accent">Services</p>
                <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
                    Advisory, engineering and applied AI under one delivery contract.
                </h1>
            </div>
        </section>

        {SERVICES.map((s, i) => (
            <section key={s.slug} className={i % 2 === 1 ? 'bg-secondary' : 'bg-background'}>
                <div
                    className={`mx-auto grid w-full max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center ${
                        i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                >
                    <Reveal>
                        <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            {s.title}
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{s.lead}</p>
                        <ul className="mt-8 space-y-3">
                            {s.points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-sm text-primary sm:text-base">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
                                    {p}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 border-l-2 border-accent pl-4 text-sm font-medium text-primary">
                            Typical outcome: {s.outcome}
                        </p>
                    </Reveal>
                    <Reveal delay={0.1} y={28}>
                        <img
                            src={IMAGES[s.slug]}
                            alt={s.title}
                            className="h-72 w-full rounded-sm object-cover lg:h-[26rem]"
                            loading="lazy"
                        />
                    </Reveal>
                </div>
            </section>
        ))}
    </SiteLayout>
);

export default ServicesPage;
