import React, { useState } from 'react';
import './css/SearchSection.css';

const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Add search logic here later
    };

    return (
        <div className="search-section">
            <div className="search-container">
                <h2 className="search-heading">Find Your Perfect Book</h2>
                <form onSubmit={handleSearch} className="search-form">
                    <div className="search-input-container">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by title, author, or genre..."
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchSection;
