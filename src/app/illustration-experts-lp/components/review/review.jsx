import Image from 'next/image'
import React, { useEffect, useState } from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ===== CSS
import styles from './review.module.css'
// ===== Images
import Assets from "media/illustration-experts/testi-img.png"
import Quote from "media/illustration-experts/quote.png"
// import chatIcon from "media/illustration-experts/banner-side-img.svg"
import { FaStar } from "react-icons/fa6";

import Slider from "react-slick";


export default function Review() {

    const { popup, togglePopup } = usePopup();
    const [renderCount, setRenderCount] = useState(0);

    const popupHandle = () => {
        togglePopup(popup);
    };

    useEffect(() => {
        // Update the render count when the component mounts
        setRenderCount(prevCount => prevCount + 1);
    }, []);


    const ReviewSLider = [
        {
            title: "Jessica M.",
            comment: `They once again proved to be the best illustration designers. I am genuinely delighted by their
            fantastic work. Their entire process was swift and smooth. 
                    `,
        },
        {
            title: "Katherine W.",
            comment: `A fantastic team of highly experienced illustrators and graphic designers. They suggested
            exciting new ideas for my illustrations. I personally recommend them for illustration.
                    `,
        },
        {
            title: "Alex Bold",
            comment: `They have a sensible and streamlined work process. My experience was quite well, even though I
            can be very picky when it comes to my business. But they created some amazing designs, no doubt.
                    `,
        },
        {
            title: "Jennifer Albert",
            comment: `They once again proved to be the best illustration designers. I am genuinely delighted by their
            fantastic work. Their entire process was swift and smooth. 
                    `,
        },
    ]

    const settings = {
        vertical: true,
        verticalSwiping: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
        <section className='py-[30px] block md:hidden'>
            <div className="container mx-auto">

                <div className="grid grid-cols-12 gap-y-12 justify-content-center">
                    <div className="col-span-12 lg:col-span-6 flex justify-center hidden md:block">
                        <Image src={Assets} alt='banner-logos' className='object-contain mt-4' height={500} />

                    </div>
                    <div className="col-span-12 lg:col-span-6 content-center px-[15px]">
                        <div>

                            <Slider {...settings}>
                                {ReviewSLider.map((item, index) => (
                                    <div className="slider-container">
                                        <div key={index} className={`${styles.testiSideSlider}`}>
                                            <div 
                                            className={renderCount >= index ? "opacity-50"  : "shadow-xl rounded opacity-100" }
                                                 >
                                                <div className={styles.testiBoxTxt}>
                                                    <Image src={Quote} alt="banner-logos" className={styles.imgQuoteTestiSt} height={45} />
                                                    <h3 className="text-[#333333] montserrat text-[23px] font-[700]">{item.title}</h3>
                                                    <p className="text-[#333333] montserrat text-[14px]">
                                                        {item.comment}
                                                    </p>
                                                    <div className={`${styles.testiStr} `}>
                                                        <div className="flex justify-end">
                                                            {[...Array(5)].map((_, i) => (
                                                                <FaStar key={i} color="yellow" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                           
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
