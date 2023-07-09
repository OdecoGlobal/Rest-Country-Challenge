// import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import DetailsList from "../../components/DetailsList";
import SearchBar from "../../components/SearchBar";

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  return (
    <div className="home">
      <SearchBar />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <DetailsList details={data} />}
    </div>
  );
}
