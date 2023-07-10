import { useTheme } from "../hooks/useTheme";

import { Link } from "react-router-dom";

// Assets
import LightIcon from "../assets/LightIcon.svg";
import DarkIcon from "../assets/MoonIcon.svg";
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
          src={mode === "dark" ? LightIcon : DarkIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%" }}
        />

        <p>{mode === "dark" ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </div>
  );
}
