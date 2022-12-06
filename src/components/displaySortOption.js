import React from "react";

function DisplaySortOption({ sortValue, onSortOptionChange }) {
  return (
    <select
      value={sortValue}
      onChange={(event) => onSortOptionChange(event.target.value)}
    >
      <option value="price asc">Price ASC</option>
      <option value="price desc">Price DESC</option>
      <option value="rating asc">Rating ASC</option>
      <option value="rating desc">Rating DESC</option>
    </select>
  );
}

export default DisplaySortOption;
