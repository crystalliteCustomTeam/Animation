"use client"
import React from "react";
import Image from "next/image";
// Import Images
import icon1 from "media/animating-studio/BadgeSlider-1.svg";
import icon2 from "media/animating-studio/BadgeSlider-2.svg";
import icon3 from "media/animating-studio/BadgeSlider-3.svg";
import icon4 from "media/animating-studio/BadgeSlider-4.svg";
import icon5 from "media/animating-studio/BadgeSlider-5.svg";
import icon6 from "media/animating-studio/BadgeSlider-6.svg";
// Import Slider
import { AutoScroll } from '@/components/sliders';

const BadgeSlider = () => {
    return (
        <section className='pt-[40px] pb-[20px] md:py-[50px] packages'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-6 lg:max-w-7xl mx-auto">
                    <div className="col-span-12 md:mb-[30px]">

                        <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>An <span className="text-[#A70A0E]">Award-Winning</span> Video Animation Company</h2>
                        <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>At Infinity Animations, we create powerful video animations that elevate your brand. Our dedication to <br className='hidden lg:block' /> excellence has earned us numerous awards and accolades, including: </p>
                    </div>
                </div>
                <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                    {
                        [icon1, icon2, icon3, icon4, icon5, icon6, icon1, icon2, icon3, icon4, icon5, icon6].map((e, i) => (
                            <div key={i} className="shrink-0 grow-0 basis-1/5 mx-auto">
                                <Image src={e} alt="logo" className='max-h-[90px] ' />
                            </div>
                        ))
                    }
                </AutoScroll>
            </div>
        </section>
    )
}

export default BadgeSlider
