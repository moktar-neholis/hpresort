'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import GDPRCookie from '../../home-1/GDPRCookie'
import TopBar from '../../home-1/TopBar'
import HeaderOne from '../../home-1/Header'
import BreadcrumbOne from '../../breadcrumb/Breadcrumb'
import FooterOne from '../../home-1/FooterOne'
import BackToTop from '../../home-1/BackToTop'
import sejourPackages from '../../data/data-sejour-package.json'
import restaurantBarItems from '../../data/data-restaurant-bar.json'

const allItems = [...sejourPackages, ...restaurantBarItems]

function ReadMorePage() {
    const { slug } = useParams()
    const pkg = allItems.find((item) => item.slug === slug)

    if (!pkg) {
        return (
            <>
                <TopBar />
                <HeaderOne />
                <div className="rts__section section__padding">
                    <div className="container text-center">
                        <p>Offre introuvable.</p>
                        <Link href="/sejour-package">Retour aux séjours packagés</Link>
                    </div>
                </div>
                <FooterOne />
            </>
        )
    }

    return (
        <>
            <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90,
                }}
            />
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title={pkg.title}
                bgImage="/assets/images/banner/luxurious_hotel_bedroom_with_kingsize_bed_plush_furniture_elegant_decor_1.webp"
                description={
                    <>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Accueil</Link>
                        <span style={{ margin: '0 8px' }}>-</span>
                        <span style={{ color: '#D97E4F' }}>{pkg.title}</span>
                    </>
                }
            />
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-30">
                        <div className="col-lg-8">
                            <div style={{ border: '1px solid var(--rts-border)', borderRadius: '10px', overflow: 'hidden' }}>
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    style={{ width: '100%', display: 'block' }}
                                />
                                <div style={{ padding: '30px' }}>
                                    <h4 className="mb-20">{pkg.title}</h4>
                                    <p className="font-sm">{pkg.description}</p>
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        style={{ width: '180px', borderRadius: '6px', marginTop: '20px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div style={{ border: '1px solid var(--rts-border)', borderRadius: '10px', padding: '30px' }}>
                                <h5 className="mb-20">Besoin d'aide ?</h5>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                                    <i className="flaticon-clock" style={{ color: '#D97E4F', fontSize: '20px' }} />
                                    <div>
                                        <span style={{ display: 'block', fontSize: '13px', color: '#777' }}>Lundi - Dimanche</span>
                                        <span style={{ display: 'block', fontWeight: 'bold' }}>24h/24</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                                    <i className="flaticon-phone-flip" style={{ color: '#D97E4F', fontSize: '20px' }} />
                                    <div>
                                        <span style={{ display: 'block', fontSize: '13px', color: '#777' }}>Contact</span>
                                        <Link href="tel:+2252730646800" style={{ display: 'block', fontWeight: 'bold', color: 'var(--rts-heading)', textDecoration: 'none' }}>
                                            +225 27 30 64 68 00
                                        </Link>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <i className="flaticon-marker" style={{ color: '#D97E4F', fontSize: '20px' }} />
                                    <div>
                                        <span style={{ display: 'block', fontSize: '13px', color: '#777' }}>Localisation</span>
                                        <span style={{ display: 'block', fontWeight: 'bold' }}>
                                            BP 923, Yamoussoukro Quartier Millionnaire
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default ReadMorePage
