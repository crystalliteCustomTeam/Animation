"use client"
import Image from "next/image"
// Import Images
import icon1 from "media/location-page/hero-bottom/1.png";
import icon2 from "media/location-page/hero-bottom/2.png";
import icon3 from "media/location-page/hero-bottom/3.png";
import icon4 from "media/location-page/hero-bottom/4.png";
// Import Slider
import { AutoScroll } from '@/components/sliders';

const HeroBottom = ({ content }) => {
    return (
        <>
            <section>
                <AutoScroll wrapperClass="bg-white py-5" options={{ loop: true, align: "start" }}>
                    {
                        [icon1, icon2, icon3, icon4, icon1, icon2, icon3, icon4, icon1, icon2, icon3, icon4].map((e, i) => (
                            <div key={i} className="shrink-0 grow-0 basis-auto mr-5">
                                <Image src={e} alt="logo" />
                            </div>
                        ))
                    }
                </AutoScroll>
            </section>
        </>
    )
}

export default HeroBottom