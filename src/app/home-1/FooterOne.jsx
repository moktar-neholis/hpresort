'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

function FooterOne() {
    const { t } = useTranslation();
    return (
        <>
            <footer style={{backgroundColor: '#EDE8DC', color: '#333', padding: '60px 0 0', position: 'relative', overflow: 'hidden'}}>

                {/* Motifs décoratifs de fond */}
                <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0}}>
                    <div style={{position: 'absolute', bottom: '-20px', left: '-40px', opacity: 0.5}}>
                        <img src="/assets/images/footer/shape-1.svg" alt="" style={{width: '320px', height: 'auto'}} />
                    </div>
                    <div style={{position: 'absolute', top: '10%', right: '2%', opacity: 0.5}}>
                        <img src="/assets/images/footer/shape-3.svg" alt="" style={{width: '200px', height: 'auto'}} />
                    </div>
                </div>

                <div className="container" style={{position: 'relative', zIndex: 1}}>
                    <div className="row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', paddingBottom: '60px'}}>

                        {/* Logo et Description */}
                        <div>
                            <Link href="/">
                                <img
                                    className="footer__logo"
                                    src="/assets/images/logo/hp_logo.png"
                                    alt="footer logo"
                                    width={120}
                                    style={{marginBottom: '20px'}}
                                />
                            </Link>
                            <p style={{fontSize: '14px', lineHeight: '1.6', color: '#666'}}>
                                {t.footer.description}
                            </p>
                        </div>

                        {/* Liens Utiles */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a2e'}}>{t.footer.usefulLinks}</h3>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="flaticon-arrow-right" style={{color: '#D97E4F', fontSize: '14px'}}></i>
                                    <Link href="/restaurant-bar" style={{color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                        {t.footer.links.restaurant}
                                    </Link>
                                </li>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="flaticon-arrow-right" style={{color: '#D97E4F', fontSize: '14px'}}></i>
                                    <Link href="/event" style={{color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                        {t.footer.links.meetings}
                                    </Link>
                                </li>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="flaticon-arrow-right" style={{color: '#D97E4F', fontSize: '14px'}}></i>
                                    <Link href="/activities" style={{color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                        {t.footer.links.wellness}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a2e'}}>{t.footer.contactInfo}</h3>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <i className="flaticon-phone-flip" style={{color: '#D97E4F', fontSize: '16px'}}></i>
                                    <Link href="tel:+2252730646800" style={{color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                        +225 27 30 64 68 00
                                    </Link>
                                </li>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <i className="flaticon-clock" style={{color: '#D97E4F', fontSize: '16px'}}></i>
                                    <span style={{color: '#555', fontSize: '14px'}}>{t.footer.open}</span>
                                </li>
                                <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                                    <i className="flaticon-marker" style={{color: '#D97E4F', fontSize: '16px', marginTop: '2px'}}></i>
                                    <div style={{color: '#555', fontSize: '14px'}}>
                                        BP 923, Yamoussoukro<br/>
                                        Quartier Millionnaire
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Réseaux sociaux */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a2e'}}>{t.footer.social}</h3>
                            <p style={{fontSize: '14px', color: '#666', marginBottom: '20px', lineHeight: '1.6'}}>
                                {t.footer.follow}
                            </p>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
                                <a href="https://www.facebook.com/hpresortyamoussoukro/?locale=fr_FR" target="_blank" rel="noopener noreferrer"
                                    style={{display: 'flex', alignItems: 'center', gap: '12px', color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1877F2', flexShrink: 0}}>
                                        <i className="fab fa-facebook-f" style={{color: '#fff', fontSize: '14px'}}></i>
                                    </span>
                                    Facebook
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                                    style={{display: 'flex', alignItems: 'center', gap: '12px', color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', flexShrink: 0}}>
                                        <i className="fab fa-instagram" style={{color: '#fff', fontSize: '14px'}}></i>
                                    </span>
                                    Instagram
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
                                    style={{display: 'flex', alignItems: 'center', gap: '12px', color: '#555', textDecoration: 'none', fontSize: '14px'}}>
                                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#FF0000', flexShrink: 0}}>
                                        <i className="fab fa-youtube" style={{color: '#fff', fontSize: '14px'}}></i>
                                    </span>
                                    YouTube
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div style={{borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '30px', paddingBottom: '30px', textAlign: 'center'}}>
                        <p style={{margin: 0, fontSize: '13px', color: '#888'}}>
                            {t.footer.copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterOne
