import { Button } from '@/entities'

const _ = ({ data, setFunc }: any) => {
	return (
		<Button className='btn-select' onClick={() => setFunc(true)}>
			<span>{data.name}</span>
			<em>({data.total})</em>
		</Button>
	)
}

export default _
