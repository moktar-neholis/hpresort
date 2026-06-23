"use client";
import React from 'react';
import Link from 'next/link';
import TopBar from '../../home-1/TopBar';
import HeaderOne from '../../home-1/Header';
import BreadcrumbOne from '../../breadcrumb/Breadcrumb';
import FooterOne from '../../home-1/FooterOne';
import BackToTop from '../../home-1/BackToTop';
import { useTranslation } from '../../hooks/useTranslation';

export default function EventDetailsClient({ event }) {
    const { t, lang } = useTranslation();

    if (!event) {
        return <div>Événement introuvable !</div>;
    }

    const title       = lang === 'en' ? (event.title_en       || event.title)       : event.title;
    const description = lang === 'en' ? (event.description_en || event.description) : event.description;

    return (
        <>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={title}
                bgImage={event.image}
                breadcrumb={[
                    { label: t.breadcrumb.home, href: '/' },
                    { label: t.breadcrumb.event, href: '/event' },
                ]}
                current={title}
            />
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <p className="font-sm">{description}</p>
                            <Link
                                href="/contact"
                                className="theme-btn btn-style fill no-border mt-30"
                            >
                                <span>{t.event.contactUs}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <BackToTop />
        </>
    );
}
