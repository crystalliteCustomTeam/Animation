"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quote from "media/testimonial/testi-colon.webp";
import testimonialBg from "media/testimonial/sec2-bg.webp";
import play from "media/testimonial/play.png";
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

function TestimonialNew({ content }) {
    const { title, para, testiContentNew, testiContentNew2 } = content;
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
        }, [props.delegate, props.options]);
        return <div ref={containerRef}>{props.children}</div>;
    }

    return (
        <section className="w-full py-8 mb-24 lg:mb-32 md:py-12 lg:py-16 justify-center relative">
            <Image src={testimonialBg} className="absolute w-full sm:block hidden -z-1 testimonialBg" alt="Infinity Animation" />
            <div className="relative z-50">
                <div className='flex items-center justify-center pb-[55px]'>
                    <div className='w-full text-center'>
                        <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-none mb-3">
                            {title}
                        </h1>
                        <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-0 lg:mb-5">
                            {para}
                        </p>
                    </div>
                </div>
                <div>
                    <Slider {...testiSlider} className="videoSlider">
                        {testiContentNew.map((testimonial, index) => (
                            <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                <div className="w-full h-full group flex justify-center">
                                    <div className='flex bg-[#fff0f1] w-[520px] h-[185px] rounded-full mx-4 box'>
                                        {testimonial.video ? (
                                            <Link href={testimonial.video} datafancybox="gallery">
                                                <div className='w-[155px] h-[155px] md:w-[180px] md:h-[184px] overlay-div'>
                                                    <div className='w-full h-full rounded-full border border-[#00000033]'>
                                                        <video loading="lazy" playsinline="" muted loop="" preload="auto" autoplay="" poster="#" className="w-full h-full object-cover rounded-full" >
                                                            <source src={testimonial.thumbnail} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="overlay">
                                                        <Image src={play} className="w-[18%]" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className='w-[85%] h-[170px] md:w-[275px] md:h-[175px] lg:w-[180px] lg:h-[184px] mt-[7px] md:mt-[5px] lg:mt-0'>
                                                <Image
                                                    src={testimonial.thumbnail}
                                                    alt="Infinity Animations"
                                                    className='w-full h-full rounded-full' />
                                            </div>
                                        )}
                                        <div className='w-full lg:w-[320px] ps-2 md:ps-4 pe-[15px] flex flex-col justify-between py-3'>
                                            <div className='flex '>
                                                <Image
                                                    src={quote}
                                                    alt="Infinity Animations"
                                                    className='rounded-full w-[25px] h-[25px]' />
                                                <h3 className="w-[70%] md:w-auto text-[18px] md:text-[20px] leading-[24px] font-semibold font-sans ps-3 text-black">
                                                    {testimonial.name}
                                                </h3>
                                            </div>
                                            <div>
                                                <p className="text-[11px] xl:text-[14px] font-sans font-light text-black testmonial-copy-para">
                                                    {testimonial.para}
                                                </p>
                                            </div>
                                            <div>
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
                <div className="mt-12">
                    <Slider {...testiSlider} className="videoSlider">
                        {testiContentNew2.map((testimonial, index) => (
                            <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                <div className="w-full h-full group flex justify-center">
                                    <div className='flex bg-[#fff0f1] w-[520px] h-[185px] rounded-full mx-4 box'>
                                        {testimonial.video ? (
                                            <Link href={testimonial.video} datafancybox="gallery">
                                                <div className='w-[155px] h-[155px] md:w-[180px] md:h-[184px] overlay-div'>
                                                    <div className='w-full h-full rounded-full border border-[#00000033]'>
                                                        <video loading="lazy" playsinline="" muted loop="" preload="auto" autoplay="" poster="#" className="w-full h-full object-cover rounded-full" >
                                                            <source src={testimonial.thumbnail} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="overlay">
                                                        <Image src={play} className="w-[18%]" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className='w-[85%] h-[170px] md:w-[275px] md:h-[175px] lg:w-[180px] lg:h-[184px] mt-[7px] md:mt-[5px] lg:mt-0'>
                                                <Image
                                                    src={testimonial.thumbnail}
                                                    alt="Infinity Animations"
                                                    className='w-full h-full rounded-full' />
                                            </div>
                                        )}
                                        <div className='w-full lg:w-[320px] ps-2 md:ps-4 pe-[15px] flex flex-col justify-between py-3'>
                                            <div className='flex '>
                                                <Image
                                                    src={quote}
                                                    alt="Infinity Animations"
                                                    className='rounded-full w-[25px] h-[25px]' />
                                                <h3 className="w-[70%] md:w-auto text-[18px] md:text-[20px] leading-[24px] font-semibold font-sans ps-3 text-black">
                                                    {testimonial.name}
                                                </h3>
                                            </div>
                                            <div>
                                                <p className="text-[11px] xl:text-[14px] font-sans font-light text-black testmonial-copy-para">
                                                    {testimonial.para}
                                                </p>
                                            </div>
                                            <div>
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

export default TestimonialNew;
