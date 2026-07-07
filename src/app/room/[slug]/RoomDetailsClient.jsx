"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TopBar from '../../home-1/TopBar';
import HeaderOne from '../../home-1/Header';
import BreadcrumbOne from '../../breadcrumb/Breadcrumb';
import FooterOne from '../../home-1/FooterOne';
import BackToTop from '../../home-1/BackToTop';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';

const fallbackGallery = [
    '/assets/images/pages/room/r-d-1.webp',
    '/assets/images/pages/room/r-d-2.webp',
    '/assets/images/pages/room/r-d-3.webp',
];

const commoditesParChambre = {
    'chambre-twins': [
        '2 Lits individuels et 2 chevets',
        '1 Douche italienne',
        '1 Coiffeuse / Table de travail',
        '1 Toilette autonome',
        '1 Table bistrot de 2 places',
        'Sèche-cheveux',
        '1 Télévision à écran plat',
        'Wifi',
        '1 Plateau de courtoisie',
        'Climatisation',
        '1 Mini bar',
        'Accès PMR',
        '1 Coffre-fort à la demande',
        'Non-fumeur',
    ],
    'chambre-superieure': [
        '1 Lit double et 2 chevets',
        '1 Coiffeuse / Table de travail',
        '1 Table bistrot de 2 places',
        '1 Télévision à écran plat',
        '1 Plateau de courtoisie',
        '1 Mini bar',
        '1 Coffre-fort à la demande',
        'Balcon ou non',
        '1 Douche italienne ou 1 Baignoire',
        '1 Toilette autonome',
        'Sèche-cheveux',
        'Wifi',
        'Climatisation',
        'Accès PMR',
        'Non-fumeur',
    ],
    'chambre-deluxe': [
        '1 Lit double et 2 chevets',
        '1 Douche italienne ou 1 Baignoire',
        '1 Coiffeuse / Table de travail',
        '1 Toilette autonome',
        '1 Salon de 4 places',
        '1 Sèche-cheveux',
        '1 Télévision à écran plat',
        'Wifi',
        '1 Plateau de courtoisie',
        'Climatisation',
        '1 Mini bar',
        'Accès PMR',
        '1 Coffre-fort',
        'Chaussure d\'intérieur',
        'Balcon ou non',
        'Non-fumeur',
    ],
    'suite-junior': [
        '1 Lit double et 2 chevets',
        '1 Salon de 5 places',
        '1 Coiffeuse / Table de travail',
        '2 Télévisions à écran plat',
        '1 Plateau de courtoisie',
        '1 Mini bar',
        '1 Coffre-fort',
        'Balcon ou non',
        '1 Baignoire',
        '1 Toilette autonome',
        'Sèche-cheveux',
        'Wifi',
        'Climatisation',
        'Accès PMR',
        'Vêtement et chaussure d\'intérieur',
        'Non-fumeur',
    ],
    'suite-senior': [
        '1 Lit double et 2 chevets',
        '1 Salon de 5 places',
        '1 Coiffeuse / Table de travail',
        '2 Télévisions à écran plat',
        '1 Plateau de courtoisie',
        '1 Mini bar',
        '1 Coffre-fort',
        'Balcon ou non',
        '1 Baignoire',
        '1 Toilette autonome',
        'Sèche-cheveux',
        'Wifi',
        'Climatisation',
        'Accès PMR',
        'Vêtement et chaussure d\'intérieur',
        'Non-fumeur',
    ],
};

