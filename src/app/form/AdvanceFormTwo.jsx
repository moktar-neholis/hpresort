'use client'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import posts from '../data/data-room.json';

function AdvanceFormTwo({ onFilterChange }) {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div className="rts__section advance__search__section is__page has__border pt-120 pb-60">
            <div className="container">
                <div className="row">
                    <form
                        action="#"
                        method="post"
                        className="advance__search"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="advance__search__wrapper">
                            {/* Arrivée */}
                            <div className="query__input">
                                <label htmlFor="check__in" className="query__label">
                                    Arrivée
                                </label>
                                <DatePicker
                                    selected={checkInDate}
                                    onChange={(date) => setCheckInDate(date)}
                                    placeholderText="Choisissez une date"
                                    className="date-picker-input"
                                />
                                <div className="query__input__icon">
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            {/* Départ */}
                            <div className="query__input">
                                <label htmlFor="check__out" className="query__label">
                                    Départ
                                </label>
                                <DatePicker
                                    selected={checkOutDate}
                                    onChange={(date) => setCheckOutDate(date)}
                                    placeholderText="Choisissez une date"
                                    className="date-picker-input"
                                />
                                <div className="query__input__icon">
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            {/* Chambre */}
                            <div className="query__input">
                                <label htmlFor="room" className="query__label">Chambre</label>
                                <select
                                    name="room"
                                    id="room"
                                    className="form-select"
                                    onChange={(e) => onFilterChange && onFilterChange(e.target.value)}
                                >
                                    <option value="">Toutes les chambres</option>
                                    {posts.map((room) => (
                                        <option key={room.id} value={room.slug}>{room.title}</option>
                                    ))}
                                </select>
                                <div className="query__input__icon">
                                    <i className="flaticon-hotel-room" />
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button className="theme-btn btn-style fill no-border search__btn" type="submit">
                                <span>RÉSERVER</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdvanceFormTwo
