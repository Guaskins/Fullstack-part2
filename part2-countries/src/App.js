import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Components/Filter";
import CountryList from "./Components/CountryList";

const App = () => {
  const [countries, setCountries] = useState({ respuesta: 'KO' });
  const [newFilter, setNewFilter] = useState("");
  const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data);
      setRespuestaAPI(response)
    })
  }, [])

  const setFilterUsingButton = e => {
    setNewFilter(e.target.value);
  }

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <CountryList
        countries={countries}
        newFilter={newFilter}
        setFilterUsingButton={setFilterUsingButton}
      />
    </div>
  )
}

export default App;