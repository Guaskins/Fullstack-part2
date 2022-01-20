import React from "react"

const CountryLanguages = ({ countryLangs }) => {

  //countryLangs no es un objeto iterable, es decir, no es un array que se pueda recorrer con un foreach o map
  console.log(countryLangs)

  var langOptions = []

  Object.keys(countryLangs).forEach(function(key) {
    console.log("key language", key)
    langOptions.push(<li value={key}>{countryLangs[key]}</li>);
  })

  return (
    <div>
      <h3>Lenguajes hablados</h3>
      <ul>
        {langOptions}
      </ul>
    </div>
  )
}

export default CountryLanguages