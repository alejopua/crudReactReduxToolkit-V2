import ListOfUsers from './components/ListOfUsers'
import { CreateNewUser } from './components/CreateNewUser'
import { EditUser } from './components/modal/EditUser'
import { useAppSelector } from './hooks'

function App() {
	const { isOpen } = useAppSelector(state => state.modal)
	return (
		<>
			<div className='h-screen box-border bg-slate-700 p-3 '>
				<div className='h-full flex flex-col min-w-full sm:{px-6 -mx-6} lg:{px-8 -mx-8} '>
					<CreateNewUser />
					<ListOfUsers />
					{isOpen && <EditUser />}
				</div>
			</div>
		</>
	)
}

export default App
