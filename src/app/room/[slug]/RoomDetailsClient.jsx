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

const fallbackGallery = [
    '/assets/images/pages/room/r-d-1.webp',
    '/assets/images/pages/room/r-d-2.webp',
    '/assets/images/pages/room/r-d-3.webp',
];

const amenities = [
    { icon: '/assets/images/icon/wifi.svg',          label: 'Wifi Gratuit' },
    { icon: '/assets/images/icon/shower.svg',         label: 'Douche' },
    { icon: '/assets/images/icon/aeroplane.svg',      label: 'Navette aéroport' },
    { icon: '/assets/images/icon/balcony.svg',        label: 'Balcon' },
    { icon: '/assets/images/icon/refrigerator.svg',   label: 'Réfrigérateur' },
    { icon: '/assets/images/icon/support.svg',        label: 'Support 24/7' },
    { icon: '/assets/images/icon/desk.svg',           label: 'Bureau' },
    { icon: '/assets/images/icon/fitness.svg',        label: 'Salle de sport' },
    { icon: '/assets/images/icon/swimming-pool.svg',  label: 'Piscine' },
];

export default function RoomDetailsClient({ roomPost }) {
    if (!roomPost) {
        return <div>Chambre introuvable !</div>;
    }

    const carouselImages = (roomPost.images && roomPost.images.length > 0)
        ? roomPost.images
        : [roomPost.image, ...fallbackGallery].filter(Boolean);

    return (
        <>
            <TopBar />
            <HeaderOne />

            {/* Breadcrumb / Banner avec image propre à la chambre */}
            <BreadcrumbOne
                title={roomPost.title}
                bgImage={roomPost.bannerImg}
                breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Chambres & Suites', href: '/room-one' }]}
                current={roomPost.title}
            />

            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-5 sticky-wrap">

                        {/* ── Left column ── */}
                        <div className="col-xxl-8 col-xl-7">
                            <div className="room__details">

                                {/* Price + Title + Meta */}
                                <span className="h4 price">{roomPost.price}</span>
                                <h2 className="room__title">{roomPost.title}</h2>
                                <div className="room__meta">
                                    <span>
                                        <i className="flaticon-construction" />
                                        {roomPost.surface || "35 m²"}
                                    </span>
                                    <span>
                                        <i className="flaticon-user" />
                                        {roomPost.capacity || "2 Personnes"}
                                    </span>
                                    <span>
                                        <i className="flaticon-bed" />
                                        {roomPost.bedType || "Lit Double"}
                                    </span>
                                </div>

                                {/* Description */}
                                {(roomPost.description || "").split('\n\n').map((para, i) => (
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
                                <span className="h4 d-block mb-30">Équipements de la chambre</span>
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

                                {/* Features */}
                                <span className="h4 d-block mb-50">Caractéristiques de la chambre</span>
                                <div className="room__feature mb-30">
                                    <div className="room__feature__image mb-50">
                                        <img className="rounded-2" src="/assets/images/pages/room/r-d-3.webp" alt="" />
                                    </div>
                                    <div className="group__row">
                                        <ul className="list__item">
                                            <li>Lits supplémentaires disponibles</li>
                                            <li>Climatisation</li>
                                            <li>Décoration artistique</li>
                                            <li>Cafetière / Bouilloire</li>
                                            <li>Literie haut de gamme</li>
                                            <li>Technologie Smart TV</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Nos chambres élégamment aménagées sont conçues pour offrir le summum du confort et du style.</p>
                            </div>
                        </div>

                        {/* ── Right sidebar: Booking form ── */}
                        <div className="col-xxl-4 col-xl-5 sticky-item">
                            <div className="rts__booking__form has__background is__room__details sticky-item">
                                <form action="#" method="post" className="advance__search">
                                    <h5 className="pt-0">Réserver votre séjour</h5>
                                    <div className="advance__search__wrapper">

                                        {/* Check In */}
                                        <div className="query__input wow fadeInUp">
                                            <label htmlFor="check__in" className="query__label">Arrivée</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__in" name="check__in" placeholder="15 Jun 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        {/* Check Out */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".2s">
                                            <label htmlFor="check__out" className="query__label">Départ</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__out" name="check__out" placeholder="20 Jun 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        {/* Adults */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                                            <label htmlFor="adult" className="query__label">Adultes</label>
                                            <div className="query__input__position">
                                                <select name="adult" id="adult" className="form-select">
                                                    {[1,2,3,4,5,6,7].map(n => (
                                                        <option key={n} value={n}>{n} Personne{n > 1 ? 's' : ''}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        {/* Children */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                                            <label htmlFor="child" className="query__label">Enfants</label>
                                            <div className="query__input__position">
                                                <select name="child" id="child" className="form-select">
                                                    {[0,1,2,3,4].map(n => (
                                                        <option key={n} value={n}>{n} Enfant{n > 1 ? 's' : ''}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        {/* Room */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="room" className="query__label">Chambre</label>
                                            <div className="query__input__position">
                                                <select name="room" id="room" className="form-select">
                                                    {[1,2,3,4,5].map(n => (
                                                        <option key={n} value={n}>{n} Chambre{n > 1 ? 's' : ''}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon is__svg">
                                                    <img src="/assets/images/icon/room.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Extra Bed */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".6s">
                                            <label htmlFor="exbed" className="query__label">Lit supplémentaire</label>
                                            <div className="query__input__position">
                                                <select name="exbed" id="exbed" className="form-select">
                                                    {[0,1,2,3,4].map(n => (
                                                        <option key={n} value={n}>{n} Lit{n > 1 ? 's' : ''}</option>
                                                    ))}
                                                </select>
                                                <div className="query__input__icon is__svg">
                                                    <img src="/assets/images/icon/bed-alt.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Extra Services */}
                                        <h5 className="p-0 mt-20">Services supplémentaires</h5>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="clean" id="clean" />
                                            <label htmlFor="clean">Nettoyage chambre</label>
                                            <span>12 000 CFA / Nuit</span>
                                        </div>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="parking" id="parking" />
                                            <label htmlFor="parking">Parking</label>
                                            <span>Gratuit</span>
                                        </div>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="transport" id="transport" />
                                            <label htmlFor="transport">Navette aéroport</label>
                                            <span>15 000 CFA / Trajet</span>
                                        </div>

                                        <div className="query__input checkbox wow fadeInUp">
                                            <input type="checkbox" name="breakfast" id="breakfast" />
                                            <label htmlFor="breakfast">Petit-déjeuner</label>
                                            <span>8 000 CFA / Personne</span>
                                        </div>

                                        {/* Total */}
                                        <div className="total__price">
                                            <span className="total h6 mb-0">Prix / nuit</span>
                                            <span className="price h6 m-0">{roomPost.price}</span>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href="/contact"
                                            className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            <span>Réserver cette chambre</span>
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
