import React from "react"
import CountryCard from "./CountryCard"
import CountryListItem from "./CountryListItem"

const CountryList = ({ countries, newFilter, setFilterUsingButton }) => {

  if (countries.respuesta === 'KO')
  {
    return <div>Cargando datos ... </div>
  } 
  else {
    
    let filteredList = countries.filter(country =>
      country.name.common.toUpperCase().includes(newFilter.toUpperCase())
    )
    let listLength = filteredList.length;

    if (newFilter.length === 0 || listLength === 0) {
      return <div />
    } 
    else if (listLength >= 10) {
      return <div>Too many matches, specify more filter !!</div>
    } 
    else if (listLength > 1) {
      return (
        <div>
          <CountryListItem filteredList={filteredList} setFilterUsingButton={setFilterUsingButton}  />
        </div>
      )
    } 
    else {
      return (
        <div>
          <CountryCard country={filteredList[0]} />
        </div>
      )
    }
  }
}

export default CountryList