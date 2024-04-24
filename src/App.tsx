import { CreateNewUser } from './components/CreateNewUser'
import ListOfUsers from './components/ListOfUsers'

function App() {
	return (
		<>
			<div className='box-border bg-slate-700 p-3 '>
				<div className='flex flex-col min-w-full sm:{px-6 -mx-6} lg:{px-8 -mx-8} '>
					<CreateNewUser />
					<ListOfUsers />
				</div>
			</div>
		</>
	)
}

export default App
