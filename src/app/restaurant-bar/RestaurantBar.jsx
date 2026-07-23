'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import items from '../data/data-restaurant-bar.json'
import { useTranslation } from '../hooks/useTranslation'

function RestaurantBar() {
    const { t, lang } = useTranslation();
    const [activeTab, setActiveTab] = useState(items[0]?.slug || '');

    return (
        <>
            {/* About section - template layout */}
            <div className="rts__section about is__resturant section__padding">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-5">
                            <div className="about__images">
                                <div className="image__left wow fadeInUp">
                                    <img
                                        height={648}
                                        width={428}
                                        src="/assets/images/pages/resturant/resto1.jpg"
                                        alt="Restaurant HP Resort"
                                    />
                                </div>
                                <div className="image__right wow fadeInUp">
                                    <img
                                        width={428}
                                        height={648}
                                        src="/assets/images/pages/resturant/2.webp"
                                        alt="Bar HP Resort"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about__content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    {t.restaurant.subtitle}
                                </span>
                                <h2 className="font-xl wow fadeInUp">
                                    {t.restaurant.heading}
                                </h2>
                                <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                                    {t.restaurant.desc}
                                </p>
                                <div className="reservation__meta wow fadeInUp">
                                    <div className="reservation__item">
                                        <p className="font-sm">{t.restaurant.reservationPhone}</p>
                                        <Link href="tel:+2252730646800">
                                            <img src="/assets/images/icon/phone.svg" alt="" /> +225 27 30 64 68 00
                                        </Link>
                                    </div>
                                    <div className="reservation__item">
                                        <p className="font-sm">{t.restaurant.openingHours}</p>
                                        <span>
                                            <img src="/assets/images/icon/clock.svg" alt="" />
                                            12H00 - 22H00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Restaurant & Bar cards with tab navigation */}
            <div className="rts__section resturant__menu__bg section__padding">
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    {t.restaurant.ourSpacesSubtitle}
                                </span>
                                <h2 className="content__title h2 lh-1">{t.restaurant.ourSpacesTitle}</h2>
                            </div>
                            <div className="section__content__right">
                                <p>{t.restaurant.ourSpacesDesc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tab navigation */}
                    <div className="row">
                        <div className="col-12">
                            <div className="resturant__menu__list">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {items.map((item) => (
                                        <button
                                            key={item.slug}
                                            className={`nav-link ${activeTab === item.slug ? 'active' : ''}`}
                                            onClick={() => setActiveTab(item.slug)}
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab content */}
                            <div className="tab-content mt-40" id="nav-tabContent">
                                {items.map((item) => (
                                    <div
                                        key={item.slug}
                                        style={{ display: activeTab === item.slug ? 'block' : 'none' }}
                                    >
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-5">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="rounded-2 w-100"
                                                    style={{ height: '380px', objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="col-lg-7">
                                                <h3 className="mb-20" style={{ color: '#16213E' }}>{item.title}</h3>
                                                <p className="font-sm">{lang === 'en' ? (item.excerpt_en || item.excerpt) : item.excerpt}</p>
                                                <Link href={`/restaurant-bar/${item.slug || "details"}`} className="theme-btn btn-style fill no-border sm-btn mt-20 d-inline-block">
                                                    <span>LIRE LA SUITE</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-3">
                        {[
                            '/assets/images/pages/resturant/Mask group.jpg',
                            '/assets/images/pages/resturant/Mask group-1.jpg',
                            '/assets/images/pages/resturant/Mask group-2.jpg',
                            '/assets/images/pages/resturant/Mask group-3.jpg',
                            '/assets/images/pages/resturant/Mask group-4.jpg',
                            '/assets/images/pages/resturant/Mask group-5.jpg',
                        ].map((src, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <img
                                    src={src}
                                    alt={`Galerie ${i + 1}`}
                                    className="rounded-2 w-100"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantBar
