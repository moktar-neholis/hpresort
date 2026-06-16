import React from 'react'
import GDPRCookie from '../home-1/GDPRCookie'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import BreadcrumbOne from '../breadcrumb/Breadcrumb'
import SejourPackage from './Sejour-package'
import FooterOne from '../home-1/FooterOne'
import BackToTop from '../home-1/BackToTop'


function page() {
    return (
        <>
            <GDPRCookie
                settings={{
                    title: "Accept Cookies & privacy",
                    message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.",
                    expires: 90, // Cookie expiration in days
                }}
            />
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title="Séjour Packagé"
                description="Découvrez nos formules de séjour exclusives, conçues pour offrir une expérience exceptionnelle à chacun de nos clients."
            />
            <SejourPackage />
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page