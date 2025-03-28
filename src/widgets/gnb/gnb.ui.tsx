import { Button, Icon } from '@/entities'
import { Gnb } from './gnb.style'
import { useNavigate } from "react-router-dom";

const _ = () => {
	const gnbClose = () => {
		const gnbWrap: any = document.querySelector('.gnb-wrap')
		gnbWrap.style.transition = 'right 300ms ease-in-out'
		gnbWrap.style.right = '-100%'

		setTimeout(function () {
			gnbWrap.style.display = 'none'
			document.documentElement.classList.remove('open-gnb')
			document.body.classList.remove('open-gnb')
			;(document.querySelector('.outer-wrap') as any).classList.remove('open-gnb')
		}, 300)
	}

	const navigate = useNavigate();
	const move = () =>{
		gnbClose();
		navigate("/publish/child/detail");
	}

	return (
		<Gnb className='gnb-wrap'>
			<div className='gnb-header'>
				<Button to='/' className='logo'></Button>
				<div className='right'>
					<Button className='btn-close' onClick={gnbClose}>
						<Icon type='close' />
					</Button>
				</div>
			</div>
			<div className='gnb-content'>
				<ul className='alarm-wrap'>
					<li>
						<Button to='/' className="link">
							<Icon type='home' />
							<span className='txt'>홈으로</span>
						</Button>
					</li>
					<li>
						<Button to='/' className="link">
							<Icon type='alarm-danger' />
							<span className='txt'>AI 위험 알림 관리</span>
						</Button>
					</li>
				</ul>
				<ul className='menu-list'>
					<li>
						<Button to='/' className="link">
							<Icon type='menu-home' />
							<span className='txt'>원 정보</span>
						</Button>
					</li>
					<li>
						<Button to='/' className="link">
							<Icon type='menu-teacher' />
							<span className='txt'>선생님 정보</span>
						</Button>
					</li>
					<li>
						<Button to='/' className="link">
							<Icon type='menu-class' />
							<span className='txt'>반 정보</span>
						</Button>
					</li>
					<li>
						<Button to='/' className="link">
							<Icon type='menu-child' />
							<span className='txt'>원아 정보</span>
						</Button>
					</li>
					<li>
						<Button as='a' to='/publish/tag/main' className="link">
							<Icon type='menu-attend' />
							<span className='txt'>전자출결 정보</span>
						</Button>
					</li>
					<li>
						<Button to='/' className="link">
							<Icon type='menu-privacy' />
							<span className='txt'>개인정보 관리</span>
						</Button>
					</li>
					<li className='line-t bg'>
						<Button to='/' className="link">
							<Icon type='menu-cloud' />
							<span className='txt'>클라우드 이미지 관리</span>
						</Button>
					</li>
				</ul>
			</div>
		</Gnb>
	)
}

export default _
