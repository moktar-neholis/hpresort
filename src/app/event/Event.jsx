import React from 'react';
import posts from '../data/data-event.json';
import EventCard from './EventCard';
import './event-card.css';

function EventTwo() {
    return (
        <>
            {/* event area */}
            <div className="rts__section section__padding event__listing">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-8">
                            <div className="section__topbar">
                                <h2 className="content__title h2 lh-1">Réunions & Evenements</h2>
                                <p className="font-sm mt-20">
                                    L'Hôtel HP Resort est le second établissement hôtelier de grande capacité de
                                    Yamoussoukro qui possède en son sein des salles de conférences et de
                                    banquets, ce qui en fait l'endroit idéal pour vos événements.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        {posts.map((data) => (
                            <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">
                                <EventCard
                                    Slug={data.slug}
                                    Img={data.image}
                                    Title={data.title}
                                    Description={data.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* event area end */}
        </>
    );
}

export default EventTwo;
