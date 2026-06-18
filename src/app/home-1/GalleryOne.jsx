'use client'
import React, { useState } from 'react';
import Modal from './Modal';

const images = [
  '/assets/images/insta/1.jpg',
  '/assets/images/insta/2.jpg',
  '/assets/images/insta/3.jpg',
  '/assets/images/insta/4.jpg',
  '/assets/images/insta/5.jpg',
];

function GalleryOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="rts__section is__home__main pb-60 ">
        <div className="container-fluid px-3">

          <div className="row position-relative justify-content-center text-center mb-30">
            <div className="col-lg-6 wow fadeInUp">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  HP Resort
                </span>
                <p className="section__title">Nous sommes fiers de vous offrir des services de qualité exceptionnelle qui dépassent les attentes de nos clients.</p>
              </div>
            </div>
          </div>

          {/* Ligne 1 : 3 images égales */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }} className="mx-120">
            {images.slice(0, 3).map((src, i) => (
              <div
                key={i}
                onClick={() => openModal(src)}
                style={{
                  flex: 1,
                  height: "280px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            ))}
          </div>

          {/* Ligne 2 : 2 grandes images */}
          <div style={{ display: "flex", gap: "12px" }}>
            {images.slice(3, 5).map((src, i) => (
              <div
                key={i}
                onClick={() => openModal(src)}
                style={{
                  flex: 1,
                  height: "360px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} imageSrc={modalImage} />
    </>
  );
}

export default GalleryOne;
