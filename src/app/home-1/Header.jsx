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
             {/* Main header menu */}
            <header className={`main__header header__function ${hydrated && isSticky ? 'is__sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="main__header__wrapper" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '15px 0'}}>
                            <div className="main__logo">
                                <Link href="/">
                                    <img
                                        className="logo__class"
                                        src="/assets/images/logo/hp_logo.png"
                                        alt="HP Resort"
                                        
                                    />
                                </Link>
                            </div>
                            
                            <div className="main__nav" style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                                <div className="navigation d-none d-lg-block">
                                    <nav className="navigation__menu" id="main__menu">
                                        <ul className="list-unstyled" style={{display: 'flex', gap: '25px', margin: 0, padding: 0}}>
                                            <li className="navigation__menu--item">
                                                <Link href="/" className="navigation__menu--item__link">
                                                    ACCUEIL
                                                </Link>
                                            </li>
                                            <li className="navigation__menu--item">
                                                <Link href="/room-one" className="navigation__menu--item__link" style={{color: '#D97E4F'}}>
                                                    CHAMBRES & SUITES
                                                </Link>
                                            </li>
                                            <li className="navigation__menu--item has-child has-arrow">
                                                <Link href="#" className="navigation__menu--item__link">
                                                    NOS ESPACES+
                                                </Link>
                                                <ul className="submenu sub__style" role="menu" style={{position: 'absolute', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px', top: '100%', left: 0, padding: '10px 0'}}>
                                                    <li role="menuitem" style={{padding: '8px 20px'}}>
                                                        <Link href="/event" style={{color: 'black', textDecoration: 'none'}}>Réunions & Événements</Link>
                                                    </li>
                                                    <li role="menuitem" style={{padding: '8px 20px'}}>
                                                        <Link href="/activities" style={{color: 'black', textDecoration: 'none'}}>Bien-être & Détente</Link>
                                                    </li>
                                                    <li role="menuitem" style={{padding: '8px 20px'}}>
                                                        <Link href="/resturant" style={{color: 'black', textDecoration: 'none'}}>Restaurant</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navigation__menu--item">
                                                <Link href="/service" className="navigation__menu--item__link">
                                                    OFFRE DE SÉJOUR+
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <button 
                                style={{
                                    backgroundColor: '#D97E4F',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 24px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    marginRight: '20px'
                                }}
                            >
                                PRESSE
                            </button>
                            
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