import React, { useState } from "react";

function Search({ getQuery }) {
  const [search, setSearch] = useState("");

  const updateSearch = (q) => {
    setSearch(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <input
        type="search"
        className="form-control"
        placeholder="Search characters"
        value={search}
        onChange={(e) => {
          updateSearch(e.target.value);
        }}
      />
    </section>
  );
}

export default Search;
