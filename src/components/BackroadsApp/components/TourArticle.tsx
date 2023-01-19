import React from "react";

interface TourProps {
    id: number;
    src: '*.jpeg';
    date: string;
    title: string;
    text: string;
    location: string;
    period: number;
    price: number;
}

export const TourArticle: React.FC<TourProps> = ({src, date, title, text, location, period, price}) => {
    return (
        <article className="tour-card">
            <div className="tour-img-container">
                <img src={src} className="tour-img" alt=""/>
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span> {location}
                    </p>
                    <p>{period} days</p>
                    <p>from ${price}</p>
                </div>
            </div>
        </article>
    );
}