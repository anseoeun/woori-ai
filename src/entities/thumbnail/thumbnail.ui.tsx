import { formatBytes } from '@/shared/utils/ui'
import Img from '../img'
import { Thumbnail } from './thumbnail.style'
import Button from '../button'

const _ = ({ thumb, max, setThumb, setFile }: any) => {
	const handleAddImages = (event: any) => {
		const img = event.target.files[0]
		if(setFile) setFile(img)

		if (img.size > max) {
			alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			event.target.value = ''
			return
		}

		const reader = new FileReader()
		reader.readAsDataURL(img)
		reader.onload = () => {
			setThumb(reader.result)
			event.target.value = ''
		}
	}
	const handleDeleteImage = (id: any) => {
		setThumb('')
		if(setFile) setFile(null)
	}
	return (
		<Thumbnail className='thumbnail'>
			<div className='img-wrap'>
				<label className='upload' htmlFor='photo'>
					<input type='file' id='photo' name='photo' accept='.png, .jpeg, .jpg' onChange={handleAddImages} />
				</label>
				<div className='img'>{thumb ? <Img src={thumb} alt='이미지 업로드' /> : null}</div>
				<Button className='btn-del' onClick={handleDeleteImage} />
			</div>
		</Thumbnail>
	)
}

export default _
