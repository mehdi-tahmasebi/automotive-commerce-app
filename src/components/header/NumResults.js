import React from "react";

export default function NumResults({ cars, isSearched }) {
  return (
    <p className="num-results">
      {isSearched ? (
        <span>
          Found <strong>{cars.length}</strong> result
        </span>
      ) : (
        <span>
          Found <strong> 0 </strong> results
        </span>
      )}
    </p>
  );
}