export default function RoomDetailsClient({ roomPost }) {
    const { t, lang } = useTranslation();
    const title       = lang === 'en' ? (roomPost.title_en       || roomPost.title)       : roomPost.title;
    const description = lang === 'en' ? (roomPost.description_en || roomPost.description) : roomPost.description;
    const capacity    = lang === 'en' ? (roomPost.capacity_en    || roomPost.capacity)    : roomPost.capacity;
    const bedType     = lang === 'en' ? (roomPost.bedType_en     || roomPost.bedType)     : roomPost.bedType;

    const commodites = commoditesParChambre[roomPost.slug] || [];

    if (!roomPost) {
        return <div>Chambre introuvable !</div>;
    }

    const amenities = [
        { icon: '/assets/images/icon/wifi.svg',         label: t.amenities.wifi },
        { icon: '/assets/images/icon/shower.svg',        label: t.amenities.shower },
        { icon: '/assets/images/icon/aeroplane.svg',     label: t.amenities.airport },
        { icon: '/assets/images/icon/balcony.svg',       label: t.amenities.balcony },
        { icon: '/assets/images/icon/refrigerator.svg',  label: t.amenities.fridge },
        { icon: '/assets/images/icon/support.svg',       label: t.amenities.support },
        { icon: '/assets/images/icon/desk.svg',          label: t.amenities.desk },
        { icon: '/assets/images/icon/fitness.svg',       label: t.amenities.fitness },
        { icon: '/assets/images/icon/swimming-pool.svg', label: t.amenities.pool },
    ];

    const carouselImages = (roomPost.images && roomPost.images.length > 0)
        ? roomPost.images
        : [roomPost.image, ...fallbackGallery].filter(Boolean);

    return (
        <>
            <TopBar />
            <HeaderOne />

            <BreadcrumbOne
                title={title}
                bgImage={roomPost.bannerImg}
                breadcrumb={[
                    { label: t.breadcrumb.home, href: '/' },
                    { label: t.breadcrumb.rooms, href: '/room-one' }
                ]}
                current={title}
            />

            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-5 sticky-wrap">

                        {/* ── Left column ── */}
                        <div className="col-xxl-8 col-xl-7">
                            <div className="room__details">

                                <span className="h4 price">{roomPost.price}</span>
                                <h2 className="room__title">{title}</h2>
                                <div className="room__meta">
                                    <span>
                                        <i className="flaticon-construction" />
                                        {roomPost.surface || "35 m²"}
                                    </span>
                                    <span>
                                        <i className="flaticon-user" />
                                        {capacity || `2 ${t.rooms.persons}`}
                                    </span>
                                    <span>
                                        <i className="flaticon-bed" />
                                        {bedType}
                                    </span>
                                </div>

                                {(description || "").split('\n\n').map((para, i) => (
                                    <p key={i} className={i > 0 ? 'mt-20' : ''}>{para}</p>
                                ))}

                                {/* Carousel */}
                                <div className="room__image__group mt-30 mb-50">
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                                        loop={carouselImages.length > 1}
                                        spaceBetween={16}
                                        slidesPerView={1}
                                        breakpoints={{ 768: { slidesPerView: 2 } }}
                                    >
                                        {carouselImages.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                <img
                                                    className="rounded-2 w-100"
                                                    src={img}
                                                    alt={`${roomPost.title} - photo ${i + 1}`}
                                                    style={{ height: '320px', objectFit: 'cover' }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Amenities */}
                                <span className="h4 d-block mb-30">{t.amenities.title}</span>
                                <div className="room__amenity mb-50">
                                    <div className="group__row">
                                        {amenities.slice(0, 3).map((item, i) => (
                                            <div key={i} className="single__item">
                                                <img src={item.icon} height={30} width={36} alt="" />
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="group__row">
                                        {amenities.slice(3, 6).map((item, i) => (
                                            <div key={i} className="single__item">
                                                <img src={item.icon} height={30} width={36} alt="" />
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="group__row">
                                        {amenities.slice(6, 9).map((item, i) => (
                                            <div key={i} className="single__item">
                                                <img src={item.icon} height={30} width={36} alt="" />
                                                <span>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Commodités */}
                                {commodites.length > 0 && (
                                    <>
                                        <span className="h4 d-block mb-50">Commodités</span>
                                        <div className="room__feature mb-30">
                                            <div className="room__feature__image mb-50">
                                                <img className="rounded-2" src="/assets/images/pages/room/sj-1.jpg" alt="" />
                                            </div>
                                            <div className="group__row">
                                                <ul className="list__item">
                                                    {commodites.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* ── Right sidebar: Booking form ── */}
                        <div className="col-xxl-4 col-xl-5 sticky-item">
                            <div className="rts__booking__form has__background is__room__details sticky-item">
                                <form action="#" method="post" className="advance__search">
                                    <h5 className="pt-0">{t.booking.title}</h5>
                                    <div className="advance__search__wrapper">

                                        <div className="query__input wow fadeInUp">
                                            <label htmlFor="check__in" className="query__label">{t.booking.checkIn}</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__in" name="check__in" placeholder="15 Jun 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        <div className="query__input wow fadeInUp" data-wow-delay=".2s">
                                            <label htmlFor="check__out" className="query__label">{t.booking.checkOut}</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__out" name="check__out" placeholder="20 Jun 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                                            <label htmlFor="adult" className="query__label">{t.booking.adults}</label>
                                            <div className="query__input__position">
                                                <select name="adult" id="adult" className="form-select">
                                                    {[1,2,3,4,5,6,7].map(n => (
                                                        <option key={n} value={n}>{n} {n > 1 ? t.rooms.persons : t.rooms.person}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                                            <label htmlFor="child" className="query__label">{t.booking.children}</label>
                                            <div className="query__input__position">
                                                <select name="child" id="child" className="form-select">
                                                    {[0,1,2,3,4].map(n => (
                                                        <option key={n} value={n}>{n} {t.booking.children}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="room" className="query__label">{t.booking.room}</label>
                                            <div className="query__input__position">
                                                <select name="room" id="room" className="form-select">
                                                    {[1,2,3,4,5].map(n => (
                                                        <option key={n} value={n}>{n} {n > 1 ? t.booking.rooms : t.booking.room}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon is__svg">
                                                    <img src="/assets/images/icon/room.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="query__input wow fadeInUp" data-wow-delay=".6s">
                                            <label htmlFor="exbed" className="query__label">{t.booking.extraBed}</label>
                                            <div className="query__input__position">
                                                <select name="exbed" id="exbed" className="form-select">
                                                    {[0,1,2,3,4].map(n => (
                                                        <option key={n} value={n}>{n} {n > 1 ? t.booking.bedsPlural : t.booking.beds}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon is__svg">
                                                    <img src="/assets/images/icon/bed-alt.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <h5 className="p-0 mt-20">{t.booking.services}</h5>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="clean" id="clean" />
                                            <label htmlFor="clean">{t.booking.cleaning}</label>
                                            <span>12 000 CFA {t.booking.perNight}</span>
                                        </div>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="parking" id="parking" />
                                            <label htmlFor="parking">{t.booking.parking}</label>
                                            <span>{t.booking.free}</span>
                                        </div>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="transport" id="transport" />
                                            <label htmlFor="transport">{t.booking.transport}</label>
                                            <span>15 000 CFA {t.booking.perTrip}</span>
                                        </div>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="breakfast" id="breakfast" />
                                            <label htmlFor="breakfast">{t.booking.breakfast}</label>
                                            <span>8 000 CFA {t.booking.perPerson}</span>
                                        </div>

                                        <div className="total__price">
                                            <span className="total h6 mb-0">{t.booking.totalPrice}</span>
                                            <span className="price h6 m-0">{roomPost.price}</span>
                                        </div> */}

                                        <Link
                                            href="/contact"
                                            className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            <span>{t.booking.bookNow}</span>
                                        </Link>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FooterOne />
            <BackToTop />
        </>
    );
}
