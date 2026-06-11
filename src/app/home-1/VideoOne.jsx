'use client'
import React, { useState } from "react";
import ReactPlayer from "react-player";

function VideoOne() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Video Modal */}
            {isOpen && (
                <div className="video-modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="video-modal-content">
                        <ReactPlayer
                            url="https://hpresort.in-novation.tech/assets/video/hotel.mp4"
                            playing
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            )}

            {/* Video Section Start */}
            <div className="rts__section pb-120 video video__full pt-120">
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <div className="video__area position-relative wow fadeInUp">
                                <div className="video__area__image jara-mask-2 jarallax rounded-0">
                                    <img
                                        className="radius-none jarallax-img"
                                        src="/assets/images/video/hotel-overview.png"
                                        alt=""
                                    />
                                    <p className="video__area__content h2 text-white text-center pt-120">
                                        Presentation de notre hôtel
                                    </p>
                                </div>
                                <div className="video--spinner__wrapper">
                                    <div className="rts__circle">
                                        <svg className="spinner" viewBox="0 0 100 100">
                                            <defs>
                                                <path
                                                    id="circle-2"
                                                    d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                                                />
                                            </defs>
                                            <text>
                                                <textPath xlinkHref="#circle-2">
                                                    * Regarder maintenant * Regarder maintenant
                                                </textPath>
                                            </text>
                                        </svg>
                                        <div className="rts__circle--icon">
                                            <button
                                                className="video-play"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <i className="flaticon-play" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Section End */}
        </>
    );
}

export default VideoOne;
