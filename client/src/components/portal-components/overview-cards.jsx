import React from 'react';
import './overview-cards.css';

function OverviewCards() {
    return (
        <section className='OC-overviewcards-container'>
            <div className="OC-card" style={{ width: '25rem' }}>
                <img className="OC-card-img-top" src="/public/assets/education-hub-img1.png" alt="Card image 1" />
                <div className="OC-card-body">
                    <h2 className="OC-card-title">Shop Smart. Save More!</h2>
                </div>
            </div>
        </section>
    );
}

export default OverviewCards;
