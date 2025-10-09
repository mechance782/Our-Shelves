import React from 'react';
import './css/Welcome.css';

// welcome component
const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1 className="welcome-title">Welcome to Our Shelves</h1>
                <p className="welcome-subtitle">
                    Discover your next great read in our digital library
                </p>
            </div>
        </div>
    );
};

export default Welcome;
