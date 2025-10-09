export const fetchBooks = async (req, res) => {

    // Get book name from URL parameters
    const bookName = req.params.bookName;
    try {
        
        // fetch books from Open Library API
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`;
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw new Error(`Open Library API responded with status: ${response.status}`);
  
      const data = await response.json();

      // map and simplify book data
      const books = (data.docs || []).map((book) => ({
        title: book.title,
        author: Array.isArray(book.author_name) ? book.author_name[0] : 'Unknown',
        year: book.first_publish_year || null,
        cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
        pages: book.number_of_pages_median || null,
      }));
      
      // send back JSON response to the frontend
      res.json({
        searchTerm: bookName,
        totalResults: data.numFound ?? books.length,
        books
      });
    } catch (error) {
      console.error('Error fetching books from Open Library:', error);
      res.status(500).json({
        error: 'Failed to fetch books from Open Library',
        message: error.message
      });
    }
  };
  