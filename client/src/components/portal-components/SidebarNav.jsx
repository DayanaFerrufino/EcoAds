import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHouse, faChartColumn, faHeadset, faBookOpen, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons'; // Import icons correctly
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './SidebarNav.css'; // Ensure the CSS is properly linked

const HEADER_HEIGHT = '60px'; // Adjust based on your actual header height

function SidebarNav() {
    const [collapsed, setCollapsed] = useState(true);
    const [toggled, setToggled] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setToggled(!toggled);
    const handleCollapse = () => setCollapsed(!collapsed);

    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar Wrapper with Sticky Positioning */}
            <div
                style={{
                    height: `calc(100vh - ${HEADER_HEIGHT})`,
                    position: 'sticky',
                    top: HEADER_HEIGHT,
                }}
            >
                <Sidebar
                    collapsed={collapsed}
                    toggled={toggled}
                    onBackdropClick={() => setToggled(false)}
                    breakPoint="md"
                    rootStyles={{
                        backgroundColor: '#ffffff',
                        height: '100%',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ flex: 1 }}>
                            <Menu
                                menuItemStyles={{
                                    button: {
                                        color: '#333',
                                        '&:hover': { backgroundColor: '#e9ecef' },
                                    },
                                }}
                            >
                                <MenuItem icon={<FontAwesomeIcon icon={faCirclePlus} />} component={<Link to="/portal/add" />} active={location.pathname === '/portal/add'}>
                                    Add Ad
                                </MenuItem>
                                <MenuItem icon={<FontAwesomeIcon icon={faHouse} />} component={<Link to="/portal/" />} active={location.pathname === '/portal/overview'}>
                                    Overview
                                </MenuItem>
                                <MenuItem icon={<FontAwesomeIcon icon={faChartColumn} />} component={<Link to="/portal/Metrics" />} active={location.pathname === '/portal/Metrics'}>
                                    Metrics
                                </MenuItem>
                                <MenuItem icon={<FontAwesomeIcon icon={faHeadset} />} component={<Link to="/portal/consulting" />} active={location.pathname === '/portal/consulting'}>
                                    Consulting
                                </MenuItem>
                                <MenuItem icon={<FontAwesomeIcon icon={faBookOpen} />} component={<Link to="/portal/education" />} active={location.pathname === '/portal/education'}>
                                    Education Hub
                                </MenuItem>
                            </Menu>
                        </div>

                        {/* Bottom Menu */}
                        <Menu style={{ marginBottom: '20px' }}>
                            <MenuItem icon={<FontAwesomeIcon icon={faHeadset} />} component={<Link to="/settings" />} active={location.pathname === '/settings'}>
                                Settings
                            </MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />} onClick={() => window.location.href = "/"}>
                                Log Out
                            </MenuItem>
                            <MenuItem icon={<FontAwesomeIcon icon={faBars} />} onClick={handleCollapse} style={{ cursor: 'pointer' }}></MenuItem>
                        </Menu>
                    </div>
                </Sidebar>
            </div>

            {/* Toggle Button - Ensure visibility */}
            <div
                className={`toggle-button ${toggled ? 'toggle-button-hidden' : ''}`}
                onClick={toggleSidebar}
                style={{
                    position: 'fixed',
                    top: `calc(${HEADER_HEIGHT} + 10px)`, // Adjust position below header
                    left: '10px',
                    zIndex: 1000,
                    cursor: 'pointer',
                }}
            >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
        </div>
    );
}

export default SidebarNav;
