'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Shirt } from "../Shirt";
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from "./style.module.css"
import Stripe from 'stripe';

export interface TypeProducts{

    dataProducts:{
        id: string,
        name: string,
        imageUrl: string,
        description: string | null,
        price: Stripe.Price,
    }[]
}

export default function Carousel({dataProducts}:TypeProducts) {

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

            {
                dataProducts.map((product)=>{
                    return(
                        <SwiperSlide key={product.id}>
                            <Shirt product={product}/>
                        </SwiperSlide>
                    );
                })
            }
            

        </Swiper>

    )
}
