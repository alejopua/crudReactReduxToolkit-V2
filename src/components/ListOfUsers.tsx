const tableHead = ['Name', 'Email', 'Role', '']

const people = [
	{
		name: 'Jane Cooper',
		role: 'Admin',
		email: 'jane.cooper@example.com',
		github: 'johndoe',
	},
	{
		name: 'John Doe',
		role: 'Tester',
		email: 'john.doe@example.com',
		github: 'johndoe',
	},
	{
		name: 'Veronica Lodge',
		role: ' Software Engineer',
		email: 'veronica.lodge@example.com',
		github: 'veronicalodge',
	},
	{
		name: 'Peter  Parker',
		role: 'Software Movile',
		email: 'peter@example.com',
		github: 'alejopua',
	},
]

export default function ListOfUsers() {
	return (
		<div className='h-screen bg-slate-700 p-3 '>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
					<div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									{tableHead.map(head => (
										<th
											key={head}
											className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
										>
											{head}
										</th>
									))}
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200 bg-white'>
								{people.map(person => (
									<tr key={person.email}>
										<td className='whitespace-nowrap px-6 py-4'>
											<div className='flex items-center'>
												<div className='size-10 shrink-0'>
													<img
														className='size-10 rounded-full'
														src='https://avatar.iran.liara.run/public'
														alt={person.name}
													/>
												</div>
												<div className='ml-4'>
													<div className='text-sm font-medium text-gray-900'>
														{person.name}
													</div>
												</div>
											</div>
										</td>
										<td className='whitespace-nowrap px-6 py-4'>
											<div className='text-sm text-gray-900'>
												{person.email}
											</div>
										</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
											{person.role}
										</td>
										<td className='flex gap-2 whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-gray-500'>
											<button type='button'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className='{h-6 w-6}'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
													/>
												</svg>
											</button>
											<button type='button'>
												<svg
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
				</div>
			</div>
		</div>
	)
}
