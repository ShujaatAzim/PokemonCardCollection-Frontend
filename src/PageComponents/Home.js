import React, { useState, useEffect} from 'react'
import CollectionDisplay from '../ContainerComponents/CollectionDisplay'

const Home = () => {

  const [allUsers, setAllUsers] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(data => setAllUsers(data))
  }, [])

  const handleUser = name => {
    let newCurrentUser = allUsers.find(user => user.name === name)
    setCurrentUser(newCurrentUser)
  }
  
  return (
    <div>
      <h3>Logged in as: {currentUser ? currentUser.name : "Please Select a User!"}</h3>
      <select onChange={(e) => handleUser(e.target.value)}>
        <option value="">Please select a user!</option>
        { allUsers ? allUsers.map(user => <option key={user.name}>{user.name}</option>) : null }
      </select>
      { currentUser ? <CollectionDisplay user={currentUser} /> : null }
    </div>
  );
}

export default Home