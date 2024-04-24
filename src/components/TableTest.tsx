export const TableTest = () => {
	return (
		<section className='bg-slate-700 p-3 sm:p-5'>
			<div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
				<div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
					<div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
						<div className='w-full md:w-1/2'>
							{' '}
							<span className='inline-flex items-center rounded-md bg-indigo-600 bg-opacity-25 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10'>
								Badge
							</span>
						</div>
					</div>
					<div className='overflow-x-auto'>
						<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
								<tr>
									<th scope='col' className='px-4 py-3'>
										name
									</th>
									<th scope='col' className='px-4 py-3'>
										email
									</th>
									<th scope='col' className='px-4 py-3'>
										role
									</th>

									<th scope='col' className='px-4 py-3'>
										<span className='sr-only'>Actions</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className='border-b dark:border-gray-700'>
									<th
										scope='row'
										className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
									>
										Apple iMac 27&#34;
									</th>
									<td className='px-4 py-3'>PC</td>
									<td className='px-4 py-3'>Apple</td>
									<td className='px-4 py-3 flex items-center justify-end'>
										<button
											id='apple-imac-27-dropdown-button'
											data-dropdown-toggle='apple-imac-27-dropdown'
											className='inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100'
											type='button'
										>
											<svg
												className='w-5 h-5'
												aria-hidden='true'
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
											</svg>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<nav
						className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
						aria-label='Table navigation'
					>
						<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
							<span className='font-semibold text-gray-900 dark:text-white'>
								1
							</span>
							of
							<span className='font-semibold text-gray-900 dark:text-white'>
								10
							</span>
						</span>
						<ul className='inline-flex items-stretch -space-x-px'>
							<li>
								<a
									href='#'
									className='flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
								>
									<span className='sr-only'>Previous</span>
									<svg
										className='w-5 h-5'
										aria-hidden='true'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
											clip-rule='evenodd'
										/>
									</svg>
								</a>
							</li>

							<li>
								<a
									href='#'
									className='flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
								>
									<span className='sr-only'>Next</span>
									<svg
										className='w-5 h-5'
										aria-hidden='true'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clip-rule='evenodd'
										/>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</section>
	)
}
