import Link from 'next/link'
import React from 'react'

function FooterOne() {
    return (
        <>
            {/* footer style one */}
            <footer style={{backgroundColor: '#0F1C2E', color: '#fff', padding: '60px 0 0'}}>
                <div className="container">
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
                            <p style={{fontSize: '14px', lineHeight: '1.6', color: '#ccc'}}>
                                Situé au cœur de Yamoussoukro, HP RESORT est un joyau architectural de 4 étoiles à découvrir et à faire découvrir.
                            </p>
                        </div>

                        {/* Liens Utiles */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#fff'}}>Liens utiles</h3>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="flaticon-arrow-right" style={{color: '#D97E4F', fontSize: '14px'}}></i>
                                    <Link href="#" style={{color: '#ccc', textDecoration: 'none', fontSize: '14px'}}>
                                        Restaurants & Bar
                                    </Link>
                                </li>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="flaticon-arrow-right" style={{color: '#D97E4F', fontSize: '14px'}}></i>
                                    <Link href="/event" style={{color: '#ccc', textDecoration: 'none', fontSize: '14px'}}>
                                        Réunions & Événements
                                    </Link>
                                </li>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="flaticon-arrow-right" style={{color: '#D97E4F', fontSize: '14px'}}></i>
                                    <Link href="/activities" style={{color: '#ccc', textDecoration: 'none', fontSize: '14px'}}>
                                        Bien Etre & Detente
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#fff'}}>Contact info</h3>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <i className="flaticon-phone-flip" style={{color: '#D97E4F', fontSize: '16px'}}></i>
                                    <Link href="tel:+225 27 30 64 68 00" style={{color: '#ccc', textDecoration: 'none', fontSize: '14px'}}>
                                        +225 27 30 64 68 00
                                    </Link>
                                </li>
                                <li style={{marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <i className="flaticon-clock" style={{color: '#D97E4F', fontSize: '16px'}}></i>
                                    <span style={{color: '#ccc', fontSize: '14px'}}>Lun-Dim 24h/24</span>
                                </li>
                                <li style={{marginBottom: '0', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                                    <i className="flaticon-marker" style={{color: '#D97E4F', fontSize: '16px', marginTop: '2px'}}></i>
                                    <div style={{color: '#ccc', fontSize: '14px'}}>
                                        BP 923, Yamoussoukro<br/>
                                        Quartier Millionnaire
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Galerie */}
                        <div>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#fff'}}>Galerie</h3>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px'}}>
                                <img src="/assets/images/footer/premier.jpg" alt="footer" style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}} />
                                <img src="/assets/images/footer/deux.jpg" alt="footer" style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}} />
                                <img src="/assets/images/footer/trois.jpg" alt="footer" style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}} />
                                <img src="/assets/images/footer/quatre.jpg" alt="footer" style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}} />
                                <img src="/assets/images/footer/cinq.jpg" alt="footer" style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}} />
                                <img src="/assets/images/footer/six.jpg" alt="footer" style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}} />
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '30px',
                               paddingBottom: '30px',
                                  textAlign: 'center'
                         }}
                    >
                        <p
                             style={{
                               margin: 0,
                               fontSize: '13px',
                               color: '#999'
                             }}
                >
                 © 2023 Tous droits réservés. Développé par In-novation
             </p>
            </div>
                </div>
            </footer>
            {/* footer style one end */}
        </>
    )
}

export default FooterOne