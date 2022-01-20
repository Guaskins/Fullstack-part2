import React from "react";

const Filter = ({ newFilter, setNewFilter }) => {
  const filterCountries = e => {
    setNewFilter(e.target.value);
  };

  return (
    <div>
      <h1>Find countries</h1>
      <input
        value={newFilter}
        onChange={filterCountries}
        placeholder="Enter a country name"
      />
    </div>
  );
};

export default Filter;