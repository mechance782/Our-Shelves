import React from "react";
import "./../components/css/BookDetails.css";

const BookDetail = ({ book }) => {

  const addToLibrary = async (book) => {
    try {
      const URL = `http://localhost:3000/books`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      };

      const response = await fetch(URL, options);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      alert(`${book.title} added to your library!`);

    } catch (error) {
      console.error("Error adding book:", error);
      alert(`Failed to add ${book.title} to your library.`);
    }
  };

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      {book.year && <p>Year: {book.year}</p>}
      {book.cover && <img src={book.cover} alt={book.title} />}

      <button id="add-book-button" onClick={() => addToLibrary(book)}>
        Add book to library
      </button>
    </div>
  );
};

export default BookDetail;