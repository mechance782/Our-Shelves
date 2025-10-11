import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// App component that includes Header, Welcome, and SearchSection components
function App() {

  const [selectedBook, setSelectedBook] = useState(null);
  
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home setSelectedBook={setSelectedBook} />} />
        <Route path="/BookDetail" element={<BookDetail book={selectedBook} />} />
      </Routes>

    </>
  );
}

export default App;
