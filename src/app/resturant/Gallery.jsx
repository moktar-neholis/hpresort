'use client'
import React, { useState } from 'react'
import Modal from '../home-1/Modal';

function GalleryFour() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the selected image
    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* restaurant room */}
            <div className="rts__section section__padding">
                <div className="container">
                    {/* <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">Gallery</span>
                                <h2 className="section__title">Our Restaurant Gallery</h2>
                            </div>
                            <p>
                                Our rooms offer a harmonious blend of comfort and elegance, designed
                                to provide an exceptional stay for every guest Each room features
                                plush bedding.
                            </p>
                        </div>
                    </div> */}
                    <div className="row g-30 gallery">
                        <div className="col-lg-4 col-md-6">
                            <div className="gallery__item">
                                <img
                                    src="/assets/images/pages/resturant/resto1.jpg"
                                    alt=""
                                    onClick={() => openModal("assets/images/pages/resturant/resto1.jpg")}
                                    style={{ cursor: "pointer" }}
                                    height={500}
                                />
                                <h6>SAVEURS DU MONDE</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="gallery__item">
                                <img
                                    src="/assets/images/pages/resturant/resto2.jpg"
                                    alt=""
                                    onClick={() => openModal("assets/images/pages/resturant/resto2.jpg")}
                                    style={{ cursor: "pointer" }}
                                    height={500}
                                />
                                <h6>AU POULET CHAUD</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="gallery__item">
                                <img
                                    src="/assets/images/pages/resturant/resto3.jpg"
                                    alt=""
                                    onClick={() => openModal("assets/images/pages/resturant/resto3.jpg")}
                                    style={{ cursor: "pointer" }}
                                    height={500}
                                />
                                <h6>LE BAR BISTROT « BEOUE »</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="gallery__item">
                                <img
                                    src="/assets/images/pages/resturant/resto4.jpg"
                                    alt=""
                                    onClick={() => openModal("assets/images/pages/resturant/resto4.jpg")}
                                    style={{ cursor: "pointer" }}
                                    height={500}
                                />
                                <h6>4 EPICES</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="gallery__item">
                                <img
                                    src="/assets/images/pages/resturant/resto5.png"
                                    alt=""
                                    onClick={() => openModal("assets/images/pages/resturant/resto5.png")}
                                    style={{ cursor: "pointer" }}
                                    height={500}
                                />
                                <h6>DISCOTHEQUE</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* restaurant room end */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </>

    )
}

export default GalleryFour