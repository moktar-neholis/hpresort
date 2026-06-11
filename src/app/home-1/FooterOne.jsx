import Link from 'next/link'
import React from 'react'

function FooterOne() {
    return (
        <>
            {/* footer style one */}
            <footer className="rts__section rts__footer is__common__footer footer__background has__shape">
                <div className="section__shape">
                    <div className="shape__1">
                        <img src="/assets/images/footer/shape-1.svg" alt="" />
                    </div>
                    <div className="shape__2">
                        <img src="/assets/images/footer/shape-2.svg" alt="" />
                    </div>
                    <div className="shape__3">
                        <img src="/assets/images/footer/shape-3.svg" alt="" />
                    </div>
                </div>
                <div className="container">
                    {/* <div className="row">
                        <div className="footer__newsletter">
                            <span className="h2">Join Our Newsletter</span>
                            <div className="rts__form">
                                <form action="#" method="post">
                                    <input
                                        type="email"
                                        name="email"
                                        id="subscription"
                                        placeholder="Enter your mail"
                                        required
                                    />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="footer__widget__wrapper">
                            <div className="rts__widget">
                                <Link href="/">
                                    <img
                                        className="footer__logo"
                                        src="/assets/images/logo/hp_logo.png"
                                        alt="footer logo"
                                        width={150}
                                    />
                                </Link>
                                <p className="font-sm max-290 mt-20">
                                    Situé au cœur de Yamoussoukro, HP RESORT est 
                                    un joyau architectural de 4 étoiles à découvrir et à faire découvrir.
                                </p>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Liens Utiles</span>
                                <ul>
                                    <li>
                                        <Link href="#" aria-label="footer__link">
                                            Restaurants & Bar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-label="footer__link">
                                            Réunions & Evenements
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-label="footer__link">
                                            Bien Etre & Detente
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#" aria-label="footer__link">
                                            Special Offers
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Guest Service</span>
                                <ul>
                                    <li>24/7 Front Desk</li>
                                    <li>Parking</li>
                                    <li>Room Service</li>
                                    <li>Free Wi-Fi</li>
                                    <li>Concierge Service</li>
                                </ul>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Contact Us</span>
                                <ul>
                                    <li>
                                        <Link aria-label="footer__contact" href="tel:+225 27 30 64 68 00">
                                            <i className="flaticon-phone-flip" /> +225 27 30 64 68 00

                                        </Link>
                                    </li>
                                    <li>
                                        <Link aria-label="footer__contact" href="mailto:UjJw6@example.com">
                                            <i className="flaticon-envelope" />
                                            Moonlit@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link aria-label="footer__contact" href="#">
                                            <i className="flaticon-marker" />
                                            M5T 2L9 Toronto, Canada
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__text">
                    <div className="container">
                        <div className="row">
                            <div className="copyright__wrapper">
                                <p className="mb-0">
                                    Copyright © 2024 Moonlit. All rights reserved.
                                </p>
                                <div className="footer__social__link">
                                    <Link href="#" aria-label="footer__social" className="link__item">
                                        Facebook
                                    </Link>
                                    <Link href="#" aria-label="footer__social" className="link__item">
                                        Linkedin
                                    </Link>
                                    <Link href="#" aria-label="footer__social" className="link__item">
                                        Twitter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer style one end */}
        </>

    )
}

export default FooterOne