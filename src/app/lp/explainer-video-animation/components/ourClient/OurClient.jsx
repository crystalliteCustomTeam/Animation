"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Images
import PlayIcon from "media/infinity-studio-lp-2/play.png"
import AwardBg from "media/infinity-studio-lp-2/awardwinning-bg.png"
import googleReview from "media/explainer-videos/googleReview.PNG"
import clutchReview from "media/explainer-videos/clutchReview.PNG"
import review from "media/explainer-videos/review.png"
import icon2 from "media/infinity-studio-lp-new/stars.png";
import Grace from "media/thumbnails/grace.png";
import Alex from "media/thumbnails/alex.png";
import Olivia from "media/thumbnails/olivia.png";
import David from "media/thumbnails/david.jpg";
import Emma from "media/thumbnails/emma.jpg";
import Michael from "media/thumbnails/michael.jpg";
import Sarah from "media/thumbnails/sarah.png";

const OurClient = () => {
    const testiContentNew2 = [
        {
            stars: icon2,
            name: 'Sylvia David',
            badges: googleReview,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045737/rendition/1080p/file.mp4?loc=external&log_user=0&signature=85c3341b0d68f65b218956e9081d46bef4408f2e74e83148f4d3a83e34b79daf",
        },
        {
            stars: icon2,
            name: 'Emily Margolis',
            badges: clutchReview,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045464/rendition/720p/file.mp4?loc=external&log_user=0&signature=06fddc742a45b3eff983a4e5a207a5ff2d1ae71a328b1c14056b1bcc152a9800",
        },
        {
            stars: icon2,
            name: 'Helen Brooks',
            badges: review,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045568/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6ed32074656bcaa25e810119398883ade800b3fd2c5eed96b1eff541e57f5bca",
        },
        {
            stars: icon2,
            name: 'Edd Lockwood',
            badges: googleReview,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045397/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5eb15a8721a49d21ead978545b43276c59608470ad55c3677e62e1fe88d8edfc",
        },
        {
            stars: icon2,
            name: 'Matt Evans',
            badges: clutchReview,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045706/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2b0144629d6bc9649580afa809527d09e6528f656a1c76a1b59408367879c24e",
        },
        {
            stars: icon2,
            name: 'Mathew',
            badges: review,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045615/rendition/720p/file.mp4?loc=external&log_user=0&signature=8256b0e38317771b8db2d8959dc6d54ee41dd6c7a847875437dde63ea45333f2",
        },
        {
            stars: icon2,
            name: 'Gary Wilson',
            badges: googleReview,
            para: `Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!`,
            video: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
            thumbnail: "https://player.vimeo.com/progressive_redirect/playback/950045528/rendition/720p/file.mp4?loc=external&log_user=0&signature=88472fd594409a630523ae139ad0cb0c10556198290ca3f6e4e79c61eec6e8ff",
        },
        {
            stars: icon2,
            name: 'Olivia Bennett',
            badges: clutchReview,
            para: "Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!",
            thumbnail: Olivia,
        },
        {
            stars: icon2,
            name: 'Grace Turner',
            badges: review,
            para: 'Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!',
            thumbnail: Grace,
        },
        {
            stars: icon2,
            name: 'Sarah L.',
            company: "Product Manager",
            badges: googleReview,
            para: "Infinity Animations transformed our vision into a stunning reality with their exceptional 3D animation skills. We needed a lifelike and immersive animation for our product launch, and their team delivered beyond our expectations. Their expertise and attention to detail were evident in every frame. The result was a dynamic and engaging animation that captivated our audience. Working with such a talented and dedicated team reaffirmed their position as a top animation studio in New York. I wouldn't hesitate to work with them again.",
            thumbnail: Sarah,
        },
        {
            stars: icon2,
            name: 'Emma R.',
            company: "Social Media Manager",
            badges: clutchReview,
            para: "Our experience with Infinity Animations for our motion graphics project was nothing short of amazing. We needed high-quality promotional videos for our social media campaigns, and their team delivered spectacular results. The animations were visually striking and perfectly aligned with our brand's messaging. Their innovative techniques and creativity made our content stand out, significantly boosting our online engagement. Choosing Infinity Animations, a leading NYC animation studio, was one of the best decisions for our marketing efforts. Their professionalism and dedication are truly commendable.",
            thumbnail: Emma,
        },
        {
            stars: icon2,
            name: 'David H.',
            company: "Educational Coordinator",
            badges: review,
            para: "Our experience with Infinity Animations for our motion graphics project was nothing short of amazing. We needed high-quality promotional videos for our social media campaigns, and their team delivered spectacular results. The animations were visually striking and perfectly aligned with our brand's messaging. Their innovative techniques and creativity made our content stand out, significantly boosting our online engagement. Choosing Infinity Animations, a leading NYC animation studio, was one of the best decisions for our marketing efforts. Their professionalism and dedication are truly commendable.",
            thumbnail: David,
        },
        {
            stars: icon2,
            name: 'Michael J.',
            company: "Marketing Director",
            badges: googleReview,
            para: "Infinity Animations transformed our vision into a stunning reality with their exceptional 3D animation skills. We needed a lifelike and immersive animation for our product launch, and their team delivered beyond our expectations. Their expertise and attention to detail were evident in every frame. The result was a dynamic and engaging animation that captivated our audience. Working with such a talented and dedicated team reaffirmed their position as a top animation studio in New York. I wouldn't hesitate to work with them again.",
            thumbnail: Michael,
        },
        {
            stars: icon2,
            name: 'Alex Mitchell',
            badges: clutchReview,
            para: 'Choosing Animating Studio for our interactive project was the best decision we made. Their commitment to quality and innovation is truly commendable. The animations and experiences they crafted for us not only engaged our audience but also elevated our brand presence. A talented team that turns ideas into animated brilliance!',
            thumbnail: Alex,
        },
    ]
    const clientReadSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    // ======== FancyBox
    function Fancybox(props) {
        const containerRef = useRef(null);
        useEffect(() => {
            const container = containerRef.current;
            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};
            NativeFancybox.bind(container, delegate, options);
            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        }, [props.delegate, props.options]);
        return <div ref={containerRef}>{props.children}</div>;
    }
    // video code start
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };
    return (
        <section className='pt-[50px] lg:py-[90px] bg-white relative'>
            <Image src={AwardBg} alt='Inifnity Animation' fill={true} className='z-[1] object-cover object-center' />
            <div className="px-5 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 items-center relative z-10">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] xl:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center sm:text-left mb-5 sm:mb-2'>Let’s Read What <span className='text-[#F5090B]'>Our Clients</span> Have To Say</h2>
                    </div>
                    <div className="hidden lg:block lg:col-span-3"></div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                        <div className="flex items-center justify-between sm:justify-end gap-x-4 lg:gap-x-12 border-b-[3px] border-[#DFDFDF] pb-3">
                            <div className="w-[20%] sm:w-[30%] relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-[-27px] lg:after:h-full lg:after:w-[3px] lg:after:bg-[#DFDFDF]">
                                <a href='https://g.page/r/CdxfyZwVv9naEBM/'>
                                    <Image src={googleReview} alt='Infinity Animations' />
                                </a>
                            </div>
                            <div className="w-[20%] sm:w-[30%] relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-[-27px] lg:after:h-full lg:after:w-[3px] lg:after:bg-[#DFDFDF]">
                                <a href='https://clutch.co/profile/infinity-animations#highlights'>
                                    <Image src={clutchReview} alt='Infinity Animations' />
                                </a>
                            </div>
                            <div className='w-[20%] sm:w-[30%]'>
                                <a href='https://www.goodfirms.co/company/infinity-animations'>
                                    <Image src={review} alt='Infinity Animations' />
                                </a>
                            </div>
                        </div>
                        <p className='text-black text-[14px] xl:text-[17px] leading-[25px] lg:leading-[27px] text-center italic poppins pt-2'>"See what our clients say about our exceptional service!"</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center relative z-10">
                    <div className="col-span-12 ">
                        <Slider {...clientReadSlider} className='clientReadSliderlp w-full h-full absolute bottom-[-10px] lg:bottom-[-85px] pt-16'>
                            {testiContentNew2.map((testimonial, index) => (
                                <div className="px-1 sm:px-4">
                                    <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                        <div className='grid grid-cols-12 gap-y-10 gap-x-1 md:gap-x-4 items-center' onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                            <div className="col-span-12 lg:col-span-5">
                                                {testimonial.video ? (
                                                    <Link href={testimonial.video} datafancybox="gallery">
                                                        <div className='w-full h-[310px] box-testi relative'>
                                                            <div className='w-full h-[310px] flex justify-center items-center overlay-div-testi group'>
                                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[30px] w-full h-[300px] md:h-full object-cover " >
                                                                    <source src={testimonial.video} type="video/mp4" />
                                                                </video>
                                                                <div className="overlay-testi rounded-[30px] w-full h-[310px] md:h-full">
                                                                </div>
                                                            </div>
                                                            <div className="absolute left-0 right-0 mx-auto text-center w-6/12 xl:w-4/12 bottom-[-20px] bg-white rounded-[6px] shadow-xl py-[7px]">
                                                                <h6 className="text-[16px] md:text-[20px] poppins font-semibold leading-[35px] text-black">{testimonial.name}</h6>
                                                            </div>
                                                            <div className="videoDiv absolute left-0 right-0 bottom-0 top-0 m-auto flex items-center justify-center">
                                                                <Image src={PlayIcon} alt='Infinity Animations' />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <div className='w-[100px] sm:w-[150px] h-[250px] md:h-[184px] box-testi '>
                                                        <div className='w-[100px] sm:w-[150px] h-[150px]  md:h-[180px] flex justify-center items-center  overlay-div-testi'>
                                                            <Image
                                                                src={testimonial.thumbnail}
                                                                alt="Infinity Animations"
                                                                className='rounded-[30px] w-[100px] sm:w-[150px] h-[150px]  md:h-[480px]' />
                                                            <div className="overlay-testi rounded-[30px] w-[100px] sm:w-[150px] h-ful">
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-span-12 lg:col-span-7">
                                                <div className='pe-[15px]'>
                                                    <div className="client ms-[15px]">
                                                        <div className="flex items-center justify-end gap-x-5">
                                                            <Image src={testimonial.badges} alt="Infinity Animations" className='w-[20%]' />
                                                        </div>
                                                        <div className="mt-3 lg:mt-5">
                                                            <p className="text-black text-[11px] sm:text-[13px] xl:text-[15px] leading-[24px] xl:leading-[30px] lg:w-11/12 ml-auto poppins mb-5 lg:mb-10 text-right">
                                                                {testimonial.para}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fancybox>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClient
