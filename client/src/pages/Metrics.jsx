import React from 'react';
import './Metrics.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MetricCard from '../components/portal-components/metrics-card';
import Container from 'react-bootstrap/Container';

function Metrics() {
    return (
        <div className="Metrics-container">       
        <Container className='metric-title-container'>
             <h1 className="metrics-title">Metrics Overview</h1>
        </Container>
           

            {/* Image Container */}
            <div className="metrics-image-container">
                <img src="/public/assets/metric-graph.png" alt="Metrics" className="metrics-image large-image" />
                <img src="/public/assets/sm-metric-graph.png" alt="Metrics" className="metrics-image small-image" />
            </div>


            {/* Card Layout */}
            <div className="metrics-card-container">
                <MetricCard title="Total Views" percentage="9" statistic="985,580 views" />
                <MetricCard title="Average Conversion Rate" percentage="9" statistic="3.96%" />
                <MetricCard title="Total Energy Consumption" percentage="5" statistic="1282.39 kWh" />
                <MetricCard title="Average Bounce Rate" percentage="20" statistic="49.72%" />
                <MetricCard title="Toal Ad Cost" percentage="15" statistic="$12,374" />
                <MetricCard title="Total Ad Impressions" percentage="10" statistic="1,847,939" />
            </div>
        </div>
    );
}

export default Metrics;
