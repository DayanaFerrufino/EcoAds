import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portal.css';
import OverviewPage from './OverviewPage';
import { Routes, Route } from 'react-router-dom';
import SidebarNav from '../components/portal-components/SidebarNav';
import Header from '../components/portal-components/header'; 
import Metrics from './Metrics';
import AddAd from './AddAd';
import Consultations from './Consultations';
import Education from './Education';

function Portal() {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header /> {/* Always visible at the top */}
            <div style={{ display: 'flex', flex: 1, paddingTop: '60px' }}>
                <SidebarNav /> 
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="add" element={<AddAd />} />
                        <Route path="metrics" element={<Metrics />} />
                        <Route path="overviewpage" element={<OverviewPage />} />
                        <Route path="consultation" element={<Consultations />} />
                        <Route path="education" element={<Education />} />
                        <Route path="settings" element={<Education />} />
                        <Route index element={<OverviewPage />} /> 
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Portal;

