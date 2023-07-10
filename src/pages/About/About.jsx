import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

import BackArrow from "../../assets/ArrowBack.svg";

import "./About.css";
import { useTheme } from "../../hooks/useTheme";

export default function About() {
  const { id } = useParams();
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(id)}`;
  const { data: details, error, isPending } = useFetch(url);

  const detail = details ? details[0] : null;
  console.log(detail);
  const native = detail && Object.values(detail.name.nativeName)[0].common;

  const currencies = detail && Object.values(detail.currencies)[0].name;
  const language = detail && Object.values(detail.languages);
  const border = detail && detail?.borders && Object.values(detail.borders);
  console.log(border);
  const { mode } = useTheme();

  return (
    <>
      <div className={`back-home ${mode}`}>
        <Link to="/" className={`home-link ${mode}`}>
          <img src={BackArrow} alt="retun to home page" />
          <p>Back</p>
        </Link>
      </div>

      <div className={`detail-page ${mode}`}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {detail && (
          <div className="about-country">
            <img src={detail.flags.png} className="about-flag" />

            <div className="about-details">
              <p className="name">{detail.name.common}</p>

              <section className="flex-details">
                <div className="init-details">
                  <p>
                    <span>Native Name: </span>
                    {native}
                  </p>
                  <p>
                    <span>Region: </span>
                    {detail.region}
                  </p>
                  <p>
                    <span>Subregion: </span>
                    {detail.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {detail.capital}
                  </p>
                </div>
                <div className="next-row">
                  <p>
                    <span>Top Level Domain: </span>
                    {detail.tld[0]}
                  </p>
                  <p>
                    <span>Currrency: </span>
                    {currencies}
                  </p>
                  <ul>
                    <span>Languages: </span>
                    {language.map((lang) => (
                      <li key={lang}>{lang}</li>
                    ))}
                  </ul>
                </div>
              </section>
              <div className="border">
                <span>Border Countries: </span>
                {border && border.length > 0 ? (
                  <ul>
                    {border.map((bord) => (
                      <li key={bord}>{bord}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No Border</p>
                )}
              </div>
            </div>

            <div className="flex-details"></div>
          </div>
        )}
      </div>
    </>
  );
}
