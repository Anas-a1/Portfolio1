import React from 'react'
import './testimonials.css'
import Me from '../../assects/aboutme.png'

import {Pagination} from 'swiper'

import { Swiper , SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Me,
    name: 'Anas',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam exercitationem minima rerum architecto tempora quasi iusto repudiandae facere natus commodi Adipisci laudantium ullam beatae laboriosam officiis tempora quia ducimus Fugit'
  },
  {
    avatar: Me,
    name: 'Riaz',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam exercitationem minima rerum architecto tempora quasi iusto repudiandae facere natus commodi Adipisci laudantium ullam beatae laboriosam officiis tempora quia ducimus Fugit'
  },
  {
    avatar: Me,
    name: 'Ali',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam exercitationem minima rerum architecto tempora quasi iusto repudiandae facere natus commodi Adipisci laudantium ullam beatae laboriosam officiis tempora quia ducimus Fugit'
  },
  {
    avatar: Me,
    name: 'Zain',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam exercitationem minima rerum architecto tempora quasi iusto repudiandae facere natus commodi Adipisci laudantium ullam beatae laboriosam officiis tempora quia ducimus Fugit'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
         
       >
      {
        data.map(({avatar , name , review}, index)=>{
          return (
            <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <img src={avatar}  />
            </div>
            <h5 className='client__name'>{name} </h5>
               <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials