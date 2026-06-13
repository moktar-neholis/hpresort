import Link from 'next/link'
import React from 'react'

function AboutSeven() {
    return (
        <>
            {/* about us */}
            <div className="rts__section about is__resturant section__padding">
                <div className="container">
                    <div className="row g-4 align-items-center  ">
                        {/* <div className="col-lg-5">
                            <div className="about__images">
                                <div className="image__left wow fadeInUp">
                                    <img
                                        height={648}
                                        width={428}
                                        src="/assets/images/pages/resturant/1.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="image__right wow fadeInUp">
                                    <img
                                        width={428}
                                        height={648}
                                        src="/assets/images/pages/resturant/2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-7">
                            <div className="about__content">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Restaurants & Bar
                                </span>
                                <h2 className="font-xl wow fadeInUp">
                                    Nos restaurants et Bar
                                </h2>
                                <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                                    Nos restaurants et Bar vous invitent à savourer une cuisine exceptionnelle et à créer des souvenirs mémorables lors de vos événements spéciaux.
                                </p>
                                <div className="reservation__meta wow fadeInUp">
                                    <div className="reservation__item">
                                        <p className="font-sm">Réservation par téléphone</p>
                                        <Link href="tel:+2252730646800">
                                            <img src="/assets/images/icon/phone.svg" alt="" /> +225 27 30 64 68 00
                                        </Link>
                                    </div>
                                    <div className="reservation__item">
                                        <p className="font-sm">Heures d'ouverture</p>
                                        <span>
                                            <img src="/assets/images/icon/clock.svg" alt="" />

                                            Lundi - Dimanche 24h/24
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us end */}
        </>

    )
}

export default AboutSeven