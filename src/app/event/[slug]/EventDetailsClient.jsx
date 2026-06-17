"use client";
import React from 'react';
import Link from 'next/link';
import TopBar from '../../home-1/TopBar';
import HeaderOne from '../../home-1/Header';
import BreadcrumbOne from '../../breadcrumb/Breadcrumb';
import FooterOne from '../../home-1/FooterOne';
import BackToTop from '../../home-1/BackToTop';

export default function EventDetailsClient({ event }) {
    if (!event) {
        return <div>Événement introuvable !</div>;
    }

    return (
        <>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={event.title}
                bgImage={event.image}
                breadcrumb={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Réunions & Evenements', href: '/event' },
                ]}
                current={event.title}
            />
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <p className="font-sm">{event.description}</p>
                            <Link
                                href="/contact"
                                className="theme-btn btn-style fill no-border mt-30"
                            >
                                <span>NOUS CONTACTER</span>
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
