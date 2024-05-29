"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import trustPlatforms from "media/icons/trust.png";
import topLeft from "media/location-page/top-left.png"
import topRight from "media/location-page/top-right.png"
import bottomRight from "media/location-page/bottom-right.png"
import BannerLogo1 from "media/location-page/banner-logo-1.png"
import BannerLogo2 from "media/location-page/banner-logo-2.png"
import BannerLogo3 from "media/location-page/banner-logo-3.png"
import BannerLogo4 from "media/location-page/banner-logo-4.png"
import BannerLogo5 from "media/location-page/banner-logo-5.png"
import styles from "./hero.module.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tabInfo = [
    { image: BannerLogo1 },
    { image: BannerLogo2 },
    { image: BannerLogo3 },
    { image: BannerLogo4 },
    { image: BannerLogo5 },
    { image: BannerLogo1 },
    { image: BannerLogo2 },
    { image: BannerLogo3 },
    { image: BannerLogo4 },
    { image: BannerLogo5 },
];

const Hero = ({ content }) => {
    const { title, para, } = content;
    // Set Bg-Image
    const router = usePathname();
    let backgroundImage;
    let margin;
    switch (router) {
        case "/":
            backgroundImage = 'bg-cover bg-bottom lg:items-end xxl:items-center lg:bg-[url("../../public/home/banner-img.gif")]'
            margin = 'mt-0'
            break;
        case '/why-us':
            backgroundImage = 'bg-[length:100%_100%] bg-bottom lg:bg-[url("../../public/why-us/banner-bg.png")]'
            break;
        case '/video-animation-portfolio':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/portfolio/banner-bg.png")]'
            break;
        case '/video-animation-process':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/process/banner-bg.gif")]'
            break;
        case '/video-animation-pricing':
            backgroundImage = 'bg-[length:100%_140%] bg-center lg:bg-[url("../../public/pricing/banner-bg.gif")]'
            break;
        case '/blog':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/blogs/banner-bg.gif")]'
            break;
        case '/contact-us':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/contact/banner-bg.gif")]'
            break;
        case '/custom-logo-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/logo-animation/banner-bg.png")]'
            break;
        case '/architectural-visualization':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/architectural-services/banner-bg.gif")]'
            break;
        case '/cgi-and-vfx-services':
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
            backgroundImage = 'bg-[length:100%_100%] bg-center lg:bg-[url("../../public/3d-animation/banner-bg.gif")]'
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
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

        ],
    };
    
    return (
        <>
            <section className={`w-full md:h-[100vh] flex items-center justify-start px-[25px] sm:pb-5 pt-[100px] xl:pt-[200px] lg:pt-[120px] mt-[30px]`}>

                <div className='grid grid-cols-1 lg:grid-cols-2  justify-items-center w-full'>
                    <div className='w-full lg:w-[550px] xl:w-[600px] ms-auto pe-5 mb-32'>
                        <h1 className={`text-[40px] md:text-[50px] xl:text-[55px] font-semibold font-sans leading-none  mt-5 mb-4 ${margin}`}>
                            {title}
                        </h1>
                        <p className="text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5">
                            {para}
                        </p>
                        <div className="flex gap-6">
                            <CTA
                                text="Get Started"
                                icon="/icons/arrow-red.png"
                                iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                bg="bg-prime"
                                color={`text-white`}
                                border={`border-2 border-[#f5090b]`}
                                hover="hover:bg-transparent"
                            />
                            <CTA
                                text="Live Chat"
                                icon="/icons/chat.png"
                                iconCss="w-[40px]"
                                bg="bg-[#000]"
                                color={`text-white`}
                                border={`border-2 border-[#fff]`}
                                hover="hover:bg-prime"
                                href="javascript:$zopim.livechat.window.show();"
                            />
                        </div>
                        <Slider {...testiSlider} className="mt-[40px] h-[130px] md:h-[150px] border-t-2 border-gray-500">
                        {tabInfo.map((item, index) => (
                            <div className='h-[130px] md:h-[150px] w-[100%] mx-[45px] content-center '>
                                <Image src={item.image} alt='BannerLogo' className='object-contain  px-3 mx-auto' />
                            </div>
                        ))}
                    </Slider>
                        {/* <Image src={trustPlatforms} className="mt-10 md:mt-20" alt="Infinity Animation" />/ */}
                    </div>
                    <div className={`${styles.bannerImg} my-auto flex flex-col justify-between lg:h-full`}>
                        {/* <Image src={bannerImg} className={`${styles.bannerImg}`}/> */}
                        <div className="flex justify-between">
                            <div>
                                <Image src={topLeft} className={`${styles.topLeft}`} />
                            </div>
                            <div>
                                <Image src={topRight} className={`${styles.topRight}`} />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div>
                                <Image src={bottomRight} className={`${styles.bottomRight}`} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
