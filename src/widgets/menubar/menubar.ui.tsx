import { useEffect } from 'react'
import { globalStore } from '@/shared'
import { Button, Icon } from '@/entities'
import FooterInfo from '../footerinfo'
import { Menubar } from './menubar.style'

const _ = ({ menu }: any) => {
	const { setMenubar } = globalStore()
	useEffect(() => {
		setMenubar({ fixed: true})
	}, [])

	const wrap = document.querySelector('.wrap') as HTMLDivElement
	if(wrap) wrap.classList.add('has-menubar')

	const menuOn = (name: any) => {
		return menu === name ? 'on' : ''
	}

	const notiNew = true
	const albumNew = true

	return (
		<>
		<FooterInfo />
		<Menubar className='menu-bar'>
			<ul>
				<li className={menuOn('home')}>
					<Button to='/' className="link">
						<span className='icon'>
							<Icon type='gnb-home' />
						</span>
						<span className='txt'>홈</span>
					</Button>
				</li>
				<li className={menuOn('noti')}>
					<Button to='/' className="link">
						<span className={`icon ` + (notiNew ? 'new' : null)}>
							<Icon type='gnb-noti' />
						</span>
						<span className='txt'>공지</span>
					</Button>
				</li>
				<li className={menuOn('alarm')}>
					<Button to='/' className="link">
						<span className='icon'>
							<Icon type='gnb-alarm' />
						</span>
						<span className='txt'>알림</span>
					</Button>
				</li>
				<li className={menuOn('album')}>
					<Button to='/' className="link">
						<span className={`icon ` + (albumNew ? 'new' : null)}>
							<Icon type='gnb-album' />
						</span>
						<span className='txt'>앨범</span>
					</Button>
				</li>
				<li className={menuOn('attend')}>
					<Button to='/' className="link">
						<span className='icon'>
							<Icon type='gnb-attend' />
						</span>
						<span className='txt'>출결</span>
					</Button>
				</li>
			</ul>
		</Menubar>
		</>
	)
}

export default _
