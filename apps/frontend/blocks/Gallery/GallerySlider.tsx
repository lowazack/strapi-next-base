"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import StrapiImage from '../../components/StrapiImage/StrapiImage';

import styles from "./Gallery.module.scss"

export default function GallerySlider({slides}){

    return (
        <Swiper draggable>
            {slides.map((slide, index)=> (
                <SwiperSlide key={`slider-${index}`} >
                    {/* <StrapiImage alt={slide.attributes.alternativeText} src={slide.attributes.url} className={styles.slideImg}/> */}
                    <div>asdfsadf</div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}