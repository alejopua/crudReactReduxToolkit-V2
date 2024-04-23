import { useAppDispatch } from '../hooks/store'
import { deleteUser, UserID } from '../store/users/slice'

export const useUsersActions = () => {
	const dispatch = useAppDispatch()

	const handleDelete = (id: UserID) => {
		dispatch(deleteUser(id))
	}

	return { handleDelete }
}
