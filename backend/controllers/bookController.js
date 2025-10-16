/**
 * Fetching books from Open Library API based on search term
 * Route: GET /books/search/:bookName
 */

export const fetchBooks = async (req, res) => {
    const bookName = req.params.bookName;
  
    try {

        // build the Open Library API URL with proper encoding
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(bookName)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Open Library API error: ${response.status}`);
  
      const data = await response.json();
        
      // mapping through the returned documents to extract relevant book info
      const books = (data.docs || []).map(book => ({
        title: book.title,
        author: Array.isArray(book.author_name) ? book.author_name[0] : 'Unknown',
        year: book.first_publish_year || null,
        cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
        pages: book.number_of_pages_median || null
      }));
      
      // sending the structured result back to the frontend
      res.json({
        searchTerm: bookName,
        totalResults: data.numFound ?? books.length,
        books
      });
  
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Failed to fetch books', message: error.message });
    }
  };
  