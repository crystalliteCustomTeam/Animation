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
// Import Slider
import { AutoScroll } from '@/components/sliders';

const Review = () => {
    return (
        <>
            <section className="flex items-center justify-center sm:pt-3 sm:pb-2 md:mb-0 lg:pb-10 mt-[30px] sm:mt-[80px] md:mt-[50px] lg:mt-0">
                <AutoScroll wrapperClass="mt-2 lg:mt-5 mb-10 lg:mb-0" options={{ loop: true, align: "start" }}>
                                {
                                    [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon1, icon2, icon3, icon4, icon5, icon6, icon7].map((e, i) => (
                                        <div key={i} className="shrink-0 grow-0 basis-1/3 md:basis-1/6 mr-2">
                                            <Image src={e} alt="logo" className='w-[90%] sm:w-[70%]' />
                                        </div>
                                    ))
                                }
                            </AutoScroll>
            </section>
        </>
    )
}

export default Review
