'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

function TopBar() {
    const { lang, setLang } = useTranslation()

    return (
        <div className="header__top">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="social__links">
                            <Link className="link__item gap-10" href="callto:+2252730646800">
                                <i className="flaticon-phone-flip" /> +225 27 30 64 68 00
                            </Link>
                            <Link className="link__item gap-10" href="mailto:info@hp-resort.ci">
                                <i className="flaticon-envelope" /> info@hp-resort.ci
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex justify-content-between align-items-center">
                        <div className="location">
                            <Link className="link__item gap-10" href="/">
                                <i className="flaticon-marker" />
                                BP 923, Yamoussoukro Quartier Millionnaire
                            </Link>
                        </div>

                        {/* Switcher FR / EN */}
                        <div className="language__selector" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <i className="flaticon-globe" />
                            <button
                                onClick={() => setLang('fr')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: lang === 'fr' ? '700' : '400',
                                    textDecoration: lang === 'fr' ? 'underline' : 'none',
                                    padding: '0 2px',
                                    fontSize: '13px',
                                    color: 'inherit'
                                }}
                            >
                                FR
                            </button>
                            <span style={{ opacity: 0.5 }}>|</span>
                            <button
                                onClick={() => setLang('en')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: lang === 'en' ? '700' : '400',
                                    textDecoration: lang === 'en' ? 'underline' : 'none',
                                    padding: '0 2px',
                                    fontSize: '13px',
                                    color: 'inherit'
                                }}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
