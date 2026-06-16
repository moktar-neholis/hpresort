import Link from 'next/link';
import React from 'react'

function RoomCardFour(props) {
    const {
        Slug,
        Img,
        Title,
        Price,
        Description,
        Rating,
        Capacity,
        BedType,
        Wifi,
        Meal
    } = props;
    return (
        <div className="room__list__item">
            <div className="room__list__item__thumb">
                <Link href={`/room/${Slug || "details"}`}>
                    <img
                        src={Img || "/assets/images/pages/room/1.webp"}
                        width={420}
                        height={310}
                        alt={Title || "room"}
                    />
                </Link>
            </div>
            <div className="room__list__item__content">
                <div className="room__list__item__rating">
                    {[...Array(Rating || 5)].map((_, index) => (
                        <i key={index} className="flaticon-star" />
                    ))}
                </div>
                <div className="room__list__item__top">
                    <Link href={`/room/${Slug || "details"}`} className="room__list__item__title h5">
                        {Title || "Deluxe Room"}
                    </Link>
                    <span className="room__list__item__price h5">{Price || '120$'}</span>
                </div>
                <p className="font-sm room__list__item__desc">
                    {Description || "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest."}
                </p>
                <div className="room__list__item__meta">
                    <span>
                        <i className="flaticon-user" />
                        {Capacity || "2 Personnes"}
                    </span>
                    {Wifi && (
                        <span>
                            <i className="flaticon-wifi" />
                            Wifi
                        </span>
                    )}
                    <span>
                        <img src="/assets/images/icon/bed.svg" width={16} height={16} alt="" />
                        {BedType || "Lit King"}
                    </span>
                    <span>
                        <img src="/assets/images/icon/hot-coffe.svg" width={16} height={16} alt="" />
                        {Meal || "Repas"}
                    </span>
                </div>
                <Link href={`/room/${Slug || "details"}`} className="theme-btn btn-style fill no-border sm-btn">
                    <span>RÉSERVER</span>
                </Link>
            </div>
        </div>
    )
}

export default RoomCardFour
