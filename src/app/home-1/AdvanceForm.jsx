'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from '../hooks/useTranslation';

function AdvanceForm() {
    const { t } = useTranslation();
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div className="rts__section advance__search__section is__home__one">
            <div className="container">
                <div className="row">
                    <form action="#" method="post" className="advance__search">
                        <div className="advance__search__wrapper">
                            <div className="query__input">
                                <label htmlFor="check__in" className="query__label">
                                    {t.search.checkIn}
                                </label>
                                <DatePicker
                                    selected={checkInDate}
                                    onChange={(date) => setCheckInDate(date)}
                                    placeholderText={t.search.placeholder}
                                    className="date-picker-input"
                                />
                                <div className="query__input__icon">
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            <div className="query__input">
                                <label htmlFor="check__out" className="query__label">
                                    {t.search.checkOut}
                                </label>
                                <DatePicker
                                    selected={checkOutDate}
                                    onChange={(date) => setCheckOutDate(date)}
                                    placeholderText={t.search.placeholder}
                                    className="date-picker-input"
                                />
                                <div className="query__input__icon">
                                    <i className="flaticon-calendar" />
                                </div>
                            </div>
                            <div className="query__input">
                                <label htmlFor="adult" className="query__label">{t.search.room}</label>
                                <select name="adult" id="adult" className="form-select">
                                    {[...Array(9)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1} {i === 0 ? t.search.room : t.search.rooms}
                                        </option>
                                    ))}
                                </select>
                                <div className="query__input__icon">
                                    <i className="flaticon-user" />
                                </div>
                            </div>
                            <button className="theme-btn btn-style fill no-border search__btn" type="submit">
                                <span>{t.search.submit}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdvanceForm;
