import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserID = string

export interface User {
	name: string
	role: string
	email: string
}

export interface UserId extends User {
	id: UserID
}

const DEFAULT_STATE: UserId[] = [
	{
		id: '1',
		name: 'James Bond',
		role: 'Admin',
		email: 'jane.cooper@example.com',
	},
	{
		id: '2',
		name: 'John Doe',
		role: 'Tester',
		email: 'john.doe@example.com',
	},
	{
		id: '3',
		name: 'Veronica Lodge',
		role: ' Software Engineer',
		email: 'veronica.lodge@example.com',
	},
	{
		id: '4',
		name: 'Peter  Parker',
		role: 'Software Movile',
		email: 'peter@example.com',
	},
]

const initialState: UserId[] = (() => {
	const persistanceState = localStorage.getItem('__redux_state__')
	return persistanceState ? JSON.parse(persistanceState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		deleteUser: (state, action: PayloadAction<UserID>) => {
			const id = action.payload
			return state.filter(user => user.id !== id)
		},
		createUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			return [...state, { id, ...action.payload }]
		},
	},
})

export default usersSlice.reducer
export const { deleteUser, createUser } = usersSlice.actions
