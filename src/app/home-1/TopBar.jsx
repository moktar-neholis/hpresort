import Link from 'next/link'
import React from 'react'

function TopBar() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="social__links">
                                <Link className="link__item gap-10" href="callto:+2252730646800">
                                    <i className="flaticon-phone-flip" />  +225 27 30 64 68 00
                                </Link>
                                <Link className="link__item gap-10" href="mailto:info@hp-resort.ci">
                                    <i className="flaticon-envelope" /> info@hp-resort.ci
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex justify-content-between align-items-center">
                            <div className="location">
                                <Link className="link__item gap-10" href="/">
                                    <i className="flaticon-marker" />
                                    BP 923, Yamoussoukro Quartier Millionnaire
                                </Link>
                            </div>
                            <div className="language__selector">
                                <Link className="link__item gap-8" href="/">
                                    <i className="flaticon-globe" /> Francais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopBar