import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
// ==== Images
import Partners1 from 'media/infinity-studio/partner1.png'
import Partners2 from 'media/infinity-studio/partner2.png'
import Partners3 from 'media/infinity-studio/partner3.png'
import Partners4 from 'media/infinity-studio/partner4.png'
import Partners5 from 'media/infinity-studio/partner5.png'
import Partners6 from 'media/infinity-studio/partner6.png'
import Partners7 from 'media/infinity-studio/partner7.png'
// import Slider
import { register } from 'swiper/element/bundle'

register();

const tabInfo = [
    { image: Partners1 },
    { image: Partners2 },
    { image: Partners3 },
    { image: Partners4 },
    { image: Partners5 },
    { image: Partners6 },
    { image: Partners7 },
];

const partners = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            loop: 'true',
            speed: 400,
            pagination: "false",
            freeMode: true,
            grabCursor: true,
            slidesPerView: 6,
            spaceBetween: "20",
            autoplay: {
                delay: 1500,
                disableOnInteraction: "false",
                stopOnLastSlide: 'false'
            },
            breakpoints: {
                270:{
                    slidesPerView: "1",
                },
                400:{
                    slidesPerView: "2",
                },
                640: {
                    slidesPerView: "3",
                },
                768: {
                    slidesPerView: "3",
                },
                1024: {
                    slidesPerView: "4",
                },
                1300: {
                    slidesPerView: "6",
                },

            }

        };
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    // 'sm': '640px',
    //     'md': '768px',
    //     'lg': '1024px', 
    //     'xl': '1300px',

    return (
        <>
            <section className='bg-white shadow-lg relative partners py-6'>
                <div className="px-2 mx-auto ">
                    <swiper-container ref={swiperRef} init="false" >
                        {
                            tabInfo && tabInfo.map((item, index) => (
                                <>
                                    <swiper-slide key={index}>
                                        <div className='w-[200px] mx-auto'>
                                            <Image src={item.image} alt='Partners' className='img-fluid ' />
                                        </div>
                                    </swiper-slide>
                                </>
                            ))
                        }
                        <swiper-pagination className="hidden"></swiper-pagination>
                    </swiper-container>
                </div>
            </section>
        </>
    )
}

export default partners
