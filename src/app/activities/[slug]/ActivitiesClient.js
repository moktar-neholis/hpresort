"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TopBar from '../../home-1/TopBar';
import HeaderOne from '../../home-1/Header';
import BreadcrumbOne from '../../breadcrumb/Breadcrumb';
import FooterOne from '../../home-1/FooterOne';
import BackToTop from '../../home-1/BackToTop';
import posts from '../../data/data-activities.json';
import { useTranslation } from '../../hooks/useTranslation';

export default function ActivitiesClient({ slug }) {
    const { lang } = useTranslation();
    const activity = posts.find((post) => post.slug === slug);

    if (!activity) {
        return <div>Service introuvable !</div>;
    }

    const title       = lang === 'en' ? (activity.title_en       || activity.title)       : activity.title;
    const description = lang === 'en' ? (activity.description_en || activity.description) : activity.description;
    const facilities  = lang === 'en' ? (activity.facilities_en  || activity.facilities)  : activity.facilities;
    const hours       = activity.opening_hours;
    const gallery     = activity.gallery || [];

    return (
        <>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={title}
                bgImage={activity.image}
                breadcrumb={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Bien Être & Détente', href: '/activities' },
                ]}
                current={title}
            />
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            {/* Description */}
                            {description && (
                                <p className="font-sm mb-40">{description}</p>
                            )}

                            {/* Galerie photos */}
                            {gallery.length > 0 && (
                                <div className="room__image__group mt-10 mb-50">
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                                        loop={gallery.length > 1}
                                        spaceBetween={16}
                                        slidesPerView={1}
                                        breakpoints={{ 768: { slidesPerView: 2 } }}
                                    >
                                        {gallery.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                <img
                                                    className="rounded-2 w-100"
                                                    src={img}
                                                    alt={`${title} - photo ${i + 1}`}
                                                    style={{ height: '320px', objectFit: 'cover' }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}

                            {/* Équipements / Facilities */}
                            {facilities && facilities.length > 0 && (
                                <div className="mb-40">
                                    <h5 className="mb-20">Équipements</h5>
                                    <ul className="list__item">
                                        {facilities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Horaires d'ouverture */}
                            {hours && (
                                <div className="mb-40">
                                    <h5 className="mb-20">Horaires d&apos;ouverture</h5>
                                    {/* Structure simple : days / opens / closes */}
                                    {hours.days && (
                                        <p className="font-sm">
                                            <strong>{lang === 'en' ? (hours.days_en || hours.days) : hours.days}</strong> : {hours.opens} – {hours.closes}
                                        </p>
                                    )}
                                    {/* Structure fitness : hotel_guests / external_visitors */}
                                    {hours.hotel_guests && (
                                        <div>
                                            <p className="font-sm mb-10">
                                                <strong>Clients hôtel</strong> — {lang === 'en' ? (hours.hotel_guests.days_en || hours.hotel_guests.days) : hours.hotel_guests.days} : {hours.hotel_guests.opens} – {hours.hotel_guests.closes}
                                            </p>
                                            <p className="font-sm">
                                                <strong>Visiteurs externes</strong> — {lang === 'en' ? (hours.external_visitors.days_en || hours.external_visitors.days) : hours.external_visitors.days} : {hours.external_visitors.opens} – {hours.external_visitors.closes}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="text-center">
                                <Link
                                    href="/contact"
                                    className="theme-btn btn-style fill no-border mt-10"
                                >
                                    <span>NOUS CONTACTER</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <BackToTop />
        </>
    );
}
