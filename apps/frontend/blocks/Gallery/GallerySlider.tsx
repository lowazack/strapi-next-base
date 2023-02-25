"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import StrapiImage from '../../components/StrapiImage/StrapiImage';
import { Autoplay } from "swiper";


import styles from "./Gallery.module.scss"

export default function GallerySlider({slides}){

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            draggable
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

        >
            {slides.map((slide, index)=> (
                <SwiperSlide key={`slider-${index}`} >
                    <div className={styles.slide}>
                        <StrapiImage alt={slide.attributes.alternativeText} src={slide.attributes.url} className={styles.slideImg}/>
                    </div>
                    
                </SwiperSlide>
            ))}
        </Swiper>
    )
}