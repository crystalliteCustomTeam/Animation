import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css'
// ===== Images
import BannerLogos from "media/illustration-experts/banner-side-img.svg"
import CTA from '@/components/cta/CTA';
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { register } from 'swiper/element/bundle'

const Banner = () => {
    const swiperRef = useRef(null);
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }


    // const testiSlider = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    // };

    useEffect(() => {
        register();
        const params = {
            pagination: "false",
            slidesPerView: 'auto',
            freeMode: true,
            grabCursor: true,
            centeredSlides: "true",
            spaceBetween: "20",
            autoplay: {
                delay: 2000,
                disableOnInteraction: "false"
            },
        };
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    const testiCard = [
        {
            imageSrc: BannerLogos,
        },
        {
            imageSrc: BannerLogos,
        },
        {
            imageSrc: BannerLogos,
        },

    ]
    return (
        <>
            <section className='bg-fixed bg-cover bg-right-bottom sm:bg-center bg-[#000000] bg-[url("../../public/illustration-experts/main-banner-bg.webp")] h-[100%] pt-[200px] md:pt-[160px]  pb-[30px] md:pb-[50px] mt-[-85px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-2 justify-content-center">
                        <div className="col-span-12 lg:col-span-6 content-center px-[15px]">
                            <h1 className='text-[#ffffff] text-center sm:text-start text-[30px] lg:text-[50px] font-[700] uppercase montserrat lg:w-11/12 leading-[1.2] md:leading-[60px]'>TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .</h1>
                            <p className='text-[#f2f2f2] font-normal text-center sm:text-start text-[16px] lg:text-[15px] montserrat lg:w-11/12 leading-[25px] py-[25px]'>We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!</p>

                            <div className="flex justify-center sm:justify-start gap-4 md:gap-6">
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

                            </div>
                        </div>
                        {/* <div className="col-span-12 lg:col-span-6 flex justify-center ">
                            <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4' />

                        </div> */}

                        {/* slick slider */}
                        {/* <div className="col-span-12 lg:col-span-6 flex justify-center ">
                            <Slider {...testiSlider} className={styles.slickSlider}>
                                {tabInfo.map((item, index) => (
                                    <div className={styles.bannerImage} key={index}>
                                    <Image src={item.imageSrc} alt='banner-logos'  />
                                    </div>
                                ))}
                            </Slider>
                        </div> */}

                        {/* swiper slider */}
                        <div className="col-span-12 lg:col-span-6 flex justify-center ">
                            <swiper-container ref={swiperRef} init={false} class="md:h-[700px] h-[800px]">
                                {
                                    testiCard && testiCard.map((e, i) => (
                                        <swiper-slide key={i}>
                                            <div className={styles.bannerImage} >
                                                <Image src={e.imageSrc} alt='banner-logos'  className='object-contain mt-4 img-fluid' />
                                            </div>
                                        </swiper-slide>
                                    ))
                                }
                                <swiper-pagination className="hidden"></swiper-pagination>
                            </swiper-container>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner
