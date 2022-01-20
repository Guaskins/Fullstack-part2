import React from 'react'
import Person from './Person'

const Persons = ({ persones, filter }) => {
  return (
    <div>
        {persones.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(filteredPerson =>
          <Person key={filteredPerson.name} person={filteredPerson} />
        )}
      </div>
  )
}

export default Persons