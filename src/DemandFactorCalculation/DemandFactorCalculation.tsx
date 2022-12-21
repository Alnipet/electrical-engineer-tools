import React, {useEffect, useState} from 'react'
import {Row, Col, Select, InputNumber, Typography, Space} from 'antd'

import styles from './DemandFactorCalculation.module.scss'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, defaults} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
defaults.font.family =
	"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"

const {Title: AntTitle, Text} = Typography

const datasets = [
	{
		label: 'пункт 1',
		data: [NaN, 1, 0.8, 0.7, 0.6, 0.5, 0.4, 0.35, 0.3, 0.3, NaN],
		borderColor: 'rgba(99, 132, 255)',
		backgroundColor: 'rgba(99, 132, 255)',
	},
	{
		label: 'пункт 2',
		data: [NaN, 1, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.5, NaN],
		borderColor: 'rgba(99, 255, 132)',
		backgroundColor: 'rgba(99, 255, 132)',
	},
	{
		label: 'пункт 3',
		data: [NaN, 1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, NaN],
		borderColor: 'rgba(255, 99, 132)',
		backgroundColor: 'rgba(255, 99, 132)',
	},
	{
		label: 'пункт 4',
		data: [NaN, 1, 1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, NaN],
		borderColor: 'rgba(255, 180, 99)',
		backgroundColor: 'rgba(255, 180, 99)',
	},
	{
		label: 'пункт 5',
		data: [NaN, 1, 1, 1, 1, 1, 1, NaN, NaN, NaN, NaN],
		borderColor: 'rgba(25, 99, 10)',
		backgroundColor: 'rgba(25, 99, 10)',
	},
	{
		label: 'пункт 6',
		data: [NaN, 1, 0.9, 0.8, 0.75, 0.7, 0.65, 0.55, NaN, NaN, NaN],
		borderColor: 'rgba(55, 59, 190)',
		backgroundColor: 'rgba(55, 59, 190)',
	},
	{
		label: 'пункт 7',
		data: [NaN, 1, 0.9, 0.8, 0.7, 0.65, 0.6, 0.5, NaN, NaN, NaN],
		borderColor: 'rgba(175, 9, 170)',
		backgroundColor: 'rgba(175, 9, 170)',
	},
]

const labels = [0, 5, 10, 15, 25, 50, 100, 200, 400, 500, 600]

const selectOptions = [
	{
		value: 'пункт 1',
		label: '1. Гостиницы, спальные корпуса и административные помещения санаториев, домов отдыха, пансионатов, турбаз, оздоровительных лагерей',
	},
	{
		value: 'пункт 2',
		label: '2. Предприятия общественного питания, детские ясли-сады, учебно-производственные мастерскиепрофтехучилищ',
	},
	{
		value: 'пункт 3',
		label:
			'3. Организации и учреждения управления, учреждения финансирования, кредитования и государственногострахования, общеобразовательныешколы, специальные учебныезаведения, учебные зданияпрофтехучилищ, предприятия бытового обслуживания, торговли, парикмахерские',
	},
	{
		value: 'пункт 4',
		label: '4. Проектные, конструкторскиеорганизации, научно-исследовательские институты',
	},
	{
		value: 'пункт 5',
		label: '5. Актовые залы, конференц-залы (освещение зала и президиума),спортзалы',
	},
	{
		value: 'пункт 6',
		label: '6. Клубы и дома культуры',
	},
	{
		value: 'пункт 7',
		label: '7. Кинотеатры',
	},
]

export const DemandFactorCalculation = () => {
	const [selected, setSelected] = useState<string>('')
	const [number, setNumber] = useState<number | null>(null)
	const [ratio, setRatio] = useState<number | null>(null)

	useEffect(() => {
		setSelected(selectOptions[2].value)
		setNumber(0)
	}, [])

	useEffect(() => {
		if (!number) return

		const datasetY = datasets.filter((el) => el.label === selected)[0]?.data
		const datasetX = [...labels]

		if (number && number <= datasetX[1]) return setRatio(1)

		for (let i = 0; i < datasetX.length; i++) {
			if (number === datasetX[i] && datasetY[i]) return setRatio(datasetY[i])
			if (number >= datasetX[i] && !datasetY[i + 1]) return setRatio(datasetY[i])

			if (number > datasetX[i] && number < datasetX[i + 1]) {
				const a = (datasetY[i + 1] - datasetY[i]) / (datasetX[i + 1] - datasetX[i])
				const b = datasetY[i] - a * datasetX[i]
				const y = a * number + b

				if (isNaN(y)) return setRatio(null)

				setRatio(y)
			}
		}
	}, [selected, number])

	console.log(ratio)

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		cubicInterpolationMode: 'monotone',
		font: {
			family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		},
		plugins: {
			legend: {
				position: 'right' as const,
				align: 'center' as const,
				maxWidth: 150,

				labels: {
					padding: 20,
					boxWidth: 10,

					font: {
						size: 10,
						family:
							"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
					},
				},
			},
			title: {
				display: true,
				text: 'Коэффициент спроса для установленной мощности рабочего освещения',
				padding: 15,
			},
		},

		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: 'Установленная мощность рабочего освещения, кВт',
				},
				suggestedMin: 0,
				suggestedMax: 600,
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'K c.o.',
				},
				suggestedMin: 0,
				suggestedMax: 1.2,
			},
		},
	}

	const data = {
		labels,
		datasets,
	}

	return (
		<div className={styles.wrapper}>
			<Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
				<Col className='gutter-row' xs={24} sm={24} md={24} lg={8} xl={8}>
					<Row className={styles.calcInner} gutter={[0, 16]}>
						<Col span={24}>
							<AntTitle level={2} className={styles.calcTitle}>
								Калькулятор расчета коэффициента спроса
							</AntTitle>
							<span>согласно СП 256.1325800.2016</span>
						</Col>
						<Col span={24}>
							<Select
								defaultValue='3. Организации и учреждения управления, учреждения финансирования, кредитования и государственногострахования, общеобразовательныешколы, специальные учебныезаведения, учебные зданияпрофтехучилищ, предприятия бытового обслуживания, торговли, парикмахерские'
								style={{width: 250}}
								onChange={setSelected}
								options={selectOptions}
							/>
						</Col>
						<Col span={24}>
							<InputNumber min={0} defaultValue={0} onChange={setNumber} style={{width: 250}} step={0.5} />
						</Col>
						<Col span={24} style={{height: 20}}>
							{ratio ? !Number.isInteger(ratio) ? <h3>Kc.o. = {ratio.toFixed(2)}</h3> : <h3>Kc.o. = {ratio}</h3> : null}
						</Col>
					</Row>
					<Row style={{margin: '25px 0'}}>
						<Col span={24}>
							<Space direction='vertical'>
								<Text>Примечание из СП 256.1325800.2016:</Text>
								<Text>
									7.2.2 Коэффициент спроса для расчета групповой сети рабочего освещения, распределительных и групповых сетей эвакуационного и аварийного освещения зданий, освещения витрин и световой
									рекламы следует принимать равным 1.
								</Text>
								<Text>
									7.2.3 Коэффициент спроса для расчета электрических нагрузок линий, питающих постановочное освещение в залах, клубах и домах культуры, следует принимать равным 0,35 для регулируемого
									освещения эстрады и 0,2 - для нерегулируемого.
								</Text>
							</Space>
						</Col>
					</Row>
				</Col>
				<Col className='gutter-row' xs={24} sm={24} md={24} lg={16} xl={12}>
					<div className={styles.chartInner}>
						<Line data={data} options={options} />
					</div>
				</Col>
			</Row>
		</div>
	)
}
