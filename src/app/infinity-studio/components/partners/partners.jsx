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
];


const partners = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: {
                nextEl: `.swiper-button-next`,
                prevEl: `.swiper-button-prev`
            },
            loop: 'true',
            speed: 400,
            pagination: "false",
            slidesPerView: 'auto',
            freeMode: true,
            grabCursor: true,
            spaceBetween: "20",
            autoplay: {
                delay: 1500,
                disableOnInteraction: "false",
                stopOnLastSlide: 'false'
            },
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
                480: {
                    slidesPerView: "3",
                },
                780: {
                    slidesPerView: "5",
                },

            }

        };
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <>
            <section className='bg-white shadow-lg relative '>
                <div className="px-2 mx-auto ">
                    <swiper-container ref={swiperRef} init="false" >
                        {
                            tabInfo && tabInfo.map((item, index) => (
                                <>
                                    <swiper-slide key={index}>
                                        <div className='w-[200px] py-[25px]'>
                                            <Image src={item.image} alt='Partners' className='img-fluid ' />
                                        </div>
                                    </swiper-slide>
                                </>
                            ))
                        }
                        <swiper-pagination className="hidden"></swiper-pagination>
                    </swiper-container>
                    {/* <Image src={Partners} alt='Partners' className='w-full' />
                        <Image src={Partners} alt='Partners' className='w-full' />
                        <Image src={Partners} alt='Partners' className='w-full' />
                        <Image src={Partners} alt='Partners' className='w-full' />
                        <Image src={Partners} alt='Partners' className='w-full' />
                        <Image src={Partners} alt='Partners' className='w-full' />
                        <Image src={Partners} alt='Partners' className='w-full' /> */}
                </div>
            </section>
        </>
    )
}

export default partners
