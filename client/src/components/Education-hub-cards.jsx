import React from 'react';
import './Education-hub-cards.css';

function EducationHubCards() {
    return (
        <div className="EducationHubCards-container">
            <div className="EH-card" style={{ width: '25rem' }}>
                <img className="EH-card-img-top" src="/public/assets/education-hub-img1.png" alt="Card image 1" />
                <div className="EH-card-body">
                    <h2 className="EH-card-title">Understanding Your Audience: Defining, Targeting, and Engaging the Right Users</h2>
                    <p className="EH-card-author">Thalita Milan</p>
                </div>
            </div>
            <div className="EH-card" style={{ width: '25rem' }}>
                <img className="EH-card-img-top" src="/public/assets/education-hub-img2.png" alt="Card image 2" />
                <div className="EH-card-body">
                    <h2 className="EH-card-title">Measuring & Optimizing Ad Performance: Tracking Key Metrics for Better Results</h2>
                    <p className="EH-card-author">Salil Dhawan</p>
                </div>
            </div>
            <div className="EH-card" style={{ width: '25rem' }}>
                <img className="EH-card-img-top" src="/public/assets/education-hub-img3.png" alt="Card image 3" />
                <div className="EH-card-body">
                    <h2 className="EH-card-title">Writing Effective Ad Copy: Craft Messages That Convert and Engage</h2>
                    <p className="EH-card-author">Christine Maclver</p>   
                </div>
            </div>
        </div>
    );
}

export default EducationHubCards;
