import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 20 }}>
      <h1>Our Shelves</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
