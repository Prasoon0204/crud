import React from 'react'
import axios from 'axios'

const Register = () => {

    const handleregister= async(e)=>{
        e.preventDefault()
        const user={
            name:e.target.name.value,
            age:e.target.age.value
        }
        await axios.post('http://localhost:9000/users',user)
        alert("data successfully save")
    }

  return (
    <div style={{border:'2px solid yellow'}}>
      <h1>CREATE USER</h1>

      <form style={{border:''}} onSubmit={handleregister}>
        <label> Name: </label>
        <input type="text" name="name" /><br/><br/>
        <label>AGE: </label>
        <input type="text" name="age" />
        <br/><br/>
        <button style={{background:'blue'}} type='submit'>Register Button</button>
      </form>
    </div>
  )
}

export default Register
