import React from 'react'
import Hero from '../../assets/testimonialHero.png'
import css from './Testimonials-module.css'
import { TestimonialsData } from "../../data/testimonials";

import {Swiper, SwiperSlide} from "swiper/react";
const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="wrapper_w">
            <div className="container_t">
            <span>Top Rated</span>
            <span>
                Seedily say suitable disposal and boy. Exercise joy man children rejoiced.
            </span>
            </div>
        

        <img src={Hero} alt="" />
        <div className="container_t">
            <span>
                100k
            </span>
            <span>
                Happy Customers with us
            </span>
        </div>
        </div>


         <div className="reviews">Review</div>
        
        <div className="carousel">
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className="tCarousel"
            breakpoints={{
                856: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }

            }}
            >
                {
                    TestimonialsData.map((testimonial, i)=> (
                        <SwiperSlide>
                            <div className="testimonial_n">
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials
