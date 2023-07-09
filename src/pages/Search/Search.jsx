import { useLocation } from "react-router-dom";
import DetailsList from "../../components/DetailsList";

import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Search() {
  const [Countryname, setCountryName] = useState("");
  const queryString = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(queryString.search);
    const query = queryParams.get("q");
    if (query) {
      setCountryName(query);
    }
  }, [queryString]);
  const url = `https://restcountries.com/v3.1/name/${Countryname}?fullText=true`;

  const { data, error, isPending } = useFetch(url);
  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <DetailsList details={data} />}
    </div>
  );
}
