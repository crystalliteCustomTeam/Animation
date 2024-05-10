import React from 'react';
import Script from 'next/script';
// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
import Features from "@/components/features/Features";
import Partners from "@/components/partners/Partners";
// Import Images
import LookingFlodImg from "media/why-us/history-img.gif";
//==== Testimonial Images
import icon2 from "media/icons/stars.png"
import EddLockWood from "media/thumbnails/Edd-Lockwood.jpg";
import Emily from "media/thumbnails/emily.jpg";
import Mathew from "media/thumbnails/mathew.jpg";
import Helen from "media/thumbnails/helen.jpg";
import Gary from "media/thumbnails/gary.jpg";
import Sylvia from "media/thumbnails/sylvia.jpg";
import Matt from "media/thumbnails/matt.jpg";

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> The Best on All Counts! </>),
        para: "The excellence of execution.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Our dedication to client satisfaction goes beyond delivering animations – it involves crafting experiences. We understand the power of storytelling, integrate audio elements with mastery, and add the artistic touch to every project for that extra shine.",
    ];
    const looking = {
        title: (<> From the Vault </>),
        para: { paraArray },
        isCTA: true,
        isBtns: true,
        flodImg: LookingFlodImg
    };
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Are you ready to take the animation route? Call us now!"
    }
    //=====Testimonial Fold=====//
     const testiContent = [
        {
            stars: icon2,
            name: 'Edd Lockwood',
            video: "https://youtu.be/1ab6famvBmE?si=lWPOQck-AXmKdBfe",
            thumbnail: EddLockWood,
        },
        {
            stars: icon2,
            name: 'Emily Margolis',
            video: "https://youtu.be/NfhGVS6thtM?si=qKGBKPRdLj_8onVy",
            thumbnail: Emily,
        },
        {
            stars: icon2,
            name: 'Mathew',
            video: "https://youtu.be/elOXjok2nWU?si=YoauMkUQvublB-V5",
            thumbnail: Mathew,
        },
        {
            stars: icon2,
            name: 'Helen Brooks',
            video: "https://youtu.be/e5GWTWd4k7U?si=OXc3_K1kpo7OxOQE",
            thumbnail: Helen,
        },
        {
            stars: icon2,
            name: 'Gary Wilson',
            video: "https://youtu.be/gQt3RKFwaqQ?si=jGBKle6DJhd1Lvdn",
            thumbnail: Gary,
        },
        {
            stars: icon2,
            name: 'Sylvia David',
            video: "https://youtu.be/UU3BQAt7hlg?si=jiE_E2Hci-xeq1GQ",
            thumbnail: Sylvia,
        },
        {
            stars: icon2,
            name: 'Matt Evans',
            video: "https://youtu.be/8c0pcN-OQGI?si=3i-Td6-MD9gwl3FZ",
            thumbnail: Matt,
        },
        {
            stars: icon2,
            name: 'Michael Gardner',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
        },
        {
            stars: icon2,
            name: 'Sarah',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
        },
        {
            stars: icon2,
            name: 'John',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
        },
    ];
    const testimonial = {
        title: (<> The Ultimate Collection Of <br /> Our Incredible Customer Experiences </>),
        para: (<> Achieved 1000+ Impactful Results That Speak Volumes </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };
    return (
        <>

            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Features />
            <Partners />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": "Why Choose Us | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner-bg.c320cad2.png",
                        "description": "Learn more about the passionate team driving innovation, precision, and storytelling mastery in every animated frame. Contact Us Now!",
                        "brand": {
                            "@type": "Brand",
                            "name": "Infinity Animations"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "ratingCount": "1174"
                        }
                    }
                `}
            </Script>
        </>
    )
}


