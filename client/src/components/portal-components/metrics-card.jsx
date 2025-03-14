
import React from 'react';
import { FaExclamationCircle, FaArrowUp } from 'react-icons/fa';
import './metrics-cards.css';

function MetricCard({ title, percentage, statistic }) {
    return (
        <div className="metric-card">
            {/* Header Section with Title, Exclamation Icon, and Percentage */}
            <div className="metric-card-header">
                <div className="metric-card-title">
                    <h3>{title}</h3>
                    <FaExclamationCircle className="exclamation-icon" />
                </div>
                <div className="metric-card-percentage">
                    <div className="metric-value">
                    <FaArrowUp className="arrow-icon" />
                    <span>{percentage}%</span>
                </div>
                </div>
            </div>

            {/* Statistic Section */}
            <div className="metric-statistic">
                <span>{statistic}</span>
            </div>
        </div>
    );
}

export default MetricCard;
