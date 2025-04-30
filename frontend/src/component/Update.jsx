import React from 'react'
import axios from 'axios'

const Update = () => {
    const handleUpdate=async(e)=>{
        e.preventDefault()
        const id = e.target.id.value
        const name = e.target.name.value
        const age = e.target.age.value
        const data = {name,age}
        await axios.put(`http://localhost:9000/users/${id}`,data)
        alert("Update Successfully")
    }
  return (
    <div style={{border:'2px solid yellow'}}>
      <h1>Update Users</h1>

      <form onSubmit={handleUpdate}>
        <label>Id: <input type="text" name='id' /></label><br/><br/>
        <label>Name: <input type="text" name='name' /></label><br/><br/>
        <label>Age: <input type="text" name='age' /></label><br/><br/>
        <button  type="submit">Update</button>
      </form>

    </div>
  )
}

export default Update
