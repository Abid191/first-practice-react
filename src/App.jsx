import { useEffect, useState } from 'react'

import './App.css'

function App() {
  return (
    <div>
      <ExtraUser></ExtraUser>
    </div>

  )
}

function ExtraUser() {
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, []);
  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <UserOne 
          key={user.id}
          name={user.name}
          email= {user.email}>

        </UserOne>)
      }
    </div>
  )
}

function UserOne(user) {
  return (
    <div style={{border:'2px solid red',margin:'20px'}}>
      <h3>name:{user.name} </h3>
      <p>email : {user.email}</p>
    </div>
  )
}


export default App
