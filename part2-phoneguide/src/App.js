import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personServices from './services/person-services'
import Notification from './components/Notification'
import NotificationError from './components/NotificationError'

const App = () => {
  const [ persons, setPersons ] = useState("KO") 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ addedMessage, setAddedMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect - get all persons')
    personServices
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    var array = [...persons]
    var index = array.findIndex(function(o){
      return o.name === newName
    })
    console.log(index)

    if (index === -1)
    {
      const noteObject = {
        name: newName,
        number: newNumber
      }
      personServices
      .create(noteObject)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')

        setAddedMessage(
          `Added '${newName}'`
        )
        setTimeout(() => {
          setAddedMessage(null)
        }, 5000)
      })

    }
    else 
    {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)){
        const findPerson = persons.find(n => n.name === newName)
        const changedPerson = { ...findPerson, number: newNumber }

        personServices
        .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
        })
        .catch(error => {
          setErrorMessage(
            `Information of '${newName}' has already removed from server`
          )
          console.log(error)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(n => n.id !== changedPerson.id))
          setNewName('')
          setNewNumber('')
        }) 
      }
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

  const handleDeleteName = id => {
    var array = [...persons]
    var index = array.findIndex(function(o){
      return o.id === id;
    })
    var sResult = window.confirm(`Do you really want to detele '${array[index].name}'?`)
    if (index !== -1 && sResult) {
      personServices
      .deleteItem(id)
      .then(returnedPerson => {
        setPersons(persons.filter(n => n.id !== id))
      })
    }
  }

  if (persons === 'KO')
  {
    return <div>Cargando datos ... </div>
  } 
  {
    return (
      <div>
        <h2>Phonebook</h2>
        <Notification message={addedMessage} />
        <NotificationError message={errorMessage} />
        <Filter
            newFilter={newFilter}
            searchItems={searchItems}
        /> 
        <h3>Add a new</h3>
        <div>
          <PersonForm
            newName={newName}
            newNumber={newNumber}
            addName={addName}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
          />
        </div>
        <h3>Numbers</h3>
        <div>
          {[...persons].filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(filteredPerson =>
            <Person key={filteredPerson.id} person={filteredPerson} handleDeleteName={() => handleDeleteName(filteredPerson.id)}/>
          )}
        </div>
      </div>
    )
  }
}

export default App
