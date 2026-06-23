'use client'
import Link from 'next/link';
import React from 'react'
import './event-card.css';
import { useTranslation } from '../hooks/useTranslation';

function EventCard({ data }) {
    const { t, lang } = useTranslation();

    const title       = lang === 'en' ? (data.title_en       || data.title)       : data.title;
    const description = lang === 'en' ? (data.description_en || data.description) : data.description;

    return (
        <div className="room__card is__event">
            <div className="room__card__top">
                <div className="room__card__image">
                    <Link href={`/event/${data.slug || "details"}`}>
                        <img
                            src={data.image || "/assets/images/pages/event/event1.jpg"}
                            width={420}
                            height={310}
                            alt={title}
                        />
                    </Link>
                </div>
            </div>
            <div className="room__card__meta">
                <Link href={`/event/${data.slug || "details"}`} className="room__card__title h5">
                    {title}
                </Link>
                <p className="font-sm">
                    {description}
                </p>
                <Link href={`/event/${data.slug || "details"}`} className="theme-btn btn-style fill no-border sm-btn">
                    <span>{t.event.readMore}</span>
                </Link>
            </div>
        </div>
    )
}

export default EventCard
