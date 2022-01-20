import React from "react"
import Weather from "./Weather"
import CountryLanguages from "./CountryLanguages"
import CountryFlag from "./CountryFlag"

const CountryCard = ({ country }) => {
  console.log(country)
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Población: {country.population}</p>
      <p>Área: {country.area}</p>
      <CountryLanguages countryLangs={country.languages} />
      <CountryFlag country={country} />
      <Weather capital={country.capital[0]} />
    </div>
  );
};

export default CountryCard;