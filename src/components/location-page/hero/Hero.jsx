"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
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
                            <div className='h-[130px] md:h-[150px] w-[100%] content-center '>
                                <Image src={item.image} alt='BannerLogo' className="mx-auto" />
                            </div>
                        ))}
                    </Slider>
                    </div>
                    <div className={`${styles.bannerImg} my-auto flex flex-col justify-between lg:h-full`}>
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
