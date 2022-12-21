import React, {FC, useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import {Layout} from './components/Layout/Layout'
import {DemandFactorCalculation} from './DemandFactorCalculation/DemandFactorCalculation'

const App: FC = () => {
	console.log(DemandFactorCalculation.name)
	let location = useLocation()

	useEffect(() => {
		console.log(location)
	}, [location])

	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/DemandFactorCalculation' element={<DemandFactorCalculation />} />
					<Route path='/' element={<div></div>} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
