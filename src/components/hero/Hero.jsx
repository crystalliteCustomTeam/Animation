"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import trustPlatforms from "media/icons/trust.png";

const Hero = ({ content }) => {
    const { title, para, } = content;
    // Set Bg-Image
    const router = usePathname();
    let backgroundImage;
    let margin;
    switch (router) {
        case "/":
            backgroundImage = 'bg-[length:100%_70%] bg-bottom lg:items-end xxl:items-center lg:bg-[url("../../public/home/banner-img.png")]'
            margin = 'mt-0'
            break;
        case '/why-us':
            backgroundImage = 'bg-[length:100%_100%] bg-bottom lg:bg-[url("../../public/why-us/banner-bg.png")]'
            break;
        case '/portfolio':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/portfolio/banner-bg.png")]'
            break;
        case '/process':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/process/banner-bg.png")]'
            break;
        case '/pricing':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/pricing/banner-bg.png")]'
            break;
        case '/blog':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/blogs/banner-bg.png")]'
            break;
        case '/contact-us':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/contact/banner-bg.png")]'
            break;
        case '/logo-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/logo-animation/banner-bg.png")]'
            break;
        case '/architectural-services':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/architectural-services/banner-bg.png")]'
            break;
        case '/cgi-and-vfx':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/cgi-and-vfx/banner-bg.png")]'
            break;
        case '/motion-graphics':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/motion-graphics/banner-bg.png")]'
            break;
        case '/video-editing':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/video-editing/banner-bg.png")]'
            break;
        case '/2d-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/2d-animation/banner-bg.png")]'
            break;
        case '/3d-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/3d-animation/banner-bg.png")]'
            break;
        case '/whiteboard-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/whiteboard/banner-bg.png")]'
            break;
        case '/infographics-design':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/infographics/banner-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/hybrid-cel/banner-bg.png")]'
            break;
        case '/tech-videos':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/tech-videos/banner-bg.png")]'
            break;
        case '/corporate-video':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/corporate-video/banner-bg.png")]'
            break;
        default:
            break;
    }
    return (
        <>
            <section className={`w-full h-[100vh] flex items-center justify-start sm:pb-5 bg-none bg-no-repeat ${backgroundImage}`}>
                <div className="container">
                    <div className='flex'>
                        <div className='w-full lg:w-[550px] xl:w-[600px]'>
                            <h1 className={`text-[40px] md:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-5 mt-32 ${margin}`}>
                                {title}
                            </h1>
                            <p className="text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5">
                                {para}
                            </p>
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon1={true}
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                    href="#"
                                />
                                <CTA
                                    text="Live Chat"
                                    icon2={true}
                                    bg="bg-[#000]"
                                    color={`text-white`}
                                    border={`border-2 border-[#fff]`}
                                    hover="hover:bg-prime"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                            <Image src={trustPlatforms} className="mt-10 md:mt-20" alt="Infinity Animation" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
