import React from "react";

const BookDetail = ({ book }) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            {book.Reyear && <p>Year: {book.Reyear}</p>}
            {book.cover && <img src={book.cover} alt={book.title} />}
        </div>
    );
};

export default BookDetail;