'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

function BannerOne() {
    const { t } = useTranslation();
    return (
        <>
            <div className="rts__section banner__area is__home__one banner__height banner__center">
                <Swiper
                    className="banner__slider overflow-hidden"
                    modules={[Navigation]}
                    direction="horizontal"
                    slidesPerView={1}
                    loop={true}
                    navigation={{ nextEl: ".next", prevEl: ".prev" }}
                    speed={1000}
                    effect="slide"
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="banner__slider__image">
                                <img src="/assets/images/banner/8.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="banner__slide__content">
                                            <span className="h6 subtitle__icon">
                                                {t.banner.subtitle}
                                            </span>
                                            <h1>{t.banner.title}</h1>
                                            <Link href="/room-one" className="theme-btn btn-style fill no-border">
                                                <span>{t.banner.cta}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default BannerOne;
