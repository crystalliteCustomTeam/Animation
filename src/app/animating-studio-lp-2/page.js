
import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import AwardWinning from './components/AwardWinning/AwardWinning'
import Portfolio from './components/Portfolio/portfolio'
import BookMeeting from './components/BookMeeting/BookMeeting'
import Packages from './components/Packages/Packages' 
import WorldClass from './components/WorldClass/WorldClass'
import SmallBanner from './components/SmallBanner/SmallBanner'
import ExplainerVideo from './components/explainer-video/ExplainerVideo'
import AnimationProcess from './components/AnimationProcess/AnimationProcess'
import WhyChoose from './components/whyChoose/WhyChoose'
import ClientReads from './components/ClientReads/ClientReads'
import Brand from './components/BrandShine/Brand' 
import Faqs from './components/faqs/Faqs' 
import Footer from './components/Footer/Footer' 
// Images
import BranShine from "media/infinity-studio-lp-new/brandshine.png"
import SaleShine from "media/explainer-videos/salesimage.png"
// ===== Card Images
import Remark1 from "media/infinity-studio-lp-new/remark1.png"
import Remark2 from "media/infinity-studio-lp-new/remark2.png"
import Remark3 from "media/infinity-studio-lp-new/remark3.png"
import Remark4 from "media/infinity-studio-lp-new/remark4.png"
import Remark5 from "media/infinity-studio-lp-new/remark5.png"
import Remark6 from "media/infinity-studio-lp-new/remark6.png"
import Remark7 from "media/infinity-studio-lp-new/remark7.png"
import Remark8 from "media/infinity-studio-lp-new/remark8.png"
import Remark9 from "media/infinity-studio-lp-new/remark9.png"


