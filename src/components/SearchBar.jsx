import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./SearchBar.css";
import SearchIcon from "../assets/SearchIcon.svg";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search for country..."
            id="search"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
