import React from 'react'
import axios from 'axios'

const Delete = () => {
    const handledelete=async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert("data delete Successfully")
    }
  return (
    <div style={{border:'2px solid yellow'}}>
    <h1>Delete User</h1>
    <form onSubmit={handledelete}>
        <input type="text" name='id' placeholder='enter only id' />
        <button type='submit'>Delete</button>
    </form>
    </div>
  )
}

export default Delete
