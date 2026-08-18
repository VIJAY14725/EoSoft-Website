import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import SiteLayout from '@/components/SiteLayout';
import { SERVICES } from '@/data/services';

const MARQUEE = [
    'Cloud Modernisation',
    'Data Platforms',
    'LLM Assistants',
    'DevOps Enablement',
    'ERP Integration',
    'Managed SRE',
    'AI Governance',
];

const HomePage = () => (
    <SiteLayout>
        <Helmet>
            <title>EoSoft Solutions Pvt Ltd | IT and AI Consulting Firm</title>
            <meta
                name="description"
                content="EoSoft Solutions Pvt Ltd is an IT and AI consulting firm delivering IT consulting, managed IT services and AI-enabled consulting for enterprises."
            />
        </Helmet>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
            <div
                className="absolute inset-0 opacity-[0.12] eo-grid-bg"
                aria-hidden="true"
            />

            <div className="relative mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
                {/* Hero Content */}
                <div>
                    <Reveal>
                        <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/80">
                            Hyderabad · Est. 2001 · CMMI-aligned delivery
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                            Consulting that ends
                            <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">
                                    in working software.
                                </span>

                                <span
                                    className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 bg-accent/70 sm:h-4"
                                    aria-hidden="true"
                                />
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                            EoSoft Solutions pairs senior IT consultants with
                            delivery engineers and applied-AI specialists, so
                            the strategy we recommend is the same one we
                            build, run and measure.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex h-13 min-h-[48px] items-center gap-2 rounded-sm bg-accent px-7 text-sm font-semibold text-accent-foreground transition-transform hover:bg-accent/90 active:scale-[0.98]"
                            >
                                Book a consultation
                                <ArrowRight
                                    className="h-4 w-4"
                                    strokeWidth={2}
                                />
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border border-primary-foreground/30 px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                            >
                                Explore services
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Hero Image */}
                <Reveal delay={0.2} y={32}>
                    <div className="relative">
                        <img
                            src="/images/MJR.png"
                            alt="EoSoft Solutions"
                            className="h-[22rem] w-full rounded-sm object-cover shadow-2xl shadow-black/40 lg:h-[30rem]"
                            loading="eager"
                        />

                        {/* Statistics */}
                        <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-3 gap-px overflow-hidden rounded-sm bg-primary-foreground/15 sm:left-8 sm:right-8">
                            {[
                                {
                                    v: 140,
                                    s: '+',
                                    l: 'Engagements',
                                },
                                {
                                    v: 23,
                                    s: ' yrs',
                                    l: 'Average lead tenure',
                                },
                                {
                                    v: 96,
                                    s: '%',
                                    l: 'Client retention',
                                },
                            ].map((m) => (
                                <div
                                    key={m.l}
                                    className="bg-primary px-4 py-5 text-center"
                                >
                                    <p className="font-display text-2xl font-bold text-accent">
                                        <CountUp
                                            value={m.v}
                                            suffix={m.s}
                                        />
                                    </p>

                                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-primary-foreground/60">
                                        {m.l}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-secondary py-4">
            <div className="eo-marquee-track flex w-max gap-10 whitespace-nowrap">
                {[...MARQUEE, ...MARQUEE].map((m, i) => (
                    <span
                        key={`${m}-${i}`}
                        className="flex items-center gap-10 text-xs uppercase tracking-[0.28em] text-muted-foreground"
                    >
                        {m}

                        <span
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                        />
                    </span>
                ))}
            </div>
        </div>

        {/* Services Section */}
        <section className="mx-auto w-full max-w-[72rem] px-5 py-24 sm:px-8">
            <Reveal>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">
                    What we do
                </p>

                <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-primary sm:text-[2.6rem]">
                    Three practices, one accountable team.
                </h2>
            </Reveal>

            <div className="mt-14 divide-y divide-border border-t border-border">
                {SERVICES.map((s, i) => (
                    <Reveal
                        key={s.slug}
                        delay={i * 0.07}
                    >
                        <Link
                            to="/services"
                            className="group grid gap-4 py-9 md:grid-cols-[6rem_1fr_auto] md:items-baseline md:gap-8"
                        >
                            <span className="font-display text-sm text-muted-foreground">
                                0{i + 1}
                            </span>

                            <div>
                                <h3 className="font-display text-xl font-semibold text-primary transition-colors group-hover:text-accent sm:text-2xl">
                                    {s.title}
                                </h3>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {s.lead}
                                </p>
                            </div>

                            <ArrowUpRight
                                className="h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:text-accent"
                                strokeWidth={1.5}
                            />
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>

        {/* How We Work Section */}
        <section className="bg-secondary">
            <div className="mx-auto grid w-full max-w-[90rem] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
                <Reveal>
                    <img
                        src="https://images.hostinger.com/3ad991d5-9a0b-4a96-a1b5-7a51b7f15be2.png"
                        alt="EoSoft consultants reviewing delivery dashboards"
                        className="h-full w-full rounded-sm object-cover"
                        loading="lazy"
                    />
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">
                        How we work
                    </p>

                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-[2.6rem]">
                        Assess. Prove. Scale.
                    </h2>

                    <ol className="mt-8 space-y-7">
                        {[
                            [
                                'Assess',
                                'Two-week diagnostic across systems, data, delivery and cost. You get findings, not a questionnaire.',
                            ],
                            [
                                'Prove',
                                'A narrow, production-grade pilot with agreed success metrics before any large commitment.',
                            ],
                            [
                                'Scale',
                                'Embedded squads, runbooks and knowledge transfer so your team owns the outcome.',
                            ],
                        ].map(([t, d], i) => (
                            <li
                                key={t}
                                className="flex gap-5"
                            >
                                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-primary/25 font-display text-sm font-semibold text-primary">
                                    {i + 1}
                                </span>

                                <div>
                                    <p className="font-display text-lg font-semibold text-primary">
                                        {t}
                                    </p>

                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                        {d}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </div>
        </section>

        {/* Testimonial */}
        <section className="mx-auto w-full max-w-[56rem] px-5 py-24 text-center sm:px-8">
            <Reveal>
                <blockquote className="font-display text-2xl font-medium leading-snug text-primary sm:text-3xl">
                    &ldquo;EoSoft cut our release cycle from six weeks to five
                    days and stood up a document-processing assistant that now
                    handles 70% of intake volume.&rdquo;
                </blockquote>
            </Reveal>
        </section>

        {/* CTA Section */}
        
    </SiteLayout>
);

export default HomePage;