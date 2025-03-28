import { Button, Img, TabList, TabPanel, Tabs } from '@/entities'
import { BarChart } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'BI 리포트',
			back: true,
		})
	}, [])

	const [tabIndex, setTabIndex] = useState(0)
	const tabIndexChange = (idx: any) => {
		setTabIndex(idx)
	}

	const moreToggle = (e: any) => {
		const chartMore = e.currentTarget.closest('.chart-box').querySelector('.chart-more')
		if (!chartMore.classList.contains('on')) {
			chartMore.classList.add('on')
		} else {
			chartMore.classList.remove('on')
		}
	}

	const Info = () => {
		return (
			<>
				<div className='banner-profile'>
					<div className='on'>
						<div className='img'>
							<Img src={'/images/temp/temp-profile.png'} alt='' />
						</div>
						<div className='desc'>
							<span className='cls-name'>아리스토텔레스반</span>
							<span className='name'>홍길동</span>
							<div className='parent'>학부모 : 소이현</div>
						</div>
					</div>
				</div>

				<div className='legend'>
					<span className='warning'>
						<i></i>
						<span className='txt'>경고</span>
					</span>
					<span className='caution'>
						<i></i>
						<span className='txt'>주의</span>
					</span>
					<span className='normal'>
						<i></i>
						<span className='txt'>정상</span>
					</span>
				</div>
			</>
		)
	}

	return (
		<Contents>
			<div className='bireport-wrap'>
				<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
					<div className='page-top-area'>
						<TabList>
							<Button>일</Button>
							<Button>월</Button>
							<Button>년</Button>
						</TabList>
					</div>
					<TabPanel>
						{/* 일 */}
						<div className='tab-content'>
							<div className='bireport-section'>
								<div className='monthly-indicator'>
									<button className='btn-prev'></button>
									<b>2024.03</b>
									<span className='sub'>(1주차)</span>
									<button disabled={true} className='btn-next disabled'></button>
								</div>

								<Info />

								<div className='bi-chart-wrap'>
									<div className='chart-box'>
										<div className='chart'>
											<div className='tit-wrap'>
												<b className='tit activity'>활동성</b>
												<span className='per'>130%</span>
											</div>
											<BarChart data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
										</div>
										<div className='chart-more'>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
											</div>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
											</div>
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐보기</span>
											<span className='off'>접어보기</span>
										</button>
									</div>

									<div className='chart-box'>
										<div className='chart'>
											<div className='tit-wrap'>
												<b className='tit sociability'>사회성</b>
												<span className='per'>130%</span>
											</div>
											<BarChart data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
										</div>
										<div className='chart-more'>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
											</div>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
											</div>
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐보기</span>
											<span className='off'>접어보기</span>
										</button>
									</div>
									<div className='chart-box'>
										<div className='chart'>
											<div className='tit-wrap'>
												<b className='tit risky'>위험행동</b>
												<span className='per'>130%</span>
											</div>
											<div className='tit-wrap'>
												<b className='tit leaving'>장소이탈</b>
												<span className='per'>130%</span>
											</div>
											<BarChart data={[]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 주 */}
						<div className='tab-content'>
							<div className='bireport-section'>
								<div className='monthly-indicator'>
									<button className='btn-prev'></button>
									<b>2024.03</b>
									<button disabled={true} className='btn-next disabled'></button>
								</div>

								<Info />

								<div className='bi-chart-wrap'>
									<div className='chart-box'>
										<div className='chart'>
											<div className='tit-wrap'>
												<b className='tit activity'>활동성</b>
												<span className='per'>130%</span>
											</div>
											<BarChart data={[10, 90, -220, 220, -170]} label={['1주', '2주', '3주', '4주', '5주']} />
										</div>
										<div className='chart-more'>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart data={[10, 90, -220, 220, -170]} label={['1주', '2주', '3주', '4주', '5주']} />
											</div>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart data={[10, 90, -220, 220, -170]} label={['1주', '2주', '3주', '4주', '5주']} />
											</div>
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐보기</span>
											<span className='off'>접어보기</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* 월 */}
						<div className='tab-content'>
							<div className='bireport-section'>
								<div className='monthly-indicator'>
									<button className='btn-prev'></button>
									<b>2024</b>
									<button disabled={true} className='btn-next disabled'></button>
								</div>

								<Info />

								<div className='bi-chart-wrap'>
									<div className='chart-box'>
										<div className='chart'>
											<div className='tit-wrap'>
												<b className='tit activity'>활동성</b>
												<span className='per'>130%</span>
											</div>
											<BarChart type='month' data={[10, 90, -220, 220, -170]} label={['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']} />
										</div>
										<div className='chart-more'>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart type='month' data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
											</div>
											<div className='chart'>
												<div className='tit-wrap'>
													<b className='tit'>하위 카테고리명</b>
													<span className='per'>130%</span>
												</div>
												<BarChart type='month' data={[10, 90, -220, 220, -170]} label={['03.25(월)', '03.26(화)', '03.27(수)', '03.28(목)', '03.29(금)']} />
											</div>
										</div>
										<button className='btn-more' onClick={moreToggle}>
											<span className='on'>펼쳐보기</span>
											<span className='off'>접어보기</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</Contents>
	)
}

export default _
