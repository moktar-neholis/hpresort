'use client';
import React, { useEffect } from 'react';
import Rellax from 'rellax';
import { useTranslation } from '../hooks/useTranslation';

function AboutOne() {
    const { t } = useTranslation();

    useEffect(() => {
        if (typeof window !== "undefined") {
            new Rellax(".rellax", { speed: 1 });
        }
    }, []);

    return (
        <div className="rts__section about__area is__home__main section__padding">
            <div className="section__shape d-none d-xl-block">
                <img src="/assets/images/about/section__shape.svg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="about__wrapper">
                        <div className="image">
                            <div className="position-relative radius wow fadeInUp overflow-hidden" data-wow-delay=".3s">
                                <div className="jara-mask-1 jarallax image-height pt-0" data-rellax-speed="2">
                                    <img
                                        src="/assets/images/about/11.png"
                                        className="jarallax-img rellax rellax-img"
                                        alt="Background"
                                    />
                                </div>
                            </div>
                            <div className="image__card radius-10 wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon radius-10 center-item">
                                    <i className="flaticon-people" />
                                </div>
                                <div className="content">
                                    <span className="h5">{t.about.staffCount}</span>
                                    <p>{t.about.staffLabel}</p>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">{t.about.label}</span>
                            <h2 className="content__title wow fadeInUp">
                                {t.about.title}
                            </h2>
                            <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                                {t.about.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;
