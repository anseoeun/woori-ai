
const _ = ({ src }: any) => {
	const prefix = src.includes('images') ? process.env.PUBLIC_URL : '';
	const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		(e.target as HTMLInputElement).src = '/images/no-image.svg'
	}

	return (
		<img src={prefix + src} alt="" width={100} height={100} onError={onError} />
	)
}

export default _
