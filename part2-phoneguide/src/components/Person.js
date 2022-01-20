import React from 'react'

const Person = ({ person , handleDeleteName}) => {
  return (
    <div>
        <div>{person.name} {person.number} <button onClick={handleDeleteName}>Delete</button></div>
    </div>
  )
}

export default Person