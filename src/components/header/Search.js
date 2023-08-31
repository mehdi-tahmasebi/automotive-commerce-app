import { useState } from "react";

export default function Search({ setSearchQuery }) {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery(query);
  };

  const handleReset = () => {
    setQuery("");
    setSearchQuery("");
  };
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        className="search"
        type="text"
        placeholder="Search Your Car ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="btn-search" onClick={handleSearch}>
        Search
      </button>
      {query && (
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </form>
  );
}
