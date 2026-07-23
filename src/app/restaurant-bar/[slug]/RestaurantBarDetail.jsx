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
import { useTranslation } from '../../hooks/useTranslation';

export default function RestaurantBarDetail({ item }) {
    const { lang } = useTranslation();

    if (!item) {
        return <div>Espace introuvable !</div>;
    }

    const title       = lang === 'en' ? (item.title_en || item.title) : item.title;
    const description = lang === 'en' ? (item.description_en || item.description) : item.description;
    const gallery     = item.gallery || [];
    const hours       = item.opening_hours;

    return (
        <>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={title}
                bgImage={item.image}
                breadcrumb={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Restaurants & Bar', href: '/restaurant-bar' },
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

                            {/* Horaires d'ouverture */}
                            {hours && (
                                <div className="mb-40">
                                    <h5 className="mb-20">Horaires d&apos;ouverture</h5>
                                    <p className="font-sm">
                                        <strong>{lang === 'en' ? (hours.days_en || hours.days) : hours.days}</strong>
                                        {hours.opens && ` : ${hours.opens}`}
                                        {hours.closes && ` – ${hours.closes}`}
                                    </p>
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
