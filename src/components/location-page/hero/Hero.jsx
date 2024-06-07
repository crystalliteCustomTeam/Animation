"use client"
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
// Import CSS
import styles from "./hero.module.css"
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import topLeft from "media/location-page/top-left.png"
import topRight from "media/location-page/top-right.png"
import bottomRight from "media/location-page/bottom-right.png"
import BannerImg from "media/location-page/banner-img.png"
import icon1 from "media/icons/banner-logo-1.png";
import icon2 from "media/icons/banner-logo-2.png";
import icon3 from "media/icons/banner-logo-3.png";
import icon4 from "media/icons/banner-logo-4.png";
import icon5 from "media/icons/banner-logo-5.png";
// Import Slider
import { register } from 'swiper/element/bundle'

register();

const sliderInfo = [
    { image: icon1 },
    { image: icon2 },
    { image: icon3 },
    { image: icon4 },
    { image: icon5 }
];

const Hero = ({ content }) => {
    const { title, para, } = content;

    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: {
                nextEl: `.swiper-button-next`,
                prevEl: `.swiper-button-prev`
            },
            loop: 'true',
            speed: 400,
            pagination: "false",
            slidesPerView: '4',
            freeMode: true,
            grabCursor: true,
            spaceBetween: "20",
            autoplay: {
                delay: 1500,
                disableOnInteraction: "false",
                stopOnLastSlide: 'false'
            },
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                480: {
                    slidesPerView: "1",
                },
                780: {
                    slidesPerView: "3",
                },

            },
            injectStyles: [
                `
                .swiper-wrapper {
                    align-items: center;
                }
            `,
            ],
        };
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <>
            <section className={`w-full lg:h-[100vh] flex items-center justify-start mt-0 md:mt-10 lg:mt-0 mb-0 md:mb-16 lg:mb-5 bg-none bg-no-repeat relative overflow-hidden z-1 top-[97px] lg:top-auto`}>
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-5'>
                            <h1 className={`text-[40px] md:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-5 mt-4 lg:mt-32`}>
                                {title}
                            </h1>
                            <p className="text-[15px] lg:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5">
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
                            <div className="bannerSlider mt-[40px] border-t-2 border-gray-500 pt-4">
                                <swiper-container ref={swiperRef} init="false" >
                                    {
                                        sliderInfo.map((item, index) => (
                                            <>
                                                <swiper-slide key={index}>
                                                    <div>
                                                        <Image src={item.image} className="w-[70%]" alt='BannerLogo' />
                                                    </div>
                                                </swiper-slide>
                                            </>
                                        ))
                                    }
                                    <swiper-pagination className="hidden"></swiper-pagination>
                                </swiper-container>
                            </div>
                        </div>
                        <div className={`${styles.bannerImg} relative col-span-12 lg:col-span-7`}>
                            <div className="flex justify-between relative">
                                <div>
                                    <Image src={topLeft} className={`${styles.topLeft}`} />
                                </div>
                                <div>
                                    <Image src={topRight} className={`${styles.topRight}`} />
                                </div>

                            </div>
                            <div className={styles.mainImg}>
                                <Image src={BannerImg} alt="Infinity Animations" />
                            </div>
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
