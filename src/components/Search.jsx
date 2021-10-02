import React, { useState } from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <form id="search-bar">
        <fieldset>
          <label htmlFor="search">Search Posts</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Search;
