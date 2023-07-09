import DarkIcon from "../assets/MoonIcon.svg";
import { Link } from "react-router-dom";

// styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="home-link">
        <h3>Where in the world?</h3>
      </Link>

      <div className="mode-container">
        <img src={DarkIcon} alt="dark/ light mode toggle" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}
