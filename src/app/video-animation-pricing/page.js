import React from 'react';
import Script from 'next/script';
// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Pricing from "@/components/pricing/Pricing";
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== Testimonial Images
import icon2 from "media/icons/stars.png"
import Mathew from "media/thumbnails/mathew.jpg";
import Gary from "media/thumbnails/gary.jpg";
import Matt from "media/thumbnails/matt.jpg";

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Pricing Plans Tailored to Bring Your Ideas to Life </>),
        para: "The perfect animation solution with our transparent and flexible pricing plans.",
        btnBg: "bg-prime",
    };
    //=====Pricing Fold=====//
    const pricing = {
        title: (<> Pricing Plans </>),
        para: (<> Easy on the pocket and the eyes. </>),
    };
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Are you ready to take the animation route? Call us now!",
        bgPrime: true,
    }
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            stars: icon2,
            name: 'Mathew',
            video: "https://youtu.be/elOXjok2nWU?si=YoauMkUQvublB-V5",
            thumbnail: Mathew,
        },
        {
            stars: icon2,
            name: 'Gary Wilson',
            video: "https://youtu.be/gQt3RKFwaqQ?si=jGBKle6DJhd1Lvdn",
            thumbnail: Gary,
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
            <Pricing content={pricing} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": " Video Animation Pricing | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner-bg.fefdb565.gif",
                        "description": "Explore our straightforward pricing page to find the perfect animation solution for your needs. Our transparent pricing ensures clarity and flexibility.",
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