// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Blogs from "@/components/blogs/Blogs";
import NewsLetter from "@/components/newsletter/NewsLetter";


export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Infinity Animations Blog </>),
        para: "Offering a visual journey into the dynamic realm of animation excellence",
        btnBg: "bg-prime",
    };

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Blogs />
            <NewsLetter />
        </>
    )
}