"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Product = ({ content }) => {
    const { title, para: { productArray }, css, flodImg } = content;

    const router = usePathname();

    let lookinImage;
    let lookingSecCol;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        default:
            break;
    }

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 relative`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-y-7'>
                        <div className={`w-full lg:w-[600px] ${lookingSecCol}`}>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5">
                                {title}
                            </h1>
                            {productArray.map((para, index) => (
                                <p key={index} className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-5">
                                    {para}
                                </p>
                            ))}
                            <div className="flex gap-6">
                                <CTA
                                    text="Book a Free Consultation"
                                    icon1={true}
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                    href="#"
                                />
                            </div>
                        </div>
                        <div className={`w-full lg:w-[600px] ${lookinImage}`}>
                            <Image src={flodImg} className={`mx-auto w-full ${css}`} alt="Infinity Animation" quality={85} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
