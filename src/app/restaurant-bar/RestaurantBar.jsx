'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import items from '../data/data-restaurant-bar.json'

function RestaurantBar() {
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
                                        src="/assets/images/pages/resturant/1.webp"
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
                                    Gastronomie & Détente
                                </span>
                                <h2 className="font-xl wow fadeInUp">
                                    De la ferme à l'assiette : savourez des plats frais et de saison au HP Resort
                                </h2>
                                <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                                    Bienvenue au HP Resort, où la gastronomie rencontre l'élégance au cœur de Yamoussoukro.
                                    Nos restaurants et bars vous invitent à savourer une cuisine exceptionnelle, alliant
                                    saveurs locales ivoiriennes et influences internationales, dans un cadre raffiné et
                                    apaisant. Chaque repas est une invitation au voyage culinaire.
                                </p>
                                <div className="reservation__meta wow fadeInUp">
                                    <div className="reservation__item">
                                        <p className="font-sm">Réservation par téléphone</p>
                                        <Link href="tel:+2252730646800">
                                            <img src="/assets/images/icon/phone.svg" alt="" /> +225 27 30 64 68 00
                                        </Link>
                                    </div>
                                    <div className="reservation__item">
                                        <p className="font-sm">Horaires d'ouverture</p>
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
                                    Nos Espaces
                                </span>
                                <h2 className="content__title h2 lh-1">Restaurants & Bar</h2>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Découvrez nos espaces de restauration, chacun offrant une
                                    expérience culinaire unique dans un cadre exceptionnel.
                                </p>
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
                                                <p className="font-sm">{item.description}</p>
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
