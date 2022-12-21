import React, { useState } from 'react'
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import type {MenuProps} from 'antd'
import {Logo} from '../Logo/Logo'
import {Col, Row} from 'antd'

type TMenuItem = MenuProps['items']

const AntHeader = Layout.Header
const menuItem: TMenuItem = [
	{
		label: <NavLink to='/'>Главная</NavLink>,
		key: 'main',
	},
	{
		label: <NavLink to='DemandFactorCalculation'>Коэффициент спроса</NavLink>,
		key: 'demandFactorCalculation',
	}
]

export const Header = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState<string>('main')

  const handleMenuItemSelect: MenuProps['onClick'] = (e) => {
    setCurrentMenuItem(e.key)
  }

	return (
		<>
			<AntHeader>
				<Row align={'middle'} style={{height: '100%'}}>
					<Col xs={8} md={2}>
						<Logo />
					</Col>
					<Col xs={12}>
						<Menu items={menuItem} mode="horizontal" theme='dark' selectedKeys={[currentMenuItem]} onClick={handleMenuItemSelect}/>
					</Col>
				</Row>
			</AntHeader>
		</>
	)
}
