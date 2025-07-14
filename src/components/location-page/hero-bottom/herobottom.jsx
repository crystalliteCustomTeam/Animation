"use client"
import Image from "next/image"
// Import Images
import icon1 from "media/location-page/hero-bottom/1.png";
import icon2 from "media/location-page/hero-bottom/2.png";
import icon3 from "media/location-page/hero-bottom/3.png";
import icon4 from "media/location-page/hero-bottom/4.png";
// Import Slider
import { AutoScroll } from '@/components/sliders';
import Review from "@/components/review/Review";

const HeroBottom = ({ content }) => {
    return (
        <>
            <Review />
        </>
    )
}

export default HeroBottom