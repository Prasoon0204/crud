import React, {useEffect, useState} from 'react'
import axios from 'axios'

const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();

    },[]);

    const viewdata = async () => {
        try {
          const res = await axios.get('https://crud-tpge.onrender.com/users');
          setUsers(res.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };


  return (
    <div style={{border:'2px solid yellow'}}>
      <h1>Show Data</h1>
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
        </tr>

     {users.map((user)=>(
      <tr key = {user.id}>
        <th>{user.id}</th>
        <th style={{color:'pink'}}>{user.name}</th>
        <th style={{color:'pink'}}>{user.age}</th>
      </tr>
     ))}

      </table>
    </div>
  )
}

export default View
