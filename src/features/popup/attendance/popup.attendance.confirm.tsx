import { Button, Popup } from '@/entities'

const _ = ({ open, close }: any) => {
	return (
		<Popup open={open} close={close}>
			<div className='pop-header'>
				<b className='title'>출결상태 변경</b>
			</div>
			<div className='pop-body'>
				<div className='pop-notice'>
					<div className='tit'>정말 출결 상태를 변경하시겠어요?</div>
					<div className='txt-box align-c'>
						<div className='txt'>
							<span className='label'>변경 전 :</span>
							<b>출석</b>
						</div>
						<div className='txt'>
							<span className='label'>변경 후 :</span>
							<b>인정결석 - 모니터링 대상</b>
						</div>
					</div>
				</div>
			</div>
			<div className='pop-footer'>
				<div className='btn-wrap'>
					<Button className='btn-type1 st4' onClick={close}>
						<span>아니오</span>
					</Button>
					<Button className='btn-type1 st1' onClick={close}>
						<span>네, 변경할게요</span>
					</Button>
				</div>
			</div>
		</Popup>
	)
}

export default _
