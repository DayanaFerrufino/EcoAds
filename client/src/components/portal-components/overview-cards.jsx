import React from 'react';
import './overview-cards.css';

function OverviewCards({ imgSrc, title, altText }) {
    return (
        <section className='OC-overviewcards-container'>
            <div className="OC-card" style={{ width: '25rem' }}>
                <img className="OC-card-img-top" src={imgSrc} alt={altText} />
                <div className="OC-card-body">
                    <h2 className="OC-card-title">{title}</h2>
                </div>
            </div>
        </section>
    );
}

export default OverviewCards;
