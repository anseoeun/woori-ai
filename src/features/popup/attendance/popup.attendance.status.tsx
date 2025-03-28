import { Button, Popup, Radio, RadioGroup } from '@/entities'

const _ = ({ open, close, value, onChange }: any) => {
	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title align-l'>출결상태를 선택해주세요</b>
			</div>
			<div className='pop-body'>
				<div className='check-select-list'>
					<RadioGroup label='notiTime' value={value || ''} onChange={onChange}>
						<ul>
							<li>
								<Radio value='1'>출석</Radio>
							</li>
							<li>
								<div className='tit'>인정결석</div>
								<ul>
									<li>
										<Radio value='2-1'>질병 부상</Radio>
									</li>
									<li>
										<Radio value='2-2'>부모의 출산</Radio>
									</li>
									<li>
										<Radio value='2-3'>미세먼지</Radio>
									</li>
									<li>
										<Radio value='2-4'>자연재해 재난</Radio>
									</li>
									<li>
										<Radio value='2-5'>경조사</Radio>
									</li>
									<li>
										<Radio value='2-6'>모니터링 대상</Radio>
									</li>
									<li>
										<Radio value='2-7'>부모입원</Radio>
									</li>
									<li>
										<Radio value='2-8'>입양</Radio>
									</li>
									<li>
										<Radio value='2-9'>기타</Radio>
									</li>
								</ul>
							</li>
							<li>
								<Radio value='3'>결석</Radio>
							</li>
							<li>
								<Radio value='4'>등원전</Radio>
							</li>
						</ul>
					</RadioGroup>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' onClick={close}>
						<span>다음</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
