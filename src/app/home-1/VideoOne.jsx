'use client'
import React, { useState } from "react";
import ReactPlayer from "react-player";

function VideoOne({ videoSrc = "/assets/images/video/visite.mp4", title = "Visiter notre hôtel" }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div
                    className="video-modal-overlay"
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.85)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{ width: "80vw", height: "80vh" }}
                    >
                        <ReactPlayer
                            url={videoSrc}
                            playing
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            )}

            {/* Video Section Start */}
            <div className="rts__section pb-120 video video__full">
                <div className="container-full">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="video__area position-relative wow fadeInUp"
                                style={{ overflow: "hidden", height: "500px" }}
                            >
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                </video>

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "rgba(0,0,0,0.45)",
                                    }}
                                />

                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "24px",
                                    }}
                                >
                                    <h2
                                        style={{
                                            color: "#fff",
                                            fontFamily: "serif",
                                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                                            fontWeight: 400,
                                            margin: 0,
                                            textAlign: "center",
                                        }}
                                    >
                                        {title}
                                    </h2>

                                    <button
                                        onClick={() => setIsOpen(true)}
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            border: "2px solid rgba(255,255,255,0.8)",
                                            background: "rgba(255,255,255,0.15)",
                                            color: "#fff",
                                            fontSize: "1.3rem",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "background 0.3s",
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                                    >
                                        <i className="flaticon-play" />
                                    </button>
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
