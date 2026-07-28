'use client'
import Link from 'next/link'
import React from 'react'
//import promotions from '../data/data-promotion.json'
import { useTranslation } from '../hooks/useTranslation'

function Promotion() {
    const { t, lang } = useTranslation();
    return (
        <div className="rts__section section__padding">
            <div className="container">
                <div className="row justify-content-center text-center mb-40">
                    <div className="col-lg-8">
                        <div className="section__topbar">
                            <h2 className="content__title h2 lh-1">{t.promotion.title}</h2>
                            <p className="font-sm mt-20">{t.promotion.desc}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="row g-30">
                    {promotions.map((promo) => (
                        <div key={promo.slug} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="room__card is__activities">
                                <div className="room__card__top">
                                    <div className="room__card__image">
                                        <Link href={`/promotion/${promo.slug}`}>
                                            <img
                                                src={promo.image}
                                                width={420}
                                                height={310}
                                                alt={promo.title}
                                                style={{ objectFit: 'cover', width: '100%', height: '310px' }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="room__card__meta">
                                    <Link href={`/promotion/${promo.slug}`} className="room__card__title h5">
                                        {promo.title}
                                    </Link>
                                    <p className="font-sm">{promo.excerpt}</p>
                                    <Link href={`/promotion/${promo.slug}`} className="theme-btn btn-style fill no-border sm-btn">
                                        <span>{t.promotion.readMore}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Promotion
