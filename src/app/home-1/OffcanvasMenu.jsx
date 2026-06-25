import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

function OffcanvasMenu({ isOpen, onClose }) {
    const { t } = useTranslation();
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="offcanvas__overlay"
                    onClick={onClose}
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}
                />
            )}
            <div
                className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
                style={{ visibility: isOpen ? "visible" : "hidden", zIndex: 1000 }}
            >
                <div className="rts__btstrp__offcanvase">
                    <div className="offcanvase__wrapper">
                        <div className="left__side mobile__menu">
                            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close" />
                            <div className="offcanvase__top">
                                <div className="offcanvase__logo">
                                    <Link href="/" onClick={onClose}>
                                        <img src="/assets/images/logo/hp_logo.png" alt="HP Resort" />
                                    </Link>
                                </div>
                            </div>
                            <div className="offcanvase__mobile__menu">
                                <div className="mobile__menu__active">
                                    <nav className="mobile__menu__nav">
                                        <ul className="list-unstyled">
                                            <li className="slide">
                                                <Link className="slide__menu__item" href="/" onClick={onClose}>
                                                    {t.nav.home}
                                                </Link>
                                            </li>
                                            <li className="slide">
                                                <Link className="slide__menu__item" href="/room-one" onClick={onClose}>
                                                    {t.nav.rooms}
                                                </Link>
                                            </li>
                                            <li className={`slide has__children ${activeMenu === 1 ? "active" : ""}`}>
                                                <a className="slide__menu__item" href="#" onClick={(e) => { e.preventDefault(); toggleMenu(1); }}>
                                                    {t.nav.spaces}
                                                    <span className="toggle" />
                                                </a>
                                                <ul className="slide__menu" style={{ display: activeMenu === 1 ? "block" : "none" }}>
                                                    <li><Link href="/event" onClick={onClose}>{t.nav.meetings}</Link></li>
                                                    <li><Link href="/activities" onClick={onClose}>{t.nav.wellness}</Link></li>
                                                    <li><Link href="/restaurant-bar" onClick={onClose}>{t.nav.restaurant}</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`slide has__children ${activeMenu === 2 ? "active" : ""}`}>
                                                <a className="slide__menu__item" href="#" onClick={(e) => { e.preventDefault(); toggleMenu(2); }}>
                                                    {t.nav.offers}
                                                    <span className="toggle" />
                                                </a>
                                                <ul className="slide__menu" style={{ display: activeMenu === 2 ? "block" : "none" }}>
                                                    <li><Link href="/sejour-package" onClick={onClose}>{t.nav.packages}</Link></li>
                                                    <li><Link href="/promotion" onClick={onClose}>{t.nav.promotions}</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OffcanvasMenu;
