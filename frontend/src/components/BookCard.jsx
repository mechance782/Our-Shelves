import "./css/BookCard.css";

const BookCard = ({ book, onDelete }) => {

    
  const deleteBook = async () => {
    
    try {
      const bookID = book.id;
      const URL = `http://localhost:3000/books/${bookID}`;

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      };

      const response = await fetch(URL, options);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      alert(`Successfully deleted ${book.title} from your library!`);

      onDelete(book.id);

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="book-card">
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        {book.genre && <p className="book-genre">Genre: {book.genre}</p>}
        {book.year && <p className="book-year">Year: {book.year}</p>}
        {book.cover && (
          <img src={book.cover} alt={book.title} className="book-cover" />
        )}
        <button onClick={() => deleteBook()}> Delete Book</button>
      </div>
    </div>
  );
};

export default BookCard;
