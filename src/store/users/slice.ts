import { RootState } from './../index'

import {
	createSelector,
	createSlice,
	type PayloadAction,
} from '@reduxjs/toolkit'

export type UserID = string | null

export interface User {
	name: string
	role: string
	email: string
}

export interface UserWithId extends User {
	id: UserID
}

const DEFAULT_STATE: UserWithId[] = [
	{
		id: '1',
		name: 'Jane Cooper',
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

const initialState: UserWithId[] = (() => {
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
			state.push({ id, ...action.payload })
		},
		editUserById: (state, action: PayloadAction<UserWithId>) => {
			const { id, ...dataUser } = action.payload
			const existingUser = state.find(user => user.id === id)
			if (existingUser) Object.assign(existingUser, dataUser)
		},
	},
})

export const { deleteUser, createUser, editUserById } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users

export const selectUserById = createSelector(
	[selectUsers, (_: RootState, Id: UserID) => Id],
	(users: UserWithId[], Id: UserID) =>
		users.find(user => user.id === Id) || null,
)

export default usersSlice.reducer
