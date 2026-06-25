'use client'
import React, { useState, useEffect } from 'react'
import OffcanvasMenu from './OffcanvasMenu';
import Link from 'next/link';
import LoginForm from '../form/LoginForm';
import SignUpForm from '../form/SignUpForm';
import { useTranslation } from '../hooks/useTranslation';

function HeaderOne() {
    const { t } = useTranslation();
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
            {/* Main header menu */}
            <header className={`main__header header__function ${hydrated && isSticky ? 'is__sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="main__header__wrapper">
                            <div className="main__nav">
                                <div className="navigation d-none d-lg-block">
                                    <nav className="navigation__menu" id="main__menu">
                                        <ul className="list-unstyled">
                                            <li className="navigation__menu--item">
                                                <Link href="/" className="navigation__menu--item__link">
                                                    {t.nav.home}
                                                </Link>
                                            </li>
                                            <li className="navigation__menu--item">
                                                <Link href="/room-one" className="navigation__menu--item__link">
                                                    {t.nav.rooms}
                                                </Link>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link href="#" className="navigation__menu--item__link">
                                                    {t.nav.spaces}
                                                </Link>
                                                <ul className="submenu sub__style" role="menu" style={{ position: 'absolute', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px', top: '100%', left: 0, padding: '10px 0' }}>
                                                    <li role="menuitem" style={{ padding: '8px 20px' }}>
                                                        <Link href="/event" style={{ color: 'black', textDecoration: 'none' }}>{t.nav.meetings}</Link>
                                                    </li>
                                                    <li role="menuitem" style={{ padding: '8px 20px' }}>
                                                        <Link href="/activities" style={{ color: 'black', textDecoration: 'none' }}>{t.nav.wellness}</Link>
                                                    </li>
                                                    <li role="menuitem" style={{ padding: '8px 20px' }}>
                                                        <Link href="/restaurant-bar" style={{ color: 'black', textDecoration: 'none' }}>{t.nav.restaurant}</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link href="#" className="navigation__menu--item__link">
                                                    {t.nav.offers}
                                                </Link>
                                                <ul className="submenu sub__style" role="menu" style={{ position: 'absolute', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px', top: '100%', left: 0, padding: '10px 0' }}>
                                                    <li role="menuitem" style={{ padding: '8px 20px' }}>
                                                        <Link href="/sejour-package" style={{ color: 'black', textDecoration: 'none' }}>{t.nav.packages}</Link>
                                                    </li>
                                                    <li role="menuitem" style={{ padding: '8px 20px' }}>
                                                        <Link href="/promotion" style={{ color: 'black', textDecoration: 'none' }}>{t.nav.promotions}</Link>
                                                    </li>
                                                </ul>
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
                                        alt="HP Resort"
                                    />
                                </Link>
                            </div>

                            <div className="main__right">
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-inline-flex"
                                    onClick={() => setIsLoginOpen(true)}
                                >
                                    <span>{t.header.login}</span>
                                </button>
                                <button
                                    className="theme-btn btn-style sm-btn border d-none d-lg-inline-flex"
                                    onClick={() => setIsSignupOpen(true)}
                                >
                                    <span>{t.header.register}</span>
                                </button>
                                <button className="theme-btn btn-style sm-btn fill d-none d-lg-inline-flex">
                                    <span>{t.header.book}</span>
                                </button>
                                <button
                                    className="theme-btn btn-style sm-btn fill d-lg-none"
                                    onClick={() => setIsOffcanvasOpen(true)}
                                    aria-label="Open menu"
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
            {/* Login Form Modal */}
            <LoginForm
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSignupOpen={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                }}
            />
            {/* Sign Up Form Modal */}
            <SignUpForm
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onLoginOpen={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                }}
            />
        </>

    )
}

export default HeaderOne
