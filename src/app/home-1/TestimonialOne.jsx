'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

const partenaires = [
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/1.png', alt: 'Hotel Président' },
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/2.png',    alt: 'Orange Money' },
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/3.png',    alt: 'Yamoussoukro' },
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/4.png',             alt: 'SPA+' },
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/5.png',       alt: 'DJ School' },
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/6.png',         alt: 'Solibra' },
    { src: 'https://hpresort.in-novation.tech/assets/images/sponsor/7.png',             alt: 'YafohiTravel' },
];

function TestimonialOne() {
    return (
        <div className="rts__section section__padding testimonial has__shape" style={{ background: '#faf9f7', marginBottom: '80px'}}>
            <div className="container">
                <div className="row mb-40">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                        <div className="section__content__left">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                HP Resort
                            </span>
                            <h2 className="content__title h2 lh-1">Nos partenaires</h2>
                        </div>
                        {/* <div className="slider__navigation">
                            <div className="nav__btn button-next">
                                <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
                            </div>
                            <div className="nav__btn button-prev">
                                <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={6}
                    spaceBetween={40}
                    loop={true}
                    speed={300}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
                    watchSlidesProgress={true}
                    cssMode={false}
                    breakpoints={{
                        0:    { slidesPerView: 2 },
                        480:  { slidesPerView: 3 },
                        768:  { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                    }}
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                >
                    {partenaires.map((p, i) => (
                        <SwiperSlide key={i}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '130px',
                                height: '70px',
                                margin: '0 auto',
                                backgroundColor: '#faf9f7',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                padding: '8px',
                                boxSizing: 'border-box',
                            }}>
                                <img
                                    src={p.src}
                                    alt={p.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                        mixBlendMode: 'multiply',
                                        transition: 'opacity 0.3s',
                                        opacity: 0.8,
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TestimonialOne;
