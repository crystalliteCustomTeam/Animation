"use client"
import React from "react";
import Image from "next/image";
// Import Images
import icon1 from "media/icons/banner-logo-1.png";
import icon2 from "media/icons/banner-logo-2.png";
import icon3 from "media/icons/banner-logo-3.png";
import icon4 from "media/icons/banner-logo-4.png";
import icon5 from "media/icons/banner-logo-5.png";
import icon6 from "media/icons/banner-logo-6.png";
import icon7 from "media/icons/banner-logo-7.png";
import icon8 from "media/icons/banner-logo-8.png";
import icon9 from "media/icons/banner-logo-9.png";
import icon10 from "media/icons/banner-logo-10.png";
import icon11 from "media/icons/banner-logo-11.png";

// Import Slider
import { AutoScroll } from '@/components/sliders';

const BadgeSlider = () => {
    return (
        <>
            <section className='py-[15px]'>
                <div className="container">
                    <div className='w-full text-center'>
                        <h2 className="text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-bold font-sans leading-tight text-black my-2">
                            An Award-winning Video Animation Company
                        </h2>
                        <p className="text-black w-full md:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                            At Infinity Animations, we create powerful video animations that elevate your brand. Our dedication to excellence <br /> has earned us numerous awards and accolades, including:
                        </p>
                    </div>
                </div>
            </section>
            <section className='py-[25px] bg-[#00C6F9]'>
                <div className="container">
                    <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                        {
                            [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11].map((e, i) => (
                                <div key={i} className="shrink-0 grow-0 basis-1/6 mr-5">
                                    <Image src={e} alt="logo" className='w-[50%]' />
                                </div>
                            ))
                        }
                    </AutoScroll>
                </div>
            </section>
        </>
    )
}

export default BadgeSlider
