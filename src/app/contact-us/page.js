// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Contact from '@/components/contact/Contact';

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Contact Us </>),
        para: "Ready to turn your ideas into reality? Reach out!",
        btnBg: "bg-prime",
    };
    return (
        <>
            <Hero content={hero} />
            <Review />
            <Contact />
        </>
    )
}