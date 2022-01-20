import React from "react"

const CountryListItem = ({ filteredList, setFilterUsingButton }) => {
    return filteredList.map(country => (
        <div key={country.name.common}>
          {country.name.common}{" "}
          <button value={country.name.common} onClick={setFilterUsingButton}>
            {" "}show{" "}
          </button>
        </div>
      ))
}

export default CountryListItem