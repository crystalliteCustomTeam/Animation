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

    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: false,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <>
            <section className='bg-[#F3F3F3] relative partners '>
                <div className="px-2 mx-auto ">
                    
                    <Slider {...testiSlider} className="partnerSlider">
                        {tabInfo.map((item, index) => (
                            <div className='mx-[45px] px-[15px]'>
                                <Image src={item.image} alt='Partners' className='img-fluid w-[100%] md:w-[80%] mx-auto px-5' />
                            </div>
                        ))}
                    </Slider>
                    
                </div>
            </section>
        </>
    )
}

export default partners

