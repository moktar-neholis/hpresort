import Link from 'next/link';
import React from 'react'
import './activities-card.css';

function ActivitiesCard(props) {
    const {
        Slug,
        Img,
        Title,
        Description
    } = props;
    return (
        <div className="room__card is__activities">
            <div className="room__card__top">
                <div className="room__card__image">
                    <Link href={`/activities/${Slug || "details"}`}>
                        <img
                            src={Img || "/assets/images/pages/activities/activity1.jpg"}
                            width={420}
                            height={310}
                            alt={Title || "service"}
                        />
                    </Link>
                </div>
            </div>
            <div className="room__card__meta">
                <Link href={`/activities/${Slug || "details"}`} className="room__card__title h5">
                    {Title || "Service"}
                </Link>
                <p className="font-sm">
                    {Description ? Description.split(' ').slice(0, 11).join(' ') + '...' : ''}
                </p>
                <Link href={`/activities/${Slug || "details"}`} className="theme-btn btn-style fill no-border sm-btn">
                    <span>LIRE LA SUITE</span>
                </Link>
            </div>
        </div>
    )
}

export default ActivitiesCard
