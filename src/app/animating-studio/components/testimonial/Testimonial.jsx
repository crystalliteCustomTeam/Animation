"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Fancybox
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import Play from "media/animating-studio/play.svg"
import styles from "./testimonial.module.css"

function Testimonial({ content }) {
    const { title, para, testiContentNew2 } = content;
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 2,
        swipeToSlide: true,
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
        ],
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
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
        <section className='pt-[40px] pb-0 md:pb-[20px] md:pt-[110px] '>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="mb-[40px]">
                    <h3 className='text-[#000000] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Testimonials</h3>
                    <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>How Our <span className="text-[#A70A0E]">Clients </span>Are Thanking Us</h2>
                    <p className='text-[#231F20] text-[16px] poppins font-[400] py-[13px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Our experts leave no stone unturned in providing the desired outcome of our clients</p>
                </div>
                <div className="mt-[25px] relative">
                    <Slider {...testiSlider} className="newvideoSlider animiStudio" ref={slider => {
                        sliderRef = slider;
                    }}>
                        {testiContentNew2.map((testimonial, index) => (
                            <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                <div className=" h-full group mb-8 px-2">
                                    <div className='sm:flex border rounded-[25px] px-[20px] sm:px-0 sm:ps-[20px] py-[15px]' onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                        {testimonial.video ? (
                                            <Link href={testimonial.video} datafancybox="gallery">
                                                <div className='sm:w-[180px] h-[220px] box-testi mb-auto relative '>
                                                    <div className='w-[100%] h-[100%] flex justify-center items-center  sm:relative group '>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover " >
                                                            <source src={testimonial.video} type="video/mp4" />
                                                        </video>
                                                        <div className="absolute rounded-[12px] w-[100px] sm:w-[150px] h-full group-hover:hidden">
                                                            <div className="w-[40px] h-[40px] bg-zinc-600 bg-opacity-75 rounded-[50px] p-1 absolute left-auto top-auto bottom-0 right-[-98%] sm:right-0 m-1">
                                                                <Image src={Play} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>
                                        ) : (
                                            <div className='sm:w-[250px] h-[220px] box-testi mb-auto'>
                                                <div className='w-full h-full flex justify-center items-center  relative '>
                                                    <Image
                                                        src={testimonial.thumbnail}
                                                        alt="Infinity Animations"
                                                        className='rounded-[12px] h-full w-full object-fill' />
                                                </div>
                                            </div>
                                        )}
                                        <div className='w-full lg:w-[90%] pt-2 sm:pt-0 sm:ps-2 md:ps-4 pe-[15px] flex flex-col justify-between my-auto'>
                                            <div className='flex mb-1'>
                                                <div>
                                                    <h5 className=" text-[15px] md:text-[18px] leading-[24px] font-semibold font-sans text-[#000]">
                                                        You Have right place
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className='my-2'>
                                                <p className="text-[11px] xl:text-[14px] font-sans font-light text-[#000] testmonial-location">
                                                    {testimonial.para}
                                                </p>
                                            </div>
                                            <div className='my-3'>
                                                <Image
                                                    src={testimonial.review}
                                                    className="w-[25%] lh:w-[35%]" alt='Infinity Animation' />
                                            </div>
                                            <div className=''>
                                                <h3 className=" text-[15px] md:text-[18px] leading-[24px] font-semibold font-sans text-[#000] ">
                                                    {testimonial.name}
                                                </h3>
                                                <h5 className=" text-[13px] md:text-[15px] leading-[24px] font-normal font-sans text-[#000]">
                                                    client
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fancybox>
                        ))}
                    </Slider>
                    <div className={`${styles.progress} xl:mt-[25px]`}>
                        <input
                            className={styles.progressFill}
                            onChange={e => sliderRef.slickGoTo(e.target.value)}
                            value={slideIndex}
                            type="range"
                            id="cowbell" name="cowbell" min="0" max="12"
                        />
                        <h5 className="text-[#231F20] text-[16px] poppins font-[400] pt-[15px]">
                            {slideIndex + 1} / {testiContentNew2.length}
                        </h5>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Testimonial;
