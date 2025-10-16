// frontend/src/components/BookCard.jsx
import "./css/BookCard.css";

const BookCard = ({ book, onDelete }) => {
  const deleteBook = async () => {
    try {
      const base = import.meta.env.VITE_API_URL; 
      const url = `${base}/books/${book.id}`;

      const response = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      alert(`Successfully deleted ${book.title} from your library!`);
      onDelete?.(book.id);
    } catch (err) {
      console.error(err);
      alert("Failed to delete book.");
    }
  };

  return (
    <div className="book-card">
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        {book.genre && <p className="book-genre">Genre: {book.genre}</p>}
        {book.year && <p className="book-year">Year: {book.year}</p>}
        {book.cover && <img src={book.cover} alt={book.title} className="book-cover" />}
        <button onClick={deleteBook} className="delete-book-button">Delete Book</button>
      </div>
    </div>
  );
};

export default BookCard;
