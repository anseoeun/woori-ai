import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { Bar } from 'react-chartjs-2'

ChartJS.register(annotationPlugin, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend)
const _ = ({ type, data, label }: any) => {
	let options = {
		plugins: {
			legend: { display: false },
			title: { display: false },
			annotation: {
				annotations: {
					box1: {
						drawTime: 'beforeDatasetsDraw',
						type: 'box',
						xMin: -50,
						xMax: 150,
						yMin: -150,
						yMax: 150,
						backgroundColor: 'rgba(231, 238, 248, 0.8)',
						borderColor: 'transparent',
					},
					line: {
						drawTime: 'beforeDatasetsDraw',
						type: 'line',
						yMin: 0,
						yMax: 0,
						borderColor: '#BDC0D2',
						borderWidth: 1,
						borderDash: [4, 3],
					},
					maxline: {
						type: 'line',
						yMin: 200,
						yMax: 200,
						borderColor: '#CBCDDC',
						borderWidth: 0.5,
						borderDash: [4, 3],
						drawTime: 'beforeDatasetsDraw',
					},
					minline: {
						type: 'line',
						yMin: -200,
						yMax: -200,
						borderColor: '#CBCDDC',
						borderWidth: 0.5,
						borderDash: [4, 3],
						drawTime: 'beforeDatasetsDraw',
					},
				},
			},
			tooltip: false,
		},
		maxBarThickness: type === 'month' ? 11 : 18,
		barThickness: type === 'month' ? 11 : 18,
		responsive: true,
		maintainAspectRatio: false,
		tooltips: {
			enabled: false,
		},
		scales: {
			x: {
				border: {
					display: false,
				},
				stacked: true,
				grid: {
					drawBorder: false,
					display: false,
					drawTicks: false,
				},
				ticks: {
					color: '#60637B',
					font: { size: 13, family: 'Montserrat' },
					padding: 10,
				},
			},
			y: {
				border: {
					display: false,
				},
				display: false,
				stacked: true,
				min: -300,
				max: 300,
				grid: {
					display: false,
				},
				ticks: {
					display: false,
					stepSize: 100,
				},
			},
		},
	}
	const labels = label
	const datas = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: data,
				backgroundColor: function (context: any) {
					if (context.raw <= 150 && context.raw >= -150) {
						return '#4252E2'
					} else if (context.raw > 200 || context.raw < -200) {
						return '#DC0000'
					} else {
						return '#FFC75B'
					}
				},
			},
		],
	}

	const Chart = ({ options, data }: any) => {
		return (
			<div className='graph'>
				{data.datasets[0].data.length ? null : (
					<div className='no-data-chart-text'>
						<span>
							<em>리포트 작성 전</em> 입니다.
							<br />
							일정 기간 데이터 분석 후에 작성됩니다.
						</span>
					</div>
				)}
				<Bar data={data} options={options} />
			</div>
		)
	}

	return <Chart options={options} data={datas} />
}

export default _
