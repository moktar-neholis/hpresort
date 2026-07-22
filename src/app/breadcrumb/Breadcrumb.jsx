'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './breadcrumb.css';

const defaultImagesByPath = {
    '/event':          '/assets/images/pages/img-event.jpg',
    '/activities':     '/assets/images/pages/img-relaxatio.jpg',
    '/restaurant-bar': '/assets/images/pages/img-resto.jpg',
};

function BreadcrumbOne({ title, description, bgImage, breadcrumb, current }) {
    const pathname = usePathname();

    const resolvedBg = bgImage
        || defaultImagesByPath[pathname]
        || '/assets/images/pages/resto_header.jpg';

    useEffect(() => {
            AOS.init({
                duration: 800,
                once: true,
                easing: 'ease-in-out',
            });
        }, []);
    return (
        <>
            {/* page header */}
            <div
                className="rts__section page__hero__height page__hero__bg"
                style={{ backgroundImage: `url(${resolvedBg})` }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="page__hero__content">
                                <h1 data-aos="fade-up">{title}</h1>
                                {description && (
                                    <p className="font-sm" data-aos="fade-up">{description}</p>
                                )}
                                {breadcrumb && breadcrumb.length > 0 && (
                                    <nav className="page__breadcrumb" data-aos="fade-up">
                                        {breadcrumb.map((item, index) => (
                                            <span key={index}>
                                                <Link href={item.href}>{item.label}</Link>
                                                <span className="page__breadcrumb__sep">/</span>
                                            </span>
                                        ))}
                                        <span className="page__breadcrumb__current">{current}</span>
                                    </nav>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page header end */}
        </>
    )
}

export default BreadcrumbOne