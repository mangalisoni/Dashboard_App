import React from "react";
import useDashboardStore from "../context/store.js";

const SearchBar = () => {
  const setSearchQuery = useDashboardStore((s) => s.setSearchQuery);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search widgets..."
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
