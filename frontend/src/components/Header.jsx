import React from 'react';
import logo from '../assets/OurShelvesLogo.png';
import './css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <img
                src={logo}
                alt="Our Shelves"
                className="header-logo"
            />
            
            <div className="header-search-container">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="header-search-input"
                />
            </div>
            
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
