import {FC} from 'react'
import {Routes, Route} from 'react-router-dom'
import '@/app/styles/App.css'
import {Layout} from '@/widgets/layout'
import {DemandFactorCalculation} from '@/features/demand-factor-calculation'
import {MainPage} from '@/pages/main/MainPage'

const App: FC = () => {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/demand-factor-calculation' element={<DemandFactorCalculation />} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
