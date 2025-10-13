import { Link } from "react-router-dom";
import logo from "../assets/OurShelvesLogo.png";
import "./css/Header.css";

// header component with logo, search bar, and buttons
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Our Shelves" className="header-logo" />
      </Link>

      <div className="header-search-container">
        <input
          type="text"
          placeholder="Search books..."
          className="header-search-input"
        />
      </div>

      <nav>
        <div className="header-buttons">
          <Link className="header-button home" to="/">
            Home
          </Link>
          <Link className="header-button library" to="/Library">
            Library
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
