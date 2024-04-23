/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const localStoragePersistanceMiddleware =
	(store: { getState: () => any }) =>
	(next: (arg0: any) => void) =>
	(action: any) => {
		next(action)
		localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
	}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStoragePersistanceMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
