// import React from "react";
import { Link } from "react-router-dom";
import "./DetailsList.css";
import { useTheme } from "../hooks/useTheme";

export default function DetailsList({ details }) {
  const { mode } = useTheme();
  if (details.length === 0) {
    return <div className="error">No country to load....</div>;
  }
  return (
    <div className={`detail-container ${mode}`}>
      {details.map((detail) => (
        <Link
          to={`/about/${detail.name.common.toLowerCase()}`}
          key={detail.name.common}
          className="details-link"
        >
          <div className={`countries ${mode}`}>
            <div className="flag">
              <img className="country__flag" src={detail.flags.png} />
            </div>
            <p className="name">{detail.name.common}</p>
            <div className="data">
              <p>
                <span>Population: </span>
                {detail.population}
              </p>
              <p>
                <span>Region: </span>
                {detail.region}
              </p>
              <p>
                <span>Capital: </span>
                {detail.capital}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
