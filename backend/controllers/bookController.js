export const fetchBooks = async (req, res) => {
    const bookName = req.params.bookName;

    try {
        // Make request to Open Library Search API
        const openLibraryUrl = `https://openlibrary.org/search.json?title=${bookName}`;

        const response = await fetch(openLibraryUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`Open Library API responded with status: ${response.status}`);
        }

        const data = await response.json();

        // Format the response to return specified book information
        const books = data.docs.map(book => ({
            title: book.title,
            author: book.author_name?.[0] || 'Unknown',
            year: book.first_publish_year,
            cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
            pages: book.number_of_pages_median
        }));

        res.json({
            searchTerm: bookName,
            totalResults: data.numFound,
            books: books,
        });

    } catch (error) {
        console.error('Error fetching books from Open Library:', error);
        res.status(500).json({
            error: "Failed to fetch books from Open Library",
            message: error.message
        });
    }
}