const page = () => {
    //==== Animations Sections =====//
    const animations = {
        title: <>Best <span className='text-black'>Animated Explainer Video</span> Creation Services</>,
        para: <>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure our clients are fully aware of the project progress and are completely satisfied too. We cater a strong relationship with clients, starting from your ideas.</>,
        subtitleOne: <><span className='text-black'>Professional</span> Explainer <br className='xl:block hidden' /> Animated Videos</>,
        subtitleTwo: <>Simple words or symbols do not attract as many people as video animation does.</>,
        subpara: <>Animated videos are a great way to fascinate your viewers with rich, intriguing, and playful scenes. It is evaluated according to a study that animations videos can boost your company sales upto around 49%. Infinity animations studio offers you the interactive, innovative approach to motion pictures creation in any format in tight deadline terms and affordable prices. We are proud to have served top-notch names in the industry with our service.</>,
        AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/973456427/rendition/1080p/file.mp4?loc=external&signature=bec01dc8250d19fddde8de57be2a91813d578dfc4f31dbe5a25fa58857a4113e",
    }
    // ==== brands Start
    const brands = {
        title: <>Start Displaying <span className='text-black'>Your Brand</span> with Amazing Animated Videos!</>,
        subtitle: "",
        desc: <>Are you ready for our video animation services? If yes, then you are <br className='xl:block hidden' /> about to enter into a portal that leads to never-ending artistic creativity and vigor.</>,
        branImage: BranShine,
        isBranImage: true,
        css: "lg:w-[32%] ml-auto absolute right-[20px] top-[-75px] xl:top-[-95px]",
        positionCss: "",
        btnTxt: "Make An Animation",
        callTxt: "Live Chat",
        isColor: false,
    }
    //==== remarkable start =====//
    const cardOne = {
        cardtitle: <>Concept and Storyboards</>,
        cardpara: <>During the video animation process, we retain your concept, and we keep you posted by showing you the storyboard first.</>,
        css: "w-8/12 mx-auto",
        cardImage: Remark1,
    }
    const cardTwo = {
        cardtitle: <>Texturing</>,
        cardpara: <>Our 3D animation services comprise a series of procedural methods ensuring that the end result turns out to be not just impeccable, but flawless as well.</>,
        cardImage: Remark2,
    }
    const cardThree = {
        cardtitle: <>Rigging</>,
        cardpara: <>Rigging is an essential step in 3D animation services, as it allows animators to manipulate the 3D model and make it move in whatever way you want it to be.</>,
        cardImage: Remark3,
    }
    const cardFour = {
        cardtitle: <>Lightings</>,
        cardpara: <>Lighting in 3D animation services is much like lighting in filmmaking. The lighting artist sets up a combination of light sources to draw attention to a special part of the setting.</>,
        cardImage: Remark4,
    }
    const cardFive = {
        cardtitle: <>Animation</>,
        cardpara: <>Need we say more? Well, without animation, video animation wouldn’t be possible or any kind of animation services wouldn’t be possible.</>,
        cardImage: Remark5,
    }
    const cardSix = {
        cardtitle: <>Compositing and Special VFX</>,
        cardpara: <>VFX compositing serves as the nexus between live-action video footage and digital elements, intricately weaving together the harmonies that make our 3D animation services stand out.</>,
        cardImage: Remark6,
    }
    const cardSeven = {
        cardtitle: <>Music and Foley</>,
        cardpara: <>Harnessing an array of props, foley artisans methodically conceive and capture the ambient sounds ubiquitous in cinematic masterpieces, such as video animation services.</>,
        cardImage: Remark7,
    }
    const cardEight = {
        cardtitle: <>Editing and Final Output</>,
        cardpara: <>Our video animation services will never be complete unless and until we invest most of our attention in the editing process. It allows us to achieve the best results.</>,
        cardImage: Remark8,
    }
    const cardNine = {
        cardtitle: <>Rendering</>,
        cardpara: <>Rendering epitomizes the transformative procedure wherein a three-dimensional model or animation is transmuted into a two-dimensional image or video composition.</>,
        cardImage: Remark9,
    }
    const remarkable = {
        title: <>How We <span className='text-[#FF0000]'>Achieve Remarkable</span> Outcomes</>,
        para: <>At Animating Studio, our meticulous work process is intricately crafted to yield flawless outcomes, whether for large-scale endeavors or smaller projects. Every detail is considered in our comprehensive approach to ensure excellence in every animation project.</>,
        cardOne: cardOne,
        cardTwo: cardTwo,
        cardThree: cardThree,
        cardFour: cardFour,
        cardFive: cardFive,
        cardSix: cardSix,
        cardSeven: cardSeven,
        cardEight: cardEight,
        cardNine: cardNine,
        isHomePage: true,
    }
    // ===== sales
    const sales = {
        title: "Ignite sales with a single click-craft compelling videos instantly!",
        subtitle: "",
        desc: "Animated videos are a great way to fascinate your viewers with rich, intriguing, and playful scenes. It is evaluated according to a study that animations videos can boost your company",
        btnTxt: "Let's Begin Your Animated Journey Together!",
        branImage: SaleShine,
    }
    //===== FAQS =====//
    const accordionData = [
        {
            question: 'How Many People Will Work On My Video?',
            list: [
                "Understanding your business and marketing objectives",
                "Story and script development",
                "Storyboard",
                "Voiceover",
                "Illustration",
                "Animation",
                "Delivery/publication",
            ]
        },
        {
            question: 'How Many People Will Work On My Video?',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
        },
        {
            question: 'Do I Get Full Copyrights To The Video?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        },
        {
            question: 'Do You Produce All Types Of Animation Videos And Provide Video Concept Too, If I Have No Concept Idea?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        }
    ];
    const faqs = {
        accordionData: accordionData,
    }
    return (
        <>
            <Header />
            <Banner />
            <WorldClass />
            <BookMeeting />
            <SmallBanner />
            <Packages />
            <Portfolio />
            <AwardWinning />
            <ExplainerVideo />
            <Brand content={sales} />
            <AnimationProcess />
            <WhyChoose />
            <ClientReads />
            <Faqs content={faqs} />
            <Footer />
        </>
    )
}

export default page
