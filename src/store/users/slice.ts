import { createSlice } from '@reduxjs/toolkit'

export interface User {
	name: string
	role: string
	email: string
	github: string
}

export interface UserId extends User {
	id: string
}

const initialState: UserId[] = [
	{
		id: '1',
		name: 'Jane Cooper',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		github: 'johndoe',
	},
	{
		id: '2',
		name: 'John Doe',
		role: 'Tester',
		email: 'john.doe@example.com',
		github: 'johndoe',
	},
	{
		id: '3',
		name: 'Veronica Lodge',
		role: ' Software Engineer',
		email: 'veronica.lodge@example.com',
		github: 'veronicalodge',
	},
	{
		id: '4',
		name: 'Peter  Parker',
		role: 'Software Movile',
		email: 'peter@example.com',
		github: 'alejopua',
	},
]

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
})

export default usersSlice.reducer
