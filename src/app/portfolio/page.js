// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Portfolio from '@/components/portfolio/Portfolio';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Design & Marketing on Steroids </>),
        para: "Unveiling Our Canvas of Creative Brilliance!",
        btnBg: "bg-prime",
    };
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
            name: 'Sophie Miller',
            message: 'Browsing through the portfolio of this animation studio was an absolute delight. Each piece tells a unique story, and the diversity of their work showcases their versatility and mastery of the craft.',
            company: 'Content Creator',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Elijah Mitchell',
            message: "This animation studio's portfolio is a visual feast for anyone seeking innovation. The CGI and VFX projects are particularly outstanding, demonstrating a perfect blend of technical prowess and artistic creativity.",
            company: 'Tech Entrepreneur',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Ava Turner',
            message: 'The attention to detail and realism in each project are remarkable. The animations effectively capture the essence of spaces, making them an ideal choice for event promotions.',
            company: 'Event Coordinator',
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
            <Portfolio content={portfolio} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}