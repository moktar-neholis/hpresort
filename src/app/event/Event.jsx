'use client'
import React from 'react';
import posts from '../data/data-event.json';
import EventCard from './EventCard';
import './event-card.css';
import { useTranslation } from '../hooks/useTranslation';

function EventTwo() {
    const { t } = useTranslation();
    return (
        <>
            {/* event area */}
            <div className="rts__section section__padding event__listing">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-8">
                            <div className="section__topbar">
                                <h2 className="content__title h2 lh-1">{t.event.title}</h2>
                                <p className="font-sm mt-20">
                                    {t.event.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        {posts.map((data) => (
                            <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">
                                <EventCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* event area end */}
        </>
    );
}

export default EventTwo;
