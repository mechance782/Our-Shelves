import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/SearchSection.css';

// search section component
const SearchSection = ( { setSelectedBook }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // handle search form submission
    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) {
            setError('Please enter a search term');
            return;
        }

        // reset states before new search
        setLoading(true);
        setError(null);
        setSearchResults(null);

        try {
            // Send request to backend for fetching book results
            const response = await fetch(`${import.meta.env.VITE_API_URL}/books/search/${encodeURIComponent(searchQuery)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSearchResults(data);

        } catch (err) {
            console.error('Search error:', err);
            setError('Failed to search books. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // select a book to view details
    const selectBook = (book) => {
        setSelectedBook(book)
    }

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
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className="search-button"
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </form>

                {error && (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>
                )}

                {/* search results grid*/}
                {searchResults && (
                    <div className="search-results">
                        <h3>Search Results for "{searchResults.searchTerm}"</h3>
                        <p className="results-count">
                            Found {searchResults.totalResults} books
                        </p>
                        <div className="books-grid">
                            {searchResults.books.slice(0, 27).map((book, index) => (
                                <div key={index} className="book-card">
                                    <div className="book-cover">
                                        {book.cover ? (
                                            <img
                                                src={book.cover}
                                                alt={book.title}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div className="no-cover" style={{ display: book.cover ? 'none' : 'flex' }}>
                                            No Cover Available
                                        </div>
                                    </div>
                                    <div className="book-info">
                                        <h4 className="book-title">{book.title}</h4>
                                        <p className="book-author">by {book.author}</p>
                                        {book.Reyear && (
                                            <p className="book-year">{book.year}</p>
                                        )}
                                    </div>
                                    <Link className='select-book-button' to="/BookDetail" onClick={() => selectBook(book)}>
                                        Open Book
                                    </Link>
                                </div>

                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchSection;
