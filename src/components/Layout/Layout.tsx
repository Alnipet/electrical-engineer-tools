import {FC, ReactNode} from 'react'
import styles from './Layout.module.scss'
import {Layout as AntLayout} from 'antd'
import {Typography} from 'antd'
import {Header} from '../Header/Header'

type TProps = {
	children: ReactNode
	title?: string
}

const {Footer, Content} = AntLayout
const {Title} = Typography

export const Layout: FC<TProps> = ({children, title}) => {
	return (
		<>
			<AntLayout className={styles.wrapper}>
				<Header/>
				<Content className={styles.content}>
					{title && <Title className={styles.title}>{title}</Title>}
					{children}
				</Content>
				<Footer style={{ textAlign: 'center' }}>Petrov Design ©2023 Created by Petrov</Footer>
			</AntLayout>
		</>
	)
}
