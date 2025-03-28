import { formatBytes } from '@/shared/utils/ui'
import Button from '../button'
import Checkbox from '../checkbox'
import Img from '../img'
import { UploadPhotoAnalyze } from './uploadphotoanalyze.style'
import { useState, useRef, useEffect } from 'react'

const _ = ({ type, photos, max, total, onChange, openPop, trigger }: any) => {
	const fileInput = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (trigger && fileInput.current) fileInput.current.click()
	}, [trigger])

	let imageUrlLists = [...photos]

	const handleAddImages = (event: any) => {
		let imageLists = event.target.files
		let selectedPhotoNum = imageLists.length + imageUrlLists.length

		if (selectedPhotoNum > total) {
			alert(`최대 ${total}개까지 업로드 가능합니다.`)
			return
		}
		for (let i = 0; i < imageLists.length; i++) {
			if (imageLists[i].size <= max) {
				const reader = new FileReader()
				reader.readAsDataURL(imageLists[i])
				reader.onload = () => {
					imageUrlLists.push(reader.result)
					onChange(imageUrlLists)
				}
			} else {
				alert(`최대 ${formatBytes(max)}까지 업로드 가능합니다.`)
			}
		}
	}
	const handleDeleteImage = (id: any) => {
		onChange(photos.filter((_: any, index: any) => index !== id))
	}

	// 단일선택
	const [checkItems, setCheckItems] = useState<number[]>([])

	const handleSingleCheck = (checked: boolean, id: number): void => {
		if (checked) {
			setCheckItems(prev => [...prev, id])
		} else {
			setCheckItems(prev => prev.filter(el => el !== id))
		}
	}
	// 전체 선택
	const handleAllCheck = (checked: boolean): void => {
		if (checked) {
			const idArray: any[] = []
			photos.forEach((image: any) => idArray.push(image))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	return (
		<UploadPhotoAnalyze className='analyze-upload-list'>
			{type === 'st2' ? (
				<div className='menus'>
					<div className='left'>
						{/* <Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === imageUrlLists.length ? true : false}>전체선택</Checkbox> */}
						{checkItems.length !== imageUrlLists.length ? (
							<Button
								className='btn-selc total'
								onClick={() => {
									handleAllCheck(true)
								}}
							>
								전체선택
							</Button>
						) : (
							<Button
								onClick={() => {
									handleAllCheck(false)
								}}
								className='btn-selc total on'
							>
								전체선택
							</Button>
						)}
					</div>
					<div className='right'>
						<Button className={`btn-selc ` + (checkItems.length > 0 ? 'on' : '')} disabled={checkItems.length <= 0}>
							선택사진 삭제
						</Button>
					</div>
				</div>
			) : null}
			{type !== 'st2' ? <b className='tit'>사진첨부</b> : null}
			<div className={`img-wrap ` + (type === 'st2' ? 'hidden' : '')}>
				<label className='upload' htmlFor='photos'>
					<input type='file' multiple ref={fileInput} onChange={handleAddImages} />
				</label>
				<div className='img'>
					<span>
						<em>{imageUrlLists.length}</em>/{total}
					</span>
				</div>
			</div>
			<div className='analyze-photo'>
				<ul>
					{photos.map((image: any, id: any) => (
						<li key={id}>
							{type === 'st2' ? <Checkbox name={`check-img`} onChange={(e: any) => handleSingleCheck(e, image)} checked={checkItems.includes(image) ? true : false}></Checkbox> : null}
							<div className='photos'>
								<div className='thumb'>
									<Button className='btn-del' onClick={() => handleDeleteImage(id)} />
									<Img src={image} alt={`${image}-${id}`} />
								</div>
								<div className='child'>
									<div className='photo'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
										<Img src={'/images/temp/temp-profile.png'} alt='' />
										<Img src={'/images/temp/temp-profile.png'} alt='' />
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div>
									<span className='num'>
										<i className='ico-plus'></i>
										<span>15명</span>
									</span>
									<button className='btn-child-view' onClick={openPop[0]}></button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</UploadPhotoAnalyze>
	)
}

export default _
