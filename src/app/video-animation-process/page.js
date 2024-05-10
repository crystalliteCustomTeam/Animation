import React from 'react';
import Script from 'next/script';
// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import StoryLine from '@/components/storyline/StoryLine';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== StoryLine Images
import StoryLine1 from "media/storyline/storyLine11.png";
import StoryLine2 from "media/storyline/storyLine12.png";
import StoryLine3 from "media/storyline/storyLine13.png";
import StoryLine4 from "media/storyline/storyLine14.png";
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
        title: (<> Journey to Brilliance with Guaranteed Results </>),
        para: "Animation Creation Unpacked!",
        btnBg: "bg-prime",
    };
    //=====StoryLine Fold=====//
    const accordionData = [
        {
            question: 'Strategic Storytelling',
            answer: "Begin with a strategic approach to storytelling, ensuring that every animation project has a compelling narrative foundation that resonates with your audience.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Audio Excellence',
            answer: "Elevate the storytelling experience with audio mastery. Our team meticulously selects and integrates sound elements to enhance emotional connections and create a truly immersive experience.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Dynamic Animation',
            answer: "Infuse life into your story with dynamic animations. From 2D to 3D, our animation expertise brings characters, scenes, and concepts to vibrant existence, captivating your audience with visually stunning sequences.",
            StoryLineImg: StoryLine3
        },
        {
            question: 'The Midas Touch',
            answer: "Add the final touch of brilliance with our Midas Touch – a meticulous polish and refinement process that ensures your animation shines with perfection. Every detail is scrutinized to deliver an animated masterpiece that exceeds expectations.",
            StoryLineImg: StoryLine4
        },
    ];
    const storyLine = {
        accordionData: accordionData
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
            <StoryLine content={storyLine} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": "Video Animation Creation Process | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner-bg.8ff46426.gif",
                        "description": "Step into the behind-the-scenes magic – explore our animation creation process page. From ideation to final delivery, witness the journey of visual tales.",
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