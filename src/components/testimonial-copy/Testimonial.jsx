"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from "media/testimonial-copy/testi-colon.webp";
import testimonialBg from "media/testimonial-copy/sec2-bg.webp";
import testimonialIcon from "media/testimonial-copy/port-cloud-icon.webp";
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"


function TestimonialCopy({ content }) {
    const { title, para, testiContentCopy } = content;
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1024,
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
        });
        return <div ref={containerRef}>{props.children}</div>;
    }

    return (
        <section className={`w-full py-8 md:py-12 lg:py-16 justify-center relative `}>
            <Image src={testimonialBg} className="absolute w-full   sm:block hidden -z-1 testimonialBg" alt="Infinity Animation" />
            <div>
                <div className='flex items-center justify-center py-[55px]'>
                    <div className='w-full text-center'>
                        <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-3">
                            {title}
                        </h1>
                        <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                            {para}
                        </p>
                    </div>
                </div>
                <div className={`py-5`}>
                    <Slider {...testiSlider} >
                        {testiContentCopy.map((testimonial, index) => (
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div className={` w-full h-full group flex justify-center`}>
                                    <div className='flex bg-[#fff0f1] w-[520px] h-[185px] rounded-full mx-4 box'>
                                        <Link key={index} href={testimonial.video} datafancybox="gallery" >
                                            <div className='w-[180px] h-[184px] overlay-div'>
                                                <Image
                                                    src={testimonial.thumbnail}
                                                    alt="Infinity Animations"
                                                    className='w-full h-full rounded-full ' />
                                                <div className="overlay">
                                                    <Image src={testimonialIcon} width="45" height="45" className="img-fuild" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className='w-[320px] ps-4 pe-[15px] flex flex-col justify-between py-3'>
                                            <div className='flex '>
                                                <Image
                                                    src={quote}
                                                    alt="Infinity Animations"
                                                    width={30}
                                                    height={30}
                                                    className='rounded-full ' />
                                                <h3 className="text-[20px] font-semibold font-sans ps-3 text-black">
                                                    {testimonial.name}
                                                </h3>
                                            </div>
                                            <div className=''>
                                                <p className="text-[11px] xl:text-[14px] font-sans font-light text-black testmonial-copy-para">
                                                    {testimonial.para}
                                                </p>
                                            </div>
                                            <div className=''>
                                                <Image
                                                    src={testimonial.stars}
                                                    className="w-[30%]" alt='Infinity Animation' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fancybox>
                        ))}
                    </Slider>
                </div>
                <div className={`py-5`}>
                    <Slider {...testiSlider} >
                        {testiContentCopy.map((testimonial, index) => (
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div className={` w-full h-full group flex justify-center`}>
                                    <div className='flex bg-[#fff0f1] w-[520px] h-[185px] rounded-full mx-4 '>
                                        <Link key={index} href={testimonial.video} datafancybox="gallery" >
                                            <div className='w-[180px] h-[184px] '>
                                                <Image
                                                    src={testimonial.thumbnail}
                                                    alt="Infinity Animations"
                                                    className='w-full h-full rounded-full ' />
                                            </div>
                                        </Link>
                                        <div className='w-[320px] ps-4 pe-[15px] flex flex-col justify-between py-3'>
                                            <div className='flex '>
                                                <Image
                                                    src={quote}
                                                    alt="Infinity Animations"
                                                    width={30}
                                                    height={30}
                                                    className='rounded-full ' />
                                                <h3 className="text-[20px] font-semibold font-sans ps-3 text-black">
                                                    {testimonial.name}
                                                </h3>
                                            </div>
                                            <div className=''>
                                                <p className="text-[11px] xl:text-[14px] font-sans font-light text-black testmonial-copy-para">
                                                    {testimonial.para}
                                                </p>
                                            </div>
                                            <div className=''>
                                                <Image
                                                    src={testimonial.stars}
                                                    className="w-[30%]" alt='Infinity Animation' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fancybox>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default TestimonialCopy