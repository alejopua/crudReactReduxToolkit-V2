import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserID } from '../users/slice'
import { RootState } from '../index'

export type ModalState = {
	isOpen: boolean
	modalId: UserID
}

const initialState: ModalState = {
	isOpen: false,
	modalId: '',
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<UserID>) => {
			state.isOpen = true
			state.modalId = action.payload
		},
		closeModal: state => {
			state.isOpen = false
			state.modalId = null
		},
	},
})

export const { openModal, closeModal } = modalSlice.actions
export const openModalId = (state: RootState) => state.modal.modalId
export default modalSlice.reducer
