import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles, faUserShield, faHandsHoldingCircle, faChartColumn } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import './LPCards.css';


function Cards() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faWandSparkles} size="2x" color="#407C5A" />
                </div>
                <h2 className="title">Smarter AI Targeting</h2>
                <p className="text">Real-time learning ensures ads reach the right audience, reducing wasted impressions and ad spend.</p>
            </div>
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faUserShield} size="2x" color="#407C5A" />
                </div>
                <h2 className="title">Privacy-First & Ethical</h2>
                <p className="text">No third-party tracking, bias-free targeting, and full compliance with GDPR & CCP.</p>
            </div>
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faHandsHoldingCircle} size="2x" color="#407C5A" />
                </div>
                <h2 className="title">Sustainable & Energy Efficient</h2>
                <p className="text">AI models optimize to lower energy consumption and run on renewable-powered infrastructure.</p>
            </div>
            <div className="card">
                <div className="icon">
                    <FontAwesomeIcon icon={faChartColumn} size="2x" color="#407C5A" />
                </div>
                <h2 className="title">Higher ROI & Performance</h2>
                <p className="text">Up to 40% more accurate targeting, 35% lower ad waste, and increased engagement for better results.</p>
            </div>
        </div>
    );
}

export default Cards;
