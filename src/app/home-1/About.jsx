'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
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
                                        src="/assets/images/about/img-about-1.jpg"
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
                            <div className="image__card__image wow fadeInUp">
                                <img
                                    src="/assets/images/about/img-about-2.jpg"
                                    width={312}
                                    height={230}
                                    alt="About"
                                />
                            </div>
                        </div>
                        <div className="content">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">À propos</span>
                            <h2 className="content__title wow fadeInUp">
                                BIENVENUE À HP RESORT
                            </h2>
                            <p className="content__subtitle wow fadeInUp" data-wow-delay=".3s">
                                Situé dans le futur quartier des affaires, dans un cadre paisible et reposant, notre établissement au charme discret est l'endroit idéal pour les séjours professionnels et les villégiatures en famille.
                                Notre hôtel, d'une capacité de 300 chambres, dispose d'un centre de conférence moderne équipé avec toutes les commodités nécessaires. Douze salles polyvalentes, allant de 15 à *200 participants, vous sont proposées avec également des salles de banquet de 200 personnes au maximum et d'autres espaces locatifs côté jardin ou en terrasse piscine pouvant accueillir 1500 convives voire plus.
                                Notre jeune équipe de professionnels, dynamique, disponible et disposée est à votre écoute en permanence afin que votre séjour soit de qualité, riche en émotion et en souvenir mémorable.
                                Laissez-vous tenter par une expérience immersive à Yamoussoukro, dans un cadre surprenant, original et chaleureux.
                                Akwaba à l'hôtel HP Resort !
                            </p>
                            <Link href="#" className="theme-btn btn-style fill no-border wow fadeInUp" data-wow-delay=".5s">
                                <span>En savoir plus</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;
