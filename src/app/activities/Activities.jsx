'use client'
import React from 'react';
import posts from '../data/data-activities.json';
import ActivitiesCard from './ActivitiesCard';
import './activities-card.css';
import { useTranslation } from '../hooks/useTranslation';

function ActivitiesOne() {
    const { t, lang } = useTranslation();
    return (
        <>
            {/* activities area */}
            <div className="rts__section section__padding activities__listing">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-8">
                            <div className="section__topbar">
                                <h2 className="content__title h2 lh-1">{t.activities.title}</h2>
                                <p className="font-sm mt-20">
                                    {t.activities.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        {posts.map((data) => (
                            <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">
                                <ActivitiesCard
                                    Slug={data.slug}
                                    Img={data.image}
                                    Title={lang === 'en' ? (data.title_en || data.title) : data.title}
                                    Description={lang === 'en' ? (data.description_en || data.description) : data.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* activities area end */}
        </>
    );
}

export default ActivitiesOne;
