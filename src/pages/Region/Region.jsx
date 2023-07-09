import { useLocation } from "react-router-dom";
import DetailsList from "../../components/DetailsList";
import { useFetch } from "../../hooks/useFetch";
import SearchBar from "../../components/SearchBar";

export default function Region() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("w");
  const url = `https://restcountries.com/v3.1/region/${query}`;
  const { data, error, isPending } = useFetch(url);

  return (
    <div>
      <SearchBar />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <DetailsList details={data} />}
    </div>
  );
}
