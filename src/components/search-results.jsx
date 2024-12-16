import React from "react";
import ResultItem from "./result-item";

function SearchResults({ data }) {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <ResultItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SearchResults;
