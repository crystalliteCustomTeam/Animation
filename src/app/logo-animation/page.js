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
import LookingFlodImg from "media/logo-animation/looking-img.png";
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
        title: (<> Logo Animation Services </>),
        para: "Build a unique identity with dynamic logo animation!",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Beyond mere visuals, we infuse your logo with vitality and energy, turning it into a memorable brand signature that resonates with your audience. Boost your online presence, captivate your audience, and leave a lasting imprint with logo animations that speak volumes in motion.",

        "It's not just about a moving logo; it's about transforming your brand into a visual story that captivates and connects. Join us on the journey where your logo becomes the star of the show, and every animation is a masterpiece that tells the tale of your brand in motion. This is more than animation; this is the art of making your brand unforgettable."
    ];
    const looking = {
        title: (<> Logo Animation  </>),
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
            text: " We kick off by delving deep into your brand ethos, understanding your goals, and strategically conceptualizing visuals that align with your narrative. ",
        },
        {
            icon: boosticon2,
            heading: "Creative Mastery",
            text: "Our team of seasoned creatives then breathe life into these concepts, leveraging cutting-edge techniques and artistic finesse. ",
        },
        {
            icon: boosticon3,
            heading: "Audience Connection",
            text: "Impact isn't just about visuals; it's about connection. We ensure that every animation, every narrative beat, is a bridge between your brand and your audience. ",
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
        wantDesc: "Have questions? We have answers, Call Now!"
    }
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            profile: icon1,
            stars: icon2,
            name: 'Elijah Bennett, E-commerce Entrepreneur',
            message: 'The dynamic animation not only captured attention on our online store but also created a memorable brand moment. The commitment to brand identity and storytelling through animation sets them apart.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Olivia Foster, Event Planner',
            message: 'As an event planner, I wanted our logo to make a statement, and the logo animation services delivered exactly that. The animated logo became a focal point in our event promotions, adding a touch of sophistication. ',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Marcus Litrell, Tech Startup Founder',
            message: 'Collaborating with this team for our startup logo animation was a strategic decision. The animated logo became a dynamic representation of our tech-forward brand. Impressed with their technical expertise and creative approach.',
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


