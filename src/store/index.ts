/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './users/slice'
import modalReducer from './modal/slice'

const localStoragePersistanceMiddleware: Middleware =
	store => next => action => {
		// fase 1
		console.log(store.getState()) // esto es diferente al state de la fase 2 porque el estado no ha sido actualizado
		next(action)
		// fase 2
		console.log(store.getState()) // esto es diferente al state de la fase 1 porque el estado ha sido actualizado
		localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
	}

export const store = configureStore({
	reducer: {
		users: usersReducer,
		modal: modalReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStoragePersistanceMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
