import { useTheme } from "../hooks/useTheme";
import DarkIcon from "../assets/MoonIcon.svg";

import { Link } from "react-router-dom";

// styles
import "./Navbar.css";

export default function Navbar() {
  const { changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
    console.log(mode);
  };

  return (
    <div className={`navbar ${mode}`}>
      <Link to="/" className={`home-link ${mode}`}>
        <h3>Where in the world?</h3>
      </Link>

      <div className="mode-container" onClick={toggleMode}>
        <img
          src={DarkIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%" }}
        />

        <p>Dark Mode</p>
      </div>
    </div>
  );
}
