import React from "react"

const CountryFlag = ({ country }) => {
  return (
    <div>
      <h3>Bandera</h3>
      <img
          src={country.flags['png']}
          alt={`${country.name.common}\'s flag`}
          style={{ width: "100px" }}
      />
    </div>
  )
}

export default CountryFlag