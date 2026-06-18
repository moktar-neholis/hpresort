'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FacilitiesOne() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <>
            {/* facilities */}
            <div className="rts__section facilities__area has__background has__shape py-90">
                <div className="section__shape">
                    <img src="/assets/images/shape/facility-1.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Équipements</span>
                                <h2 className="section__title">Équipements de l'hôtel</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/bed.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Chambres et suites</h6>
                                    </Link>
                                    <p className="card-text">
                                        Des chambres de différents types, allant des chambres standard aux suites de luxe, équipées de tout le nécessaire, notamment de lits.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/security.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Sécurité 24h/24</h6>
                                    </Link>
                                    <p className="card-text">
                                        Personnel de sécurité sur place et système de vidéosurveillance de pointe. Consigne sécurisée pour vos objets de valeur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/gym.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Salle de sport</h6>
                                    </Link>
                                    <p className="card-text">
                                        Équipé d'appareils de musculation et d'haltères. Propose des massages, des soins du visage et d'autres soins.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/swimming-pool.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Piscine</h6>
                                    </Link>
                                    <p className="card-text">
                                        Piscines intérieures ou extérieures, pour les loisirs ou le sport. Propose des massages, des soins du visage et d'autres soins
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* facilities end */}
        </>
    );
}

export default FacilitiesOne;
