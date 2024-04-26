const tableHead = ['Name', 'Email', 'Role', 'Actions']
import { useActions, useAppSelector } from '../hooks'

export default function ListOfUsers() {
	const people = useAppSelector(state => state.users)
	const { handleDelete, openEditModal } = useActions()

	return (
		<>
			<div className='h-full bg-white rounded-lg overflow-auto '>
				<table className='overflow-hidden divide-y divide-gray-200 rounded-lg'>
					<thead className='bg-gray-50'>
						<tr>
							{tableHead.map(head => (
								<th
									key={head}
									className='w-full px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
								>
									{head}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 bg-white'>
						{people.map((person, index) => (
							<tr key={index}>
								<td className='whitespace-nowrap px-6 py-4'>
									<div className='h-10 flex items-center'>
										<div className='size-10 shrink-0 hidden lg:inline'>
											<img
												className='size-10 rounded-full'
												src={`https://unavatar.io/github/${person.name}`}
												alt={person.name}
											/>
										</div>

										<div className='ml-3'>
											<div className='text-sm font-medium text-gray-900'>
												{person.name}
											</div>
										</div>
									</div>
								</td>
								<td className='whitespace-nowrap px-6 py-4'>
									<div className='text-sm text-gray-900'>{person.email}</div>
								</td>
								<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
									{person.role}
								</td>
								<td className='w-8 flex gap-2 whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-gray-500'>
									<button
										type='button'
										onClick={() => openEditModal(person.id)}
									>
										<svg
											aria-label='edit'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='size-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
											/>
										</svg>
									</button>
									<button type='button' onClick={() => handleDelete(person.id)}>
										<svg
											aria-label='Delete'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='size-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
											/>
										</svg>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
