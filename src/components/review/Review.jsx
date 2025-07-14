"use client"
import Image from "next/image";
// Import Images
import trustPlatforms from "media/icons/partners.png";
// Import Images
import icon1 from "media/icons/Logos/1.png";
import icon2 from "media/icons/Logos/2.png";
import icon3 from "media/icons/Logos/3.png";
import icon4 from "media/icons/Logos/4.png";
import icon5 from "media/icons/Logos/5.png";
import icon6 from "media/icons/Logos/6.png";
import icon7 from "media/icons/Logos/7.png";
import icon8 from "media/icons/Logos/8.png";
import icon9 from "media/icons/Logos/9.png";
import icon10 from "media/icons/Logos/10.png";
import icon11 from "media/icons/Logos/11.png";
import icon12 from "media/icons/Logos/12.png";
import icon13 from "media/icons/Logos/13.png";
import icon14 from "media/icons/Logos/14.png";
import icon15 from "media/icons/Logos/15.png";
import icon16 from "media/icons/Logos/16.png";

// Import Slider
import { AutoScroll } from '@/components/sliders';

const Review = () => {
    return (
        <>
            <section className="bg-white flex items-center justify-center sm:pt-3 sm:pb-2 md:mb-0 lg:pb-3 mt-[30px] sm:mt-[80px] md:mt-[50px] lg:mt-0">
                <AutoScroll wrapperClass=" mb-5 lg:mb-0" options={{ loop: true, align: "start" }}>
                    {
                        [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8,icon9,icon10,icon11,icon12,icon13,icon14,icon15,icon16 ].map((e, i) => (
                            <div key={i} className="shrink-0 grow-0 basis-1/3 md:basis-1/6 mr-2">
                                <Image src={e} alt="logo" className='w-[90%] sm:w-[80%]' />
                            </div>
                        ))
                    }
                </AutoScroll>
            </section>
        </>
    )
}

export default Review
