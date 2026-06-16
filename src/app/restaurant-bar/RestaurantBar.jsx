import Link from 'next/link'
import React from 'react'
import items from '../data/data-restaurant-bar.json'

function RestaurantBar() {
    return (
        <div className="rts__section section__padding">
            <div className="container">
                <div className="about__content text-center">
                    <h2 className="font-xl wow fadeInUp">
                        Nos restaurants et Bar
                    </h2>
                    <p className="font-sm mt-30 wow fadeInUp" data-wow-delay=".3s">
                        Nos restaurants et Bar vous invitent à savourer une cuisine exceptionnelle et à
                        créer des souvenirs mémorables lors de vos événements spéciaux.
                    </p>
                </div>
                <div className="row g-30 mt-30">
                    {items.map((item) => (
                        <div key={item.slug} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="room__card">
                                <div className="room__card__top">
                                    <div className="room__card__image">
                                        <img
                                            src={item.image}
                                            width={420}
                                            height={310}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                                <div className="room__card__meta">
                                    <h6 style={{ color: '#16213E', textTransform: 'uppercase', fontWeight: 700 }}>
                                        {item.title}
                                    </h6>
                                    <p className="font-sm">{item.excerpt}</p>
                                    <Link href={`/read-more/${item.slug}`} className="theme-btn btn-style sm-btn fill">
                                        <span>LIRE LA SUITE</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RestaurantBar
