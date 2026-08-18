import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';


const NAV = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
];

const Wordmark = () => (
    <Link to="/" className="group flex items-center">
        <img
            src="/images/Eosoft Logo.png"
            alt="EoSoft Solutions Pvt Ltd"
            className="h-12 w-auto object-contain"
        />
    </Link>
);

const SiteLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
                <div className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between px-5 sm:px-8">
                    <Wordmark />

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAV.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-accent'
                                            : 'text-muted-foreground hover:text-primary'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="grid h-11 w-11 place-items-center rounded-sm border border-border text-primary md:hidden"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <div className="border-t border-border bg-background md:hidden">
                        <nav className="mx-auto flex w-full max-w-[90rem] flex-col px-5 py-5 sm:px-8">
                            {NAV.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `border-b border-border py-4 text-sm font-medium transition-colors ${
                                            isActive
                                                ? 'text-accent'
                                                : 'text-muted-foreground hover:text-primary'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            <Link
                                to="/contact"
                                onClick={closeMobileMenu}
                                className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-sm bg-accent px-5 text-sm font-semibold text-accent-foreground"
                            >
                                Talk to us
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Page Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="border-t border-border bg-secondary">
                <div className="mx-auto grid w-full max-w-[90rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <Wordmark />

                        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                            EoSoft Solutions Pvt Ltd delivers IT consulting, managed IT
                            services and AI-enabled consulting for enterprises.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                            Navigation
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            {NAV.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                            Contact
                        </h3>

                        <div className="mt-5 space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span className="text-sm text-muted-foreground">
                                    +91 96524 07868
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span className="text-sm text-muted-foreground">
                                    career@eosoftsols.com
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span className="text-sm text-muted-foreground">
                                    MJR Magnifique,
                                    <br/>Hyderabad-500032, 
                                    <br/>India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border">
                    <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
                        <p>
                            © {new Date().getFullYear()} EoSoft Solutions Pvt Ltd. All
                            rights reserved.
                        </p>

                        <p>IT Consulting · IT Services · AI-enabled Consulting</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SiteLayout;