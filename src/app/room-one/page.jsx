'use client'
import React, { useState } from 'react'
import TopBar from '../home-1/TopBar'
import HeaderOne from '../home-1/Header'
import BreadcrumbOne from '../breadcrumb/Breadcrumb'
import AdvanceFormTwo from '../form/AdvanceFormTwo'
import RoomSix from '../room/RoomSix'
import FooterOne from '../home-1/FooterOne'
import BackToTop from '../home-1/BackToTop'
import GDPRCookie from '../home-1/GDPRCookie'

function page() {
    const [roomFilter, setRoomFilter] = useState('');

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
                title="Chambres & Suites"
                breadcrumb={[{ label: 'Accueil', href: '/' }]}
                current="Chambres & Suites"
            />
            <AdvanceFormTwo onFilterChange={setRoomFilter} />
            <RoomSix filter={roomFilter} />
            <FooterOne />
            <BackToTop />
        </>
    )
}

export default page
