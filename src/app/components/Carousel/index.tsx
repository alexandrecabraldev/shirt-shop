'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Shirt } from "../Shirt";
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from "./style.module.css"

export default function Carousel() {

    return (

        <Swiper 
        className={`${styles.swiperStyle}`}
        spaceBetween={100}
        slidesPerView={2}
        modules={[Navigation]}
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }}
        >
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />

            <SwiperSlide>
                <Shirt/>
            </SwiperSlide>

            <SwiperSlide>
                <Shirt/>
            </SwiperSlide>

            <SwiperSlide>
                <Shirt/>
            </SwiperSlide>

            <SwiperSlide>
                <Shirt/>
            </SwiperSlide>
        </Swiper>

    )
}
