import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Mission from './Mission.jsx'
import './Slider.css'

export default function Slider() {
  return (
     <div className="s-container">
        <Swiper
        modules={ [Pagination, Navigation] }
        className='mySwiper'
        navigation={true}
        loopFillGroupWithBlank={true}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
        >
            {Mission.map((slide, i) => (
                <SwiperSlide>
                    <div className='left-s'>
                        <div className='name'>
                            <span>{slide.name}</span>
                            <span>{slide.details}</span>
                        </div>
                    </div>
                    <img src={slide.img} alt='mission' className='img-m' />
                </SwiperSlide>
            ))}
    
        </Swiper>
     </div>
  )
}
