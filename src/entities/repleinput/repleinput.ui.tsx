import { globalStore } from '@/shared'
import { useEffect } from 'react'
import { RepleInput } from './repleinput.style'

const _ = ({ children }: any) => {
	const { setFooter } = globalStore()
	useEffect(() => {
		setFooter({
			fixed: true,
			reple: true,
		})
	}, [])

	const wrap = document.querySelector('.wrap') as HTMLDivElement
	if (wrap) wrap.classList.add('has-reple')

	return <RepleInput className='reple-input-wrap'>{children}</RepleInput>
}

export default _
