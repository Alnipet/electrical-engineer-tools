import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
import {NavLink, useLocation} from 'react-router-dom'
import type {MenuProps} from 'antd'
import {Col, Layout, Menu, Row} from 'antd'
import {Logo} from '../Logo/Logo'

type TMenuItem = MenuProps['items']

const AntHeader = Layout.Header
const menuItem: TMenuItem = [
    {
        label: <NavLink to='/'>Главная</NavLink>,
        key: '/',
    },
    {
        label: <NavLink to='demandFactorCalculation'>Коэффициент спроса</NavLink>,
        key: '/demandFactorCalculation',
    }
]

export const Header = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState<string>()

    const handleMenuItemSelect: MenuProps['onClick'] = (e) => {
        setCurrentMenuItem(e.key)
    }

    let location = useLocation()
    useEffect(() => {
        setCurrentMenuItem(location.pathname)
    }, [])

    return (
        <>
            <AntHeader className={`${styles.header} ${styles.mainHeader}`}>
                <Row align={'middle'} style={{height: '100%'}}>
                    <Col xs={8} md={4}>
                        <Logo/>
                    </Col>
                    <Col xs={12}>
                        <Menu items={menuItem} mode="horizontal" theme='dark' selectedKeys={currentMenuItem ? [currentMenuItem] : undefined}
                              onClick={handleMenuItemSelect}/>
                    </Col>
                </Row>
            </AntHeader>
        </>
    )
}
