'use client'
import React, { useEffect, useState } from 'react';
import RoomCardFour from './RoomCardFour';
import posts from '../data/data-room.json';
import './room-list.css';

const ROOMS_PER_PAGE = 5;

function RoomSix({ filter }) {
    const [page, setPage] = useState(1);

    const rooms = filter ? posts.filter((room) => room.slug === filter) : posts;
    const totalPages = Math.max(1, Math.ceil(rooms.length / ROOMS_PER_PAGE));
    const visibleRooms = rooms.slice((page - 1) * ROOMS_PER_PAGE, page * ROOMS_PER_PAGE);

    useEffect(() => {
        setPage(1);
    }, [filter]);

    return (
        <>
            {/* single rooms */}
            <div className="rts__section">
                <div className="container">
                    <div className="room__list">
                        {visibleRooms.length > 0 ? (
                            visibleRooms.map((data) => (
                                <RoomCardFour
                                    key={data.id}
                                    Slug={data.slug}
                                    Img={`${data.image}`}
                                    Title={data.title}
                                    Price={data.price}
                                    Description={data.description}
                                    Rating={data.rating}
                                    Capacity={data.capacity}
                                    BedType={data.bedType}
                                    Wifi={data.wifi}
                                    Meal={data.meal}
                                />
                            ))
                        ) : (
                            <p>Il n'y a plus de chambres disponibles</p>
                        )}
                    </div>
                    {/* room list end */}
                    {totalPages > 1 && (
                        <div className="room__list__pagination">
                            <button
                                type="button"
                                className="room__list__pagination__arrow"
                                disabled={page === 1}
                                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                            >
                                <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    className={`room__list__pagination__number ${page === index + 1 ? 'is__active' : ''}`}
                                    onClick={() => setPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                type="button"
                                className="room__list__pagination__arrow"
                                disabled={page === totalPages}
                                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                            >
                                <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* single rooms end */}
        </>
    );
}

export default RoomSix;
