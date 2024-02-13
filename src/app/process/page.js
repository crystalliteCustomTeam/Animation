// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import StoryLine from '@/components/storyline/StoryLine';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== StoryLine Images
import StoryLine1 from "media/home/storyline1.png";
import StoryLine2 from "media/home/storyline2.png";
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

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
            StoryLineImg: StoryLine2
        },
        {
            question: 'Audio Excellence',
            answer: "Elevate the storytelling experience with audio mastery. Our team meticulously selects and integrates sound elements to enhance emotional connections and create a truly immersive experience.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Dynamic Animation',
            answer: "Infuse life into your story with dynamic animations. From 2D to 3D, our animation expertise brings characters, scenes, and concepts to vibrant existence, captivating your audience with visually stunning sequences.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'The Midas Touch',
            answer: "Add the final touch of brilliance with our Midas Touch – a meticulous polish and refinement process that ensures your animation shines with perfection. Every detail is scrutinized to deliver an animated masterpiece that exceeds expectations.",
            StoryLineImg: StoryLine1
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
            profile: icon1,
            stars: icon2,
            name: 'Michael Gardner',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Sarah',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'John',
            message: 'Infinity Animations created a stunning promotional video for my startup. The attention to detail and animation definitely made a positive impact on our online presence and has set us apart from competitors.',
            company: 'ABC company',
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
        </>
    )
}