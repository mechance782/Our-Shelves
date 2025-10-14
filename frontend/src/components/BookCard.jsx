import React from "react";
import "./css/BookCard.css";

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <div className="book-info">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">{book.author}</p>
                {book.genre && <p className="book-genre">Genre: {book.genre}</p>}
                {book.year && <p className="book-year">Year: {book.year}</p>}
                {book.cover && <img src={book.cover} alt={book.title} className="book-cover" />}
            </div>
        </div>
    );
};

export default BookCard;

