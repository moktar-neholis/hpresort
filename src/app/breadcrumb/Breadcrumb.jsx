'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './breadcrumb.css';

function BreadcrumbOne({ title, description, bgImage, breadcrumb, current }) {
    useEffect(() => {
            AOS.init({
                duration: 800, // Animation duration
                once: true,    // Ensures animations run once
                easing: 'ease-in-out', // Smooth animation
            });
        }, []);
    return (
        <>
            {/* page header */}
            <div
                className="rts__section page__hero__height page__hero__bg"
                style={{ backgroundImage: `url(${bgImage || '/assets/images/pages/resto_header.jpg'})` }}
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