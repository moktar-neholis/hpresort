import React from 'react';
import posts from '../data/data-activities.json';
import ActivitiesCard from './ActivitiesCard';
import './activities-card.css';

function ActivitiesOne() {
    return (
        <>
            {/* activities area */}
            <div className="rts__section section__padding activities__listing">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-8">
                            <div className="section__topbar">
                                <h2 className="content__title h2 lh-1">Bien Etre & Detente</h2>
                                <p className="font-sm mt-20">
                                    Notre espace bien-être dispose de plusieurs installations : deux cabines
                                    individuelles, une cabine double, une salle de relaxation, un hammam, un sauna,
                                    une cabine beauté des mains et des pieds, un salon de coiffure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        {posts.map((data) => (
                            <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">
                                <ActivitiesCard
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
            {/* activities area end */}
        </>
    );
}

export default ActivitiesOne;
