import { useEffect } from "react"

import useUsersFacade from "../facades/useUsersFacade"

const Users = () => {
  const { users, loading, error, fetchUsers } = useUsersFacade()

  useEffect(() => fetchUsers(), [])

  return (
    <div>
      {loading && <p data-testid="loading">Loading...</p>}
      {error && <p data-testid="error">{error}</p>}
      {users?.length > 0 && (
        <ul data-testid="users-list">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users
