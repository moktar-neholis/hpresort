'use client'
import Link from 'next/link'
import React from 'react'
import packages from '../data/data-sejour-package.json'
import { useTranslation } from '../hooks/useTranslation'

function SejourPackage() {
    const { t } = useTranslation();
    return (
        <div className="rts__section section__padding">
            <div className="container">
                <div className="about__content text-center">
                        <h2 className="font-xl wow fadeInUp">
                            {t.package.title}
                        </h2>
                    <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                        {t.package.desc}
                    </p>
                </div>
                <div className="row g-30 mt-30">
                    {packages.map((pkg) => (
                        <div key={pkg.slug} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="room__card">
                                <div className="room__card__top">
                                    <div className="room__card__image">
                                        <div>
                                            <img
                                                src={pkg.image}
                                                width={420}
                                                height={310}
                                                alt={pkg.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="room__card__meta">
                                    <h5 className="room__card__title">
                                        {pkg.title}
                                    </h5>
                                    <p className="room__card__description">
                                        {pkg.excerpt}
                                    </p>
                                    <Link href={`/voir-plus/${pkg.slug}`} className="room__card__link">
                                        {t.package.readMore}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SejourPackage
