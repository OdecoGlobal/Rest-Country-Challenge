import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  const handleChange = (e) => {
    const setValue = e.target.value;
    setSelectedRegion(setValue);
    console.log(setValue);
    navigate(`/region?w=${setValue}`);
  };

  return (
    <div className="filter-container">
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

      <select
        name="region"
        value={selectedRegion}
        id="select-region"
        onChange={handleChange}
      >
        <option value="">All Regions</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Ocenaia</option>
      </select>
    </div>
  );
}
