'use client'
import React, { useState, useEffect } from 'react'
import OffcanvasMenu from './OffcanvasMenu';
import Link from 'next/link';
import LoginForm from '../form/LoginForm';
import SignUpForm from '../form/SignUpForm';

function HeaderOne() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        setHydrated(true);

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {/* header menu */}
            <header className={`main__header header__function ${hydrated && isSticky ? 'is__sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="main__header__wrapper">
                            <div className="main__nav">
                                <div className="navigation d-none d-lg-block">
                                    <nav className="navigation__menu" id="main__menu">
                                        <ul className="list-unstyled">
                                            <li className="navigation__menu--item has-child">
                                                <Link href="/" className="navigation__menu--item__link">
                                                    ACCUEIL
                                                </Link>
                                            </li>
                                            <li className="navigation__menu--item has-child">
                                                <Link href="/room-one" className="navigation__menu--item__link">
                                                    CHAMBRES & SUITES
                                                </Link>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link href="/" className="navigation__menu--item__link">
                                                    Pages
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem">
                                                        <Link href="/about">About</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link href="/resturant">Restaurant</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link href="/gallery">Gallery</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link href="/service">Service</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link href="/event">Event</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link href="/activities">Activities</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link href="/" className="navigation__menu--item__link">
                                                    Blog
                                                </Link>
                                                <ul className="submenu sub__style" role="menu">
                                                    <li role="menuitem">
                                                        <Link href="/blog">Blog</Link>
                                                    </li>
                                                    <li role="menuitem">
                                                        <Link href="/blog/Live-Elegantly-in-Our-Contemporary-Suite-for-Apartment">Blog Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navigation__menu--item">
                                                <Link
                                                    href="/contact"
                                                    className="navigation__menu--item__link"
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="main__logo">
                                <Link href="/">
                                    <img
                                        className="logo__class"
                                        src="/assets/images/logo/hp_logo.png"
                                        alt="hp resort logo"
                                        style={{ width: '60px', height: '60px' }}
                                    />
                                </Link>
                            </div>
                            <div className="main__right">
                                {/* Sign In Button *
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsLoginOpen(true)}
                                >
                                    <span>Sign In</span>
                                </button>

                                {/* Sign Up Button *
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-block"
                                    onClick={() => setIsSignupOpen(true)}
                                >
                                    <span>Sign Up</span>
                                </button>

                                {/* Book Now Button */}
                                <Link href="https://www.abidjan.net/" className="theme-btn btn-style sm-btn fill">
                                    <span>PRESSE</span>
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
                                    onClick={() => setIsOffcanvasOpen(true)}
                                >
                                    <span>
                                        <img src="/assets/images/icon/menu-icon.svg" alt="menu" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
            {/* Login Form Modal 
            <LoginForm
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSignupOpen={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                }}
            />
            {/* Sign Up Form Modal *
            <SignUpForm
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onLoginOpen={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                }}
            />*/}
            {/* header menu end */}
        </>

    )
}

export default HeaderOne