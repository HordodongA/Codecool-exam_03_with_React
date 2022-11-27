import { useState } from "react"

function UserCard({ user }) {

  const [showMore, setShowMore] = useState("false")
  const [buttonText, setButtonText] = useState("Show more")

  function showButtonHandler() {
    setShowMore(!showMore)
    setButtonText(showMore ? "Show less" : "Show more")
  }

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <p className="user-name">{user.login}</p>
      <button onClick={showButtonHandler} >{buttonText}</button>
      {!showMore &&
        <div>
          <p className="user-type">Rank: {user.type}</p>
          <p className="user-admin">Admin: {user.site_admin.toString()}</p>
        </div>}
    </div>
  )
}

export default UserCard