"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import TopBar from '../../home-1/TopBar';
import HeaderOne from '../../home-1/Header';
import BreadcrumbOne from '../../breadcrumb/Breadcrumb';
import FooterOne from '../../home-1/FooterOne';
import BackToTop from '../../home-1/BackToTop';
import posts from '../../data/data-activities.json';

function ActivitiesDetailsPage() {
    const { slug } = useParams();

    const activity = posts.find((post) => post.slug === slug);

    if (!activity) {
        return <div>Service introuvable !</div>;
    }

    return (
        <>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={activity.title}
                bgImage={activity.image}
                breadcrumb={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Bien Etre & Detente', href: '/activities' },
                ]}
                current={activity.title}
            />
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <p className="font-sm">{activity.description}</p>
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

export default ActivitiesDetailsPage;
