// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Blogs from "@/components/blogs/Blogs";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Script from "next/script";


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
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": "Animation Blogs | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner-bg.b24e321b.gif",
                        "description": "From impactful storytelling to technical mastery, our blog is your gateway to the art and innovation of video animation services.",
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