import { proxySrcComm } from '@/shared'
import { formatBytes } from '@/shared/utils/ui'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../button'
import Img from '../img'
import { UploadPhotos } from './uploadphotos.style'

const _ = ({ title, photos, photosOrg, max, total, onChange, setRemoveFiles }: any) => {
	// TODO: formData file array 보내도 등록이 안됨
	const [previewImg, setPreviewImg] = useState<any>([])
	const [previewImgOrg, setPreviewImgOrg] = useState<any>([])
	const ref = useRef(null)

	useEffect(() => {
		setPreviewImg(
			photos.map((v: any) => {
				const reader = new FileReader()
				reader.readAsDataURL(v)
				reader.onload = () => {
					return reader.result
				}
			})
		)
	}, [])

	useEffect(() => {
		if (previewImg.length > photos.length) {
			setPreviewImg(
				photos.map((v: any) => {
					const reader = new FileReader()
					reader.readAsDataURL(v)
					reader.onload = () => {
						return reader.result
					}
				})
			)
		}
	}, [photos])

	useEffect(() => {
		setPreviewImgOrg(photosOrg || [])
	}, [photosOrg])

	const handleAddImages = (event: any) => {
		let imageLists = event.target.files
		let selectedPhotoNum = imageLists.length + previewImg.length + previewImgOrg.length

		if (total && selectedPhotoNum > total) {
			alert(`최대 ${total}개까지 업로드 가능합니다.`)
			return
		}

		for (const element of imageLists) {
			if (element.size <= max) {
				onChange((prev: any) => [...prev, element])
				const reader = new FileReader()
				reader.readAsDataURL(element)
				reader.onload = () => {
					setPreviewImg((prev: any) => [...prev, reader.result])
				}
			} else {
				alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			}
		}
	}

	const handleDeleteImage = (id: any) => {
		onChange(Array.from(photos).filter((_: any, index: number) => index !== id))
		setPreviewImg(previewImg.filter((_: any, index: any) => index !== id))
	}

	const handleDeleteImageOrg = (id: any) => {
		setPreviewImgOrg((prev: any) => prev.filter((v: any) => v.fileId !== id))
		setRemoveFiles((prev: number[]) => [...prev, id])
	}
	return (
		<UploadPhotos className='photo-upload-list'>
			{title ? <b className='tit'>{ title }</b> : null}
			<div className='img-wrap'>
				<label className='upload' htmlFor='photos' onChange={handleAddImages}>
					<input ref={ref} type='file' accept='.png, .jpeg, .jpg' multiple />
				</label>
				<div className='img'>
					{total ? <span>
						<em>{previewImg.length + previewImgOrg.length}</em>/{total}
					</span> : null}
				</div>
			</div>

			<div className='photo-list'>
				<Swiper spaceBetween={0} slidesPerView={'auto'}>
					{previewImgOrg.map((image: any, id: any) => (
						<SwiperSlide key={id}>
							<Button className='btn-del' onClick={() => handleDeleteImageOrg(image.fileId)} />
							<div className='img'>
								<Img src={proxySrcComm(image.fileDownloadId)} alt={`${image}-${id}`} />
							</div>
						</SwiperSlide>
					))}
					{previewImg.map((image: any, id: any) => (
						<SwiperSlide key={id}>
							<Button className='btn-del' onClick={() => handleDeleteImage(id)} />
							<div className='img'>
								<Img src={image} alt={`${image}-${id}`} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</UploadPhotos>
	)
}

export default _
