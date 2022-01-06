import useUsersStore from "../store/useUsersStore"

import shallow from "zustand/shallow"

const useUsersFacade = () => {
  const { users, loading, error, fetchUsers } = useUsersStore(
    (state) => ({
      users: state.users,
      loading: state.loading,
      error: state.error,
      fetchUsers: state.fetchUsers,
    }),
    shallow
  )

  return { users, loading, error, fetchUsers }
}

export default useUsersFacade
