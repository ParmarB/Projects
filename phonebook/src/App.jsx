import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Add from './components/Add'
import personsService from './services/persons'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

  //Event handlers
  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) =>{
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  //adding new names
  const addName = (event) =>{
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber}
  
  if (persons.find((person)=>person.name === newPerson.name)){
   if(window.confirm(`${newName} is in the phonebook already, do you want to update the number?`)){
    const samePerson = persons.find((person)=>person.name === newName)
    const samePersonChangedNumber = {...samePerson, number: newNumber}
    console.log('same',samePersonChangedNumber)
   
    personsService
    .update(samePerson.id, samePersonChangedNumber)
    .then(response=>{
      setPersons(persons.map(n=> n.id !== samePerson.id? n: response.data))
      setNotification(`Updated ${newName}'s number`)
      setTimeout(() => {setNotification(null)}, 5000)
      setNewName('') 
      setNewNumber('')
    })
    .catch(error =>{
      setNotification(`${newName} was already deleted from the server`)
      setTimeout(() => {setNotification(null)}, 5000)
      setPersons(persons.filter(person=>person.id !== samePerson.id))
    })
   }
  } 
  else{
  
 personsService
        .create(newPerson)
        .then(response=>{
          setPersons(persons.concat(response.data))
          setNotification(`Added ${newName}'s contact`)
          setTimeout(() => {setNotification(null)}, 5000)
          setNewName('') 
          setNewNumber('') })
          console.log('persons array',persons)
  }}
  
  //populating list
  useEffect(() =>{
  console.log('effect')   
  personsService
  .getAll() 
  .then(response => {     
  console.log('promise fulfilled')
  setPersons(response.data)      })},[])

  //deleting names
  const handleDelete = (id,name)=>{
  if (window.confirm(`Do you want to delete${name}?`)){
    personsService
    .remove(id)    
    .then(response =>{
      setPersons(persons.filter(person=>person.name !==name))})
      .catch(error =>{
        setNotification(`${name} was already deleted from the server`)
        setTimeout(() => {setNotification(null)}, 5000)
        setPersons(persons.filter(person=>person.id !== id))})
    }}  
  
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification = {notification}/>
      <div>Filter: <Filter newFilter = {newFilter} handleFilterChange = {handleFilterChange}/></div>
    
    <h2>Add a new contact</h2>
     <Add addName = {addName} 
     newName = {newName} 
     handleNameChange = {handleNameChange}
     newNumber = {newNumber}
     handleNumberChange = {handleNumberChange}/>
    <h2>Numbers</h2>
     <Persons persons = {persons} filter = {newFilter} handleDelete={handleDelete} />
     
  </div>
  )
}

export default App