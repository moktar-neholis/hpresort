import Link from 'next/link';
import React from 'react'

function RoomCardSix(props) {
    const { Slug, Img, Title, Price, Description, Capacity, BedType, Surface } = props;
    return (
        <div className="room__card is__style__four">
            <div className="room__card__top">
                <div className="room__card__image">
                    <Link href={`/room/${Slug || "details"}`}>
                        <img
                            src={Img || "/assets/images/pages/room/1.webp"}
                            width={645}
                            height={438}
                            alt={Title || "room card"}
                        />
                    </Link>
                </div>
            </div>
            <div className="room__card__meta">
                <Link href={`/room/${Slug || "details"}`} className="room__card__title h4">
                    {Title || "Deluxe Room"}
                </Link>
                <div className="room__card__meta__info">
                    <span>
                        <i className="flaticon-construction" />
                        {Surface || "35 m²"}
                    </span>
                    <span>
                        <i className="flaticon-user" />
                        {Capacity || "2 Personnes"}
                    </span>
                </div>
                <p className="font-sm">
                    {Description || "Nos chambres offrent un mélange harmonieux de confort et d'élégance, conçues pour offrir un séjour exceptionnel à chaque client."}
                </p>
                <div className="room__price__tag">
                    <span className="h5 d-block">{Price || '120$'}</span>
                </div>
                <Link href={`/room/${Slug || "details"}`} className="room__card__link">
                    Découvrir
                </Link>
            </div>
        </div>
    )
}

export default RoomCardSix
