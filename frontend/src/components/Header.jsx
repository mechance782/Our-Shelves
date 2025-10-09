import React from 'react';
import logo from '../assets/OurShelvesLogo.png';
import './css/Header.css';

// header component with logo, search bar, and buttons
const Header = () => {
    return (
        <header className="header">

            {/* logo Section */}
            <img
                src={logo}
                alt="Our Shelves"
                className="header-logo"
            />
            
            {/* search Bar Section */}
            <div className="header-search-container">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="header-search-input"
                />
            </div>
            
            {/* navigation Buttons Section */}
            <div className="header-buttons">
                <button className="header-button home">
                    Home
                </button>
                <button className="header-button library">
                    Library
                </button>
            </div>
        </header>
    );
};

export default Header;
