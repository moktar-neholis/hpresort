'use client'
import React, { useState } from 'react'
import RoomCardSix from './RoomCardSix'
import posts from '../data/data-room.json';
import { useTranslation } from '../hooks/useTranslation';

function RoomNine() {
    const { t } = useTranslation();
    const [visiblePosts, setVisiblePosts] = useState(6);
    const postsPerLoad = 3;

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };

    return (
        <div className="rts__section section__padding">
            <div className="container">
                <div className="room__wrapper">
                    {posts.slice(0, visiblePosts).map((data) => (
                        <RoomCardSix
                            key={data.id}
                            Slug={data.slug}
                            Img={data.image}
                            Title={data.title}
                            Price={data.price}
                            Description={data.description}
                            Capacity={data.capacity}
                            BedType={data.bedType}
                            Surface={data.surface}
                        />
                    ))}
                </div>
                {visiblePosts < posts.length && (
                    <div className="load__more__link">
                        <button onClick={handleLoadMore}>{t.rooms.loadMore}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RoomNine
