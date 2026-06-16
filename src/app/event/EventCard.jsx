import Link from 'next/link';
import React from 'react'
import './event-card.css';

function EventCard(props) {
    const {
        Slug,
        Img,
        Title,
        Description
    } = props;
    return (
        <div className="room__card is__event">
            <div className="room__card__top">
                <div className="room__card__image">
                    <Link href={`/event/${Slug || "details"}`}>
                        <img
                            src={Img || "/assets/images/pages/event/1.webp"}
                            width={420}
                            height={310}
                            alt={Title || "event"}
                        />
                    </Link>
                </div>
            </div>
            <div className="room__card__meta">
                <Link href={`/event/${Slug || "details"}`} className="room__card__title h5">
                    {Title || "Event"}
                </Link>
                <p className="font-sm">
                    {Description}
                </p>
                <Link href={`/event/${Slug || "details"}`} className="theme-btn btn-style fill no-border sm-btn">
                    <span>LIRE LA SUITE</span>
                </Link>
            </div>
        </div>
    )
}

export default EventCard
