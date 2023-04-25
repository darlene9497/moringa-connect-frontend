import React from 'react'
import './Stories.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import StoriesData from '../../data/stories'

export default function Stories() {
  return (
    <div className='stories'>
        <div className='reviews'>Alumni testimonials</div>

        <div className='carousel'>
          <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className='tCarousel'
          >
            {
              StoriesData.map((story, i) => (
                <SwiperSlide>
                  <div className='story'>
                    <img src={story.image} alt='' />
                    <span>{story.comment}</span>
                    <hr />
                    <span>{story.name}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </div>
  )
}
