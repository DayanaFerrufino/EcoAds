import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portal.css';
import OverviewPage from './OverviewPage';
import { Routes, Route } from 'react-router-dom';
import SidebarNav from '../components/portal-components/SidebarNav';
import Header from '../components/portal-components/header'; // Import the header
import Metrics from './Metrics';

const pageLayout = () => (
    <>
      <SidebarNav />
    </>
  );

function Portal() {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header /> {/* Always visible at the top */}
            <div style={{ display: 'flex', flex: 1, paddingTop: '60px' }}>
                <SidebarNav /> 
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="metrics" element={<Metrics />} />
                        <Route path="overviewpage" element={<OverviewPage />} />
                        <Route index element={<OverviewPage />} /> 
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Portal;

