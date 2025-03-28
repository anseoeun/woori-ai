import { Img, Button } from '@/entities'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import PhotoView from './photoview.style'
import 'swiper/css/navigation';

const _ = ({ open, close, src }: any) => {
	return (
		<PhotoView className={'photo-view ' + (open ? 'on' : '')}>
      <Button className='close' onClick={close}></Button>
      { Array.isArray(src) ? 
      <Swiper
        modules={[Navigation]}
        spaceBetween={0} slidesPerView={1} navigation>
          {src.map((image: any, index: any) => (
						<SwiperSlide key={index}>
							<div className='img'>
								<Img src={image} alt={`${image}-${index}`} />
							</div>
						</SwiperSlide>
					))}
        </Swiper>
      :   
      <div className='img'>
        <Img src={src} alt='' />
      </div>
      }
    </PhotoView>
	)
}

export default _
