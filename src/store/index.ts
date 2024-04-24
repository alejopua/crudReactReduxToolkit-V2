/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const localStoragePersistanceMiddleware: Middleware =
	store => next => action => {
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
