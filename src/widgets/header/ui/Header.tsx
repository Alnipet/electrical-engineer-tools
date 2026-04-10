import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
import {useLocation, useNavigate} from 'react-router-dom'
import type {MenuProps} from 'antd'
import {Col, Layout, Menu, Row} from 'antd'
import {Logo} from '@/shared/ui'

type TMenuItem = MenuProps['items']

const AntHeader = Layout.Header
const menuItem: TMenuItem = [
    {
        label: 'Главная',
        key: '/',
    },
    {
        label: 'Коэффициент спроса',
        key: '/demand-factor-calculation',
    }
]

export const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [currentMenuItem, setCurrentMenuItem] = useState<string>(location.pathname)

    const handleMenuItemSelect: MenuProps['onClick'] = ({key}) => {
        navigate(key)
    }

    useEffect(() => {
        setCurrentMenuItem(location.pathname)
    }, [location.pathname])

    return (
        <AntHeader className={`${styles.header} ${styles.mainHeader}`}>
            <Row align={'middle'} style={{height: '100%'}}>
                <Col xs={8} md={4}>
                    <Logo/>
                </Col>
                <Col xs={16}>
                    <Menu
                        items={menuItem}
                        mode="horizontal"
                        theme='dark'
                        selectedKeys={[currentMenuItem]}
                        onClick={handleMenuItemSelect}
                    />
                </Col>
            </Row>
        </AntHeader>
    )
}
