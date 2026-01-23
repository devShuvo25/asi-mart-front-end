
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// Swiper modules
import { Autoplay } from 'swiper/modules'
import { sliders } from '@/constant/slider'
import Image from 'next/image'

// Swiper core type


export default function SwiperSlider() {
  return (
    <div className='ps-20'>
              <Swiper
        slidesPerView={3}
        centeredSlides
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        modules={[ Autoplay]}
        className="mySwiper "
      >
        {sliders.map(slider => <SwiperSlide key={slider.id}><Image src={slider.cover} alt='' height={100} width={300} className='rounded-2xl'></Image></SwiperSlide> )}

      </Swiper>
    </div>
  )
}
