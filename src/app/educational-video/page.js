// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Product from "@/components/product/Product";
import Company from '@/components/company/Company';
import Portfolio from '@/components/portfolio/Portfolio';
import BuzzFlick from "@/components/buzzflick/Buzzflick";
import Production from "@/components/productionprocess/Production";
import Testimonial from '@/components/testimonial/Testimonial';
import Faqs from "@/components/faqs/Faqs";
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/educational-video/looking-img.png";
import ProductImg from "media/educational-video/product-img.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/educational-video/boost-img.png";
// ==== Service Concept Images 
import FoldBg from 'media/images/fold-bg.png'
import conceptIcon1 from "media/icons/bizz1.png"
import conceptIcon2 from "media/icons/bizz2.png"
import conceptIcon3 from "media/icons/bizz3.png"
import conceptIcon4 from "media/icons/bizz4.png"
import conceptIcon5 from "media/icons/bizz5.png"
import conceptIcon6 from "media/icons/bizz6.png"
import conceptIcon7 from "media/icons/bizz7.png"
import conceptIcon8 from "media/icons/bizz8.png"
import conceptIcon9 from "media/icons/bizz9.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"
import checkIcon from 'media/icons/check-img.png'


export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<><span className='text-primary-100'>Educational </span>Video Production Company </>),
        para: "Now revolutionize learning with our education video production services like never before.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "BuzzFlick knows how to convert boring educational material into engaging educational videos by streamlining the concepts and personifying them through educational videos.",

        "Neither kids nor professionals like boring lectures filled with jargon. So, why not opt for education video production to teach someone something? Whether you want it for students or C-level executives, we are perfect for the job as we create the best educational videos in the USA for you.",
    ];
    const looking = {
        title: (<> Your Partner for <br /> Educational Video<br /> Production in the USA </>),
        para: { paraArray },
        isCTA: false,
        isBtns: true,
        flodImg: LookingFlodImg
    };
    //=====Product=====//
    const productArray = [
        "When a person or, a character (in case of an animated video), presents an audience a valuable informational and educational content directly. You can also categorize in-person recorded video training as an educational content.",

        "That is why educational video production is valuable, instructive, and shareable way to help you and your firm become an authority or thought leader in your industry.",

        "BuzzFlick provides educational video marketing through short TikTok videos, a series of quick how-to guides, tutorials, and even complicated full-scale corporate training videos.",
    ];
    const product = {
        title: (<> What is Educational Video Content? </>),
        para: { productArray },
        flodImg: ProductImg,
        css: "w-auto"
    };
    //=====Company=====//
    const componyArray = [
        "Overall, educational video should be brief and targeted on learning. The use of audio/ visual elements should be appropriate for explanation and complement each other.",

        "Highlight key ideas or concepts through signaling. Video’s voice over should be conversational, and enthusiastic to enhance user engagement.",
    ];
    const listArray = [
        "",
        "",
        "",
    ]
    const companies = {
        title: (<> Characteristics of a <br />
            Good Educational Video </>),
        para: { componyArray },
        subtitle: "",
        subPara: "",
        flodImg: BoostFlodImg,
        list: { listArray },
        btn: true,
        lists: false,
        checkImg: checkIcon,
        css: ""
    };
    //=====Portfilio Fold=====//
    const tabInfo = [
        { label: "2D Animation", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Explainer Videos", index: 3 },
        { label: "Typographic", index: 4 },
    ];
    const tabContents = [
        [polio1, [polio2, polio3], polio4],
        [polio4, [polio2, polio3], polio1],
        [polio1, [polio2, polio3], polio4],
        [polio4, [polio2, polio3], polio1],
        [polio1, [polio2, polio3], polio4],
    ];
    const portfolio = {
        title: (<> BuzzFlick’s Educational Video Production Projects </>),
        para: (<> We stand out among all educational video companies for our creative and distinctive portfolio. </>),
        tabContents: tabContents,
        tabsInfo: false,
        tabInfo: tabInfo
    };
    //===== buzzflick Fold=====//
    const buzzflickContent = [
        {
            ImageOne: conceptIcon1,
            sliderNumber: 1,
            slideTitle: "Our Videos Are Engaging",
            paraOne: "Covering technology-based content in videos is not easy. You have to be creative, thoughtful, and less complicated to convey the information effectively. That is why BuzzFlick makes sure the tech video production involves all the creative elements to make the videos more engaging for the viewer. ",
            paraTwo: "Not only does it compellingly present tech product or information, but also keep audiences hooked to the chair till the end of the video. A win-win situation. Our team of communicators is best at storytelling through videos. And hence, people like a good story, we have to be better at it to make your videos well-received.",
        },
        {
            ImageOne: conceptIcon2,
            sliderNumber: 2,
            slideTitle: "Our Videos Create an Emotional Connection",
            paraOne: "Written words can’t connect with people on the level that videos carry with them. According to MarTech Series, the study conducted by Motista states that the success key for any brand is the emotional connection. The report revealed that emotionally connected customers of brands have a higher lifetime value by 306% than merely satisfied customers. ",
            paraTwo: "And what’s better than BuzzFlick’s technology video production to connect with customers and prospect buyers emotionally? Our videos are far more effective than a text-based piece of content. Using video instead of other content types significantly increases the likelihood of establishing an emotional connection with your audience.",
        },
        {
            ImageOne: conceptIcon3,
            sliderNumber: 3,
            slideTitle: "Our Videos Educate Your Audience",
            paraOne: "According to Think With Google:",
            paraTwo: "86% of U.S. viewers use YouTube often to learn new things.",
            paraThree: "Similarly, a study conducted by Google states that:",
            paraFour: "58% of people learn new skills through digital videos",
            paraFive: "People process visual information more rapidly than text. That is why educational videos are great for educating your audience and making tech information more memorable.",
            paraSix: "We put tech information in our videos in a digestible educational format so that people are likely to understand tech products easily and efficiently. Not only our videos are helpful for your customer, but also you can get training videos for your employees to make them understand how a software and tech product works to demonstrate them to others flawlessly.",
        },
        {
            ImageOne: conceptIcon4,
            sliderNumber: 4,
            slideTitle: "Our Videos Are Exceptional",
            paraOne: "With videos all over the internet, BuzzFlick strives to be exceptionally unique and stand out. We have taken tech video production to the next level by hiring a team full of design, animation, and tech enthusiasts to deliver you the exceptional content you were looking for.",
            paraTwo: "With creativity, excellence, aesthetics, and a unique storytelling approach, we are making tech video content digestible, easy to understand, and flawless. Now give your tech products the creative edge they need through our tech-based videos and elevate your brand identity like never before.",
        },
    ]

    const educateBuzz = [
        {
            ImageOne: conceptIcon5,
            slideTitle: "Enhance",
            paraOne: "learning for students and teachers with our educational videos.",
        },
        {
            ImageOne: conceptIcon6,
            slideTitle: "Open up",
            paraOne: "teaching opportunities and learning portals.",
        },
        {
            ImageOne: conceptIcon7,
            slideTitle: "Crafts",
            paraOne: "engaging educational videos for an exciting learning experience.",
        },
        {
            ImageOne: conceptIcon8,
            slideTitle: "Utilize",
            paraOne: "educational videos for academic education, awareness, and targeted audience training.",
        },
        {
            ImageOne: conceptIcon9,
            slideTitle: "Collaborate",
            paraOne: "with educational institutes and tutors for orientation, lectures, lessons, and training videos.",
        }
    ]

    const buzzflick = {
        title: "Why BuzzFlick is an Ideal Company for Educational Video Production?",
        para: "BuzzFlick stands among the top educational video production companies and has been providing its educational video production services around the globe since 2016.",
        conceptContent: buzzflickContent,
        educateBuzz: educateBuzz,
        foldBg: FoldBg,
        isBtn: false,
        isEducateBuzz: false,
        btnBg: "bg-prime",
    };
    //===== Production Fold ====== //

    const otherCards = [
        {
            cardTitle: <>Storyboard Creation</>,
            cardDesc: 'In this phase of tech video production, our creative digital artists sketch a simple yet pulsating visual representation of tech video for your company to give you an idea of how your video will look like.',
            cardNum: "03",
        },
        {
            cardTitle: <>Visual Illustration</>,
            cardDesc: 'Our skilled illustrators take the storyboard to the next level by creating stunning and vibrant illustrations. It helps to turn your video into more refined and appealing content.',
            cardNum: "04",
        },
        {
            cardTitle: <>Finalizing Voice Over</>,
            cardDesc: 'The voice-over artists add a new life to your videos by adding their powerful voices in different languages and accents. You can select the best suitable voice for your tech video.',
            cardNum: "05",
        },
        {
            cardTitle: <>Animation and Motion <br /> Graphics</>,
            cardDesc: 'The animation stage involves delivery of finest motion graphics services that bring static illustrations to life in a compelling fashion. Our team brings all the assets together (the script, voice-over, and illustrations) and animates them to create a compelling narrative and powerful story.',
            cardNum: "06",
        },
        {
            cardTitle: <>Post-production</>,
            cardDesc: 'Once your animated technology video is ready, the post-production phase starts. We do the final editing and some touch-ups at this stage and our quality assurance team further checks to ensure the perfection we want to achieve to deliver you with the best.',
            cardNum: "07",
        },
        {
            cardTitle: <>Let’s Buzz</>,
            cardDesc: 'Once the quality assurance is completed by our team, we share the finalized version of the video with you to get your feedback for any changes. Most probably, our crafted videos are good to go. You can now create a Buzz with your tech video and attract engage and delight your audience.',
            cardNum: "08",
        },
    ]
    const production = {
        title: "Our Tech Video Production Process",
        desc: "We believe in an end-to-end approach when it comes to tech video production and that is the reason we have 100s of satisfied clients onboard to get the best tech videos to help their businesses.",
        firstTwoCards: true,
        otherCards: otherCards,
    }
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            profile: icon1,
            stars: icon2,
            name: 'Emma Thompson, Marketing Manager',
            message: 'Mind-blowing creativity! The 2D animation for our product launch was a game-changer. Our audience loved the visual storytelling, and it translated into tangible engagement and sales. Kudos! ',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Samuel Rodriguez, CEO',
            message: 'Working with this team was a breeze! They took our concepts and turned them into visually stunning 2D animations. Our brand message was conveyed with charm and simplicity, captivating our audience.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Megan Harper, Creative Director',
            message: "Incredible attention to detail! The 2D animation service brought our brand's story to life in ways we hadn't imagined. The creativity and precision in each frame left us thoroughly impressed.",
            company: 'ABC company',
        },
    ];
    const testimonial = {
        title: (<> The Ultimate Collection Of <br />
            Our Incredible Customer Experiences </>),
        para: (<> Achieved 1000+ Impactful Results That Speak Volumes </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };
    //===== FAQS =====//

    const accordionData = [
        {
            question: 'What Is The Cost Of Tech Video Production?',
            answer: "The cost for tech video production depends on how complicated your information to be converted into video is. Usually, the cost for a 2D animated video starts from $1000, and the same goes for technology videos. But the amount may vary on length and video style.",
        },
        {
            question: 'What Is The BuzzFlick’s Video Delivery Timeframe?',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
        },
        {
            question: 'What Kind Of Videos BuzzFlick Provides With Tech Video Production Services?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        }
    ];

    const faqs = {
        title: "Frequently Asked Questions",
        accordionData: accordionData,
    }

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Product content={product} />
            <Company content={companies} />
            <BuzzFlick content={buzzflick} />
            <Portfolio content={portfolio} /> 
            <Production content={production} />
            <Testimonial content={testimonial} />
            <Faqs content={faqs} />
            <Contact />
        </>
    )
}