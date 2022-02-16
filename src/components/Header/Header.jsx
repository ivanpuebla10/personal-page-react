import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <span>IVAN PUEBLA</span>
      <span className="menu">Menu</span>
      <span>
          <Link to="/">Home</Link>
      </span>
      <span>
          <Link to="/contact">Contact</Link>
      </span>
    </div>
  );
};

export default Header;
