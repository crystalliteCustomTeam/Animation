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

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Slider
// import { register } from 'swiper/element/bundle'

// register();

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
    // const swiperRef = useRef(null);

    // useEffect(() => {
    //     const swiperContainer = swiperRef.current;
    //     const params = {
    //         loop: 'true',
    //         speed: 400,
    //         pagination: "false",
    //         freeMode: true,
    //         grabCursor: true,
    //         slidesPerView: 6,
    //         spaceBetween: 20,
    //         autoplay: {
    //             delay: 1500,
    //             disableOnInteraction: "false",
    //             stopOnLastSlide: 'false'
    //         },
    //         breakpoints: {
    //             640: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 20,
    //             },
    //             768: {
    //                 slidesPerView: 4,
    //                 spaceBetween: 40,
    //             },
    //             1024: {
    //                 slidesPerView: 5,
    //                 spaceBetween: 50,
    //             },
    //         }

    //     };
    //     Object.assign(swiperContainer, params);
    //     swiperContainer.initialize();
    // }, []);

    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        
        className: "center",
        responsive: [

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

        ],
    };

    return (
        <>
            <section className='bg-[#F3F3F3] relative partners py-5'>
                <div className="px-2 mx-auto ">
                    {/* <swiper-container className="infinityPartnersSlider" ref={swiperRef} init="false" >
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
                    </swiper-container> */}
                    <Slider {...testiSlider} className="flex items-center">
                        {tabInfo.map((item, index) => (
                            <div className='mx-[45px] px-[15px]'>
                                <Image src={item.image} alt='Partners' className='img-fluid min-h-[45px] px-5' />
                            </div>
                        ))}
                    </Slider>
                    {/* <Slider {...testiSlider} class="flex items-stretch">
                        {tabInfo.map((item, index) => (
                            <div className='mx-[45px] px-[15px] border self-auto '>
                                <Image src={item.image} alt='Partners' className='img-fluid max-h-[55px] px-5' />
                            </div>
                        ))}
                    </Slider> */}
                </div>
            </section>
        </>
    )
}

export default partners
