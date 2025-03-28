import { Header } from './header.style'
import { Button, Icon } from '@/entities'
import { useState } from 'react'

const _ = () => {
	const gnbOpen = (): void => {
		document.documentElement.scrollTop = 0;
		setTimeout(function(){
			document.body.classList.add('open-gnb');
		}, 300);
		;(document.querySelector('.outer-wrap') as any).classList.add('open-gnb')
		;(document.querySelector('.gnb-wrap') as any).style.display = 'block'
		;(document.querySelector('.gnb-wrap .gnb-content') as any).scrollTop = 0

		const gnbWrap: any = document.querySelector('.gnb-wrap')
		gnbWrap.style.transition = 'right 300ms ease-in-out'
		gnbWrap.style.right = '0'
	}

	const [type, setType] = useState('type1');

	return (
		<Header className='header header-main'>
			{type == 'type1' ? <h1 className="logo"></h1>
			 :<h1 className='name'>
				<Icon type='home' />
				<span>세명어린이집</span>
			</h1>
			}
			<div className='menu'>
				<Button className='btn-menu' onClick={gnbOpen}>
					<Icon type='menu' />
				</Button>
			</div>
		</Header>
	)
}

export default _
