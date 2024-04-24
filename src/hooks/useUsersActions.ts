import { useAppDispatch } from '../hooks/store'
import { deleteUser, UserID, createUser, User } from '../store/users/slice'

export const useUsersActions = () => {
	const dispatch = useAppDispatch()

	const handleDelete = (id: UserID) => {
		dispatch(deleteUser(id))
	}

	const addUser = ({ name, role, email }: User) => {
		dispatch(createUser({ name, role, email }))
	}

	return { handleDelete, addUser }
}
