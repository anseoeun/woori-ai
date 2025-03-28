'use client'

import { Button, useToast } from '@/entities'

const TestToast = () => {
	const { toast } = useToast()

	return (
		<div>
			<Button className='btn-type1 st1' onClick={() => toast('이미 사용하고 있는 아이디입니다.\n새로운 아이디를 입력해주세요.')}>
				토스트보기
			</Button>
			<Button className='btn-type1 st1' onClick={() => toast('이미 사용하고 있는 아이디입니다.')}>
				토스트보기2
			</Button>
		</div>
	)
}

export default TestToast
