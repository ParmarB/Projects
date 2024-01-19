const Person = ({name, number, id, handleDelete})=> {
  console.log(name,number,id)
 return(
  <>  
<p key = {name}> {id} {name} {number} <button onClick={()=>handleDelete(id,name)}>Delete</button></p>
  </>
 )
}

  export default Person