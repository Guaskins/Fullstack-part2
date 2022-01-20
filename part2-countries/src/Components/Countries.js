import React from 'react'
import Country from './Country'

const Countries = ({ Worldcountries, newFilter }) => {

  let filteredList = Worldcountries.filter(country =>
    country.name.toUpperCase().includes(newFilter.toUpperCase())
    ) 

  let listLength = filteredList.length;

  if (newFilter.length === 0 || listLength === 0) {
    return <div>no hay datos</div>;
  }

  if (listLength >= 10) {
    return <div>Too many matches, specify another filter</div>;
    // return <div>hi</div>;
  }

  if (listLength > 1) {
    return filteredList.map(country => (
        <div key={country.name}>
            {country.name}{" "}
        </div>
    ));
    } else {
    return (
        <div>
        {filteredList[0]} 
        </div>
    );
  }
}

export default Countries