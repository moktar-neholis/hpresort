"use client";
import React from 'react';
import Link from 'next/link';
import TopBar from '../../home-1/TopBar';
import HeaderOne from '../../home-1/Header';
import BreadcrumbOne from '../../breadcrumb/Breadcrumb';
import FooterOne from '../../home-1/FooterOne';
import BackToTop from '../../home-1/BackToTop';
import { useTranslation } from '../../hooks/useTranslation';

export default function PromotionDetail({ promo }) {
    const { t } = useTranslation();

    if (!promo) {
        return <div>Promotion introuvable !</div>;
    }

    return (
        <>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={promo.title}
                bgImage={promo.image}
                breadcrumb={[
                    { label: t.breadcrumb.home, href: '/' },
                    { label: t.breadcrumb.promotion, href: '/promotion' },
                ]}
                current={promo.title}
            />

            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            {/* Image principale */}
                            <div className="mb-40">
                                <img
                                    src={promo.image}
                                    alt={promo.title}
                                    className="rounded-2 w-100"
                                    style={{ maxHeight: '480px', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Titre */}
                            <h2 className="mb-20">{promo.title}</h2>

                            {/* Description complète */}
                            {promo.description && (
                                <p className="font-sm mb-40">{promo.description}</p>
                            )}

                            {/* Actions */}
                            <div className="d-flex gap-3 flex-wrap">
                                <Link
                                    href="tel:+2250707452177"
                                    className="theme-btn btn-style fill no-border"
                                >
                                    <span>{t.promotion.bookOffer}</span>
                                </Link>
                                <Link
                                    href="/promotion"
                                    className="theme-btn btn-style no-border"
                                >
                                    <span>← {t.promotion.backToPromotions}</span>
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
