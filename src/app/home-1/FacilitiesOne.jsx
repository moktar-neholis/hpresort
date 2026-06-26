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
                                <span className="h6 subtitle__icon__three mx-auto">HP Resort</span>
                                <h2 className="section__title">Nos services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/dinner.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">Restaurant & Bar</h6>
                                    </Link>
                                    <p className="card-text">
                                        Savourez une cuisine raffinée et prolongez l'instant autour d'un verre dans l'ambiance chaleureuse de notre bar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card rts__card no-border is__home radius-6">
                                <div className="card-body">
                                    <div className="icon">
                                        <img src="/assets/images/icon/lotus-spa.svg" alt="" />
                                    </div>
                                    <Link href="/">
                                        <h6 className="card-title h6 mb-15">SPA</h6>
                                    </Link>
                                    <p className="card-text">
                                        Évadez-vous dans notre spa, un sanctuaire de sérénité dédié à votre bien-être absolu.
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
                                        Gardez le rythme dans notre salle de sport entièrement équipée, ouverte à toute heure pour votre plus grand bien-être.
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
                                        Piscines intérieures ou extérieures, pour les loisirs ou le sport.
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
