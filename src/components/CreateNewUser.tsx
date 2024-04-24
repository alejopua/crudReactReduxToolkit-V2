import { useUsersActions } from '../hooks'

export const CreateNewUser = () => {
	const { addUser } = useUsersActions()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement

		const formData = new FormData(form)

		const name = formData.get('name') as string
		const role = formData.get('role') as string
		const email = formData.get('email') as string

		form.reset()
		addUser({ name, role, email })
	}

	const resetForm = () => {
		const form = document.querySelector('form') as HTMLFormElement
		form.reset()
	}

	return (
		<>
			<section className=' bg-gray-50 min-w-full border-b border-gray-200 shadow rounded-lg mb-3'>
				<form onSubmit={handleSubmit}>
					<div className='h-auto px-6 py-3 text text-xs font-medium uppercase tracking-wider text-gray-500 border-b border-gray-200 flex justify-between items-center'>
						<h1>NEW USER</h1>

						<div className='flex items-center justify-end gap-x-6'>
							<button
								type='button'
								className='text-sm font-semibold leading-6 text-gray-900'
								onClick={resetForm}
							>
								Cancel
							</button>
							<button
								type='submit'
								className='w-15 text-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Create
							</button>
						</div>
					</div>
					<div className='m-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='sm:col-span-2 sm:col-start-1'>
							<label
								htmlFor='name'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Name
							</label>
							<div className='mt-2'>
								<input
									type='text'
									name='name'
									id='name'
									autoComplete='name'
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='sm:col-span-2'>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Email
							</label>
							<div className='mt-2'>
								<input
									type='email'
									name='email'
									id='email'
									autoComplete='email'
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='sm:col-span-2'>
							<label
								htmlFor='role'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Role
							</label>
							<div className='mt-2'>
								<input
									type='text'
									name='role'
									id='role'
									autoComplete='role'
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
					</div>
				</form>
			</section>
		</>
	)
}
