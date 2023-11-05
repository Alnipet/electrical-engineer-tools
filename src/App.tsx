import React, {FC, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import {Layout} from './components/Layout/Layout'
import {DemandFactorCalculation} from './DemandFactorCalculation/DemandFactorCalculation'

const App: FC = () => {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/demandFactorCalculation' element={<DemandFactorCalculation />} />
					<Route path='/' element={<div></div>} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
