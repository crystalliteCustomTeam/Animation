// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Portfolio from '@/components/portfolio/Portfolio';
import Boost from '@/components/boost/Boost';
import Servicesconcept from '@/components/servicesconcept/Servicesconcept';
import Pricing from "@/components/pricing/Pricing";
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/2d-animation/looking-img.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.png";
import boosticon1 from "media/icons/boost-icon4.png"
import boosticon2 from "media/icons/boost-icon5.png"
import boosticon3 from "media/icons/boost-icon6.png"
// ==== Service Concept Images
import ServiceConcept from 'media/images/concept-img.png'
import ConceptParticle from "media/images/concept-bef.png"
import FoldBg from 'media/images/fold-bg.png'
import conceptIcon1 from "media/icons/concept-icon1.png"
import conceptIcon2 from "media/icons/concept-icon2.png"
import conceptIcon3 from "media/icons/concept-icon3.png"
import conceptIcon4 from "media/icons/concept-icon4.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> 2D <span className='text-primary-100'>Animation</span><br /> Services </>),
        para: "Vintage visuals that speak your language and stir nostalgia.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Dive into the vibrant world of 2D animation with our services that blend creativity and innovation. We specialize in crafting animations that not only visually captivate but also narrate your brand story with unparalleled flair. From lively characters to dynamic motion graphics, our 2D animation services bring a touch of magic to your content.",

        "Whether you're launching a product, explaining a complex idea, or simply aiming to entertain, our 2D animations are designed to resonate with your audience. We take pride in infusing each frame with a personality that mirrors your brand, creating visuals that not only engage but leave a lasting imprint on the viewer's mind. "
    ];
    const looking = {
        title: (<> 2D Animation </>),
        para: { paraArray },
        isCTA: true,
        isBtns: true,
        flodImg: LookingFlodImg
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
        title: (<> Our Exceptional Portfolio for Video Animation </>),
        para: (<> A visual journey through a kaleidoscope of creativity, where each project tells a unique story of brand elevation and visual excellence. </>),
         tabContents: tabContents,
        tabsInfo: true,
        tabInfo: tabInfo
    };
    //=====Boost Fold=====//
    const boostContent = [
        {
            icon: boosticon1,
            heading: "Strategic Conceptualization",
            text: "We kick off by delving deep into your brand ethos, understanding your goals, and strategically conceptualizing visuals that align with your narrative. ",
        },
        {
            icon: boosticon2,
            heading: "Creative Mastery",
            text: "Our team of seasoned creatives then breathe life into these concepts, leveraging cutting-edge techniques and artistic finesse. ",
        },
        {
            icon: boosticon3,
            heading: "Audience Connection",
            text: "Impact isn't just about visuals; it's about connection. We ensure that every animation, every narrative beat, is a bridge between your brand and your audience.",
        },
    ];
    const boost = {
        title: (<> Get Them Talking </>),
        para: (<> Leave an indelible mark on your audience's consciousness. We craft impactful visual experiences that resonate. </>),
        btnBg: "bg-prime",
        boostContent: boostContent,
        flodImg: BoostFlodImg
    };
    //=====Service Concept Fold=====//
    const conceptContent = [
        {
            ImageOne: conceptIcon1,
            sliderNumber: 1,
            slideTitle: "Discovery and Strategy",
            sliderDesc: "We kick off by diving deep into your brand essence, understanding your goals, and formulating a strategic roadmap tailored to your unique identity and objectives."
        },
        {
            ImageOne: conceptIcon2,
            sliderNumber: 2,
            slideTitle: "Creative Craftsmanship",
            sliderDesc: "Our skilled team then brings your vision to life, utilizing state-of-the-art techniques and artistic flair to create animations that align with your brand narrative."
        },
        {
            ImageOne: conceptIcon3,
            sliderNumber: 3,
            slideTitle: "Refinement and Delivery",
            sliderDesc: "We believe in perfection, so after the initial creation, we refine and polish the content to ensure it not only meets but exceeds your expectations. "
        },
        {
            ImageOne: conceptIcon4,
            sliderNumber: 4,
            slideTitle: "Concept",
            sliderDesc: "We first brainstorm and refine your ideas into a solid concept, ensuring a strong narrative foundation."
        },
    ]
    const concept = {
        title: "Our Process",
        para: "We follow a dynamic process, seamlessly blending creativity and strategy to transform your ideas into visually stunning and thoughtful storytelling masterpieces.",
        conceptContent: conceptContent,
        Servicesconcept: ServiceConcept,
        ConceptParticle: ConceptParticle,
        foldBg: FoldBg,
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
        wantDesc: "Have questions? We have answers, Call Now!",
        bgPrime: true,
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
        title: (<> An Who’s Who of Industry Leading Clients </>),
        para: (<> Achieved 1000+ Impactful Results That Speak Volumes </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Portfolio content={portfolio} />
            <Boost content={boost} />
            <Servicesconcept content={concept} />
            <Pricing content={pricing} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}