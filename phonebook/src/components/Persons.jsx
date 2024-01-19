import Person from './Person'


const Persons = ({persons, filter, handleDelete}) =>(
    persons.filter((person) =>
     person.name
     .toLowerCase()
     .includes(filter))
     .map(person =>
       <Person key = {person.name} id= {person.id} name={person.name} number ={person.number} handleDelete = {handleDelete} />
      )
  )

  export default Persons