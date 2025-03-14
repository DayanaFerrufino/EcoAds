import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './header.css'; 

const Header = () => {
    return (
        <header className="header">
            <h2 className="logo">
                <span className="eco">Eco</span><span className="ads">Ads</span>
            </h2>
            <FaUserCircle className="profile-icon" />
        </header>
    );
};

export default Header;
