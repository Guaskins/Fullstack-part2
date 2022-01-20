import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    //Busquem si el nom és a l'arrai
    let lTrobat = 0
    persons.forEach(function(element) {
      if (element.name === newName) lTrobat = 1
    })

    if (lTrobat === 0)
    {
      const noteObject = {
        name: newName,
        number: newNumber,
        id: newName,
      }
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')
    }
    else 
    {
      alert(`${newName} is already added to phonebook !!`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const searchItems = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with 
        <input
          value={newFilter}
          onChange={searchItems}
        />
      </form> 
      <h3>Add a new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <div>
      
        {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(filteredPerson =>
          <Person key={filteredPerson.name} person={filteredPerson} />
        )}
      </div>
    </div>
  )
}

export default App_
