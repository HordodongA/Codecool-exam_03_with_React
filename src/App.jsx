import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {

  // App state
  const [users, setUsers] = useState("")

  // Iput state
  const [searchInput, setSearchInput] = useState("")

  const getData = async () => {
    const dataJson = await fetch("https://api.github.com/users")
    const dataObject = dataJson.json()
    return dataObject
  }

  const initPage = async () => {
    const response = await getData()
    setUsers(response)
  }

  useEffect(() => {
    initPage()
  }, [])


  return (
    <div className="App">

      <div id="search-section">
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
        />
      </div> {/* search-section */}

      <div id="users-grid">
        {!users ?
          "Loading..." :
          users.filter(user => user.login.startsWith(searchInput)).map(user => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
      </div> {/* users-grid */}

    </div> /* App */
  )
}

export default App
