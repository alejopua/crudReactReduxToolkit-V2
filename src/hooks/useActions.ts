import { useAppDispatch } from './store'
import { openModal, closeModal } from '../store/modal/slice'
import {
	deleteUser,
	UserID,
	createUser,
	User,
	editUserById,
} from '../store/users/slice'

export const useActions = () => {
	const dispatch = useAppDispatch()

	const handleDelete = (id: UserID) => {
		dispatch(deleteUser(id))
	}

	const addUser = ({ name, role, email }: User) => {
		dispatch(createUser({ name, role, email }))
	}

	const openEditModal = (id: UserID) => {
		dispatch(openModal(id))
	}

	const closeEditModal = () => {
		dispatch(closeModal())
	}

	const editUser = (id: UserID, dataUser: User) => {
		dispatch(editUserById({ id, ...dataUser }))
		closeEditModal()
	}

	return {
		addUser,
		closeEditModal,
		editUser,
		handleDelete,
		openEditModal,
	}
}
