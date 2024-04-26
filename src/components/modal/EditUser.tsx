import React from 'react'
import { useActions, useAppSelector } from '../../hooks'
import { openModalId } from '../../store/modal/slice'
import { selectUserById, User } from '../../store/users/slice'

export const EditUser = () => {
	const selectUserId = useAppSelector(state => openModalId(state))
	const user = useAppSelector(state => selectUserById(state, selectUserId))
	const { closeEditModal, editUser } = useActions()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const formData = new FormData(form)

		const name = formData.get('name') as string
		const email = formData.get('email') as string
		const role = formData.get('role') as string

		const updatedUser: User = { name, email, role }
		editUser(selectUserId, updatedUser)
		form.reset()
	}

	return (
		<>
			<section className='fixed left-0 top-0 bg-black bg-opacity-50 flex h-full min-h-screen w-full items-center justify-center px-4 py-5'>
				<div className='w-full max-w-[570px] rounded-lg bg-white text-center dark:bg-dark-2'>
					<form onSubmit={handleSubmit}>
						<div className='h-auto px-6 py-3 text text-xs font-medium uppercase tracking-wider text-gray-500 border-b border-gray-200 flex justify-between items-center gap-3'>
							<h1 className='h-full uppercase'>EDIT USER</h1>

							<div className='flex flex-wrap items-center justify-end gap-x-6'>
								<button
									type='button'
									className='text-sm font-semibold leading-6 text-gray-900'
									onClick={closeEditModal}
								>
									Cancel
								</button>
								<button
									type='submit'
									className='w-15 text-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									Edit
								</button>
							</div>
						</div>
						<div className='grid grid-cols-1 gap-y-3 my-6 mx-6'>
							<div className='sm:col-span-2'>
								<input
									type='text'
									name='name'
									id='name'
									autoComplete='name'
									placeholder='name'
									required
									minLength={5}
									defaultValue={user?.name}
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>

							<div className='sm:col-span-2'>
								<input
									type='email'
									name='email'
									id='email'
									autoComplete='email'
									placeholder='email'
									required
									defaultValue={user?.email}
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>

							<div className='sm:col-span-2'>
								<input
									type='text'
									name='role'
									id='role'
									autoComplete='role'
									placeholder='role'
									required
									minLength={4}
									defaultValue={user?.role}
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}
