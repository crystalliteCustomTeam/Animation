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
// Import Slider
import { AutoScroll } from '@/components/sliders';

const BadgeSlider = () => {
    return (
        <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/price-bg.jpg")]'>
            <div className="container">
                <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                    {
                        [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7].map((e, i) => (
                            <div key={i} className="shrink-0 grow-0 basis-1/6 mr-5">
                                <Image src={e} alt="logo" className='w-[50%]' />
                            </div>
                        ))
                    }
                </AutoScroll>
            </div>
        </section>
    )
}

export default BadgeSlider
