'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import posts from '../data/data-activities.json';
import { useTranslation } from '../hooks/useTranslation';

function ActivitiesOne() {
    const { t, lang } = useTranslation();
    const [activeTab, setActiveTab] = useState(posts[0]?.slug || '');

    return (
        <>
            {/* activities area */}
            <div className="rts__section resturant__menu__bg section__padding" style={{ marginTop: '60px' }}>
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    HP Resort
                                </span>
                                <h2 className="content__title h2 lh-1">{t.activities.title}</h2>
                            </div>
                            <div className="section__content__right">
                                <p>{t.activities.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tab navigation */}
                    <div className="row">
                        <div className="col-12">
                            <div className="resturant__menu__list">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {posts.map((item) => (
                                        <button
                                            key={item.slug}
                                            className={`nav-link ${activeTab === item.slug ? 'active' : ''}`}
                                            onClick={() => setActiveTab(item.slug)}
                                        >
                                            {lang === 'en' ? (item.title_en || item.title) : item.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab content */}
                            <div className="tab-content mt-40" id="nav-tabContent">
                                {posts.map((item) => {
                                    const title       = lang === 'en' ? (item.title_en       || item.title)       : item.title;
                                    const description = lang === 'en' ? (item.description_en || item.description) : item.description;
                                    return (
                                        <div
                                            key={item.slug}
                                            style={{ display: activeTab === item.slug ? 'block' : 'none' }}
                                        >
                                            <div className="row g-4 align-items-center">
                                                <div className="col-lg-5">
                                                    <img
                                                        src={item.image}
                                                        alt={title}
                                                        className="rounded-2 w-100"
                                                        style={{ height: '380px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="col-lg-7">
                                                    <h3 className="mb-20" style={{ color: '#16213E' }}>{title}</h3>
                                                    <p className="font-sm">
                                                        {description ? description.split('.')[0] + '.' : ''}
                                                    </p>
                                                    <Link
                                                        href={`/activities/${item.slug}`}
                                                        className="theme-btn btn-style fill no-border sm-btn mt-20 d-inline-block"
                                                    >
                                                        <span>LIRE LA SUITE</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* activities area end */}
        </>
    );
}

export default ActivitiesOne;
