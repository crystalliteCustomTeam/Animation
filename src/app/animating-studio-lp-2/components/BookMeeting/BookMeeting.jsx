"use client"

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Images, Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// Images
import MaketBg from "media/infinity-studio-lp-new/marketing-bg.png";
import PlayIcon from "media/icons/play.png";
import RightArrow from "media/infinity-studio-lp-2/right-arrow.png"
import chatIcon from "media/infinity-studio-lp-2/chat-icon.svg"
import MeetingImage from "media/infinity-studio-lp-2/book-marketing.svg"

const BookMeeting = () => {
    //========= fancy box =========
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

    //========= video code start =========
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };

    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };

    return (
        <section className='relative py-[50px] lg:py-[90px]'>
            <Image src={MaketBg} alt='Infinity Animation' fill={true} className='z-[-1] object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] mb-3'>
                            Mastering The <span className='text-[#F5090B]'>Art</span> Of Video Animation <span className='text-[#F5090B]'>Services</span>
                        </h2>
                        <p className='text-white text-[13px] lg:text-[16px] poppins mb-5 lg:mb-20'>
                            We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-16 gap-y-14">
                    <div className="col-span-6">
                        <div className='group'>
                            <div className="border-2 rounded-[15px] group-hover:border-[#F5090B] group-hover:duration-700 duration-700 ease-in-out p-4 border-white h-full min-h-[320px] xl:min-h-[315px]">
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='min-h-[350px]'>
                                        <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover min-h-[320px] xl:min-h-[315px]">
                                                    <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                </video>
                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Fancybox>
                            </div>
                            <h3 className='poppins text-white text-[25px] leading-[38px] font-semibold pt-6 pb-5'><span className='text-[#F5090B]'>2D</span> Animation</h3>
                            <p className='text-white text-[13px] lg:text-[15px] poppins mb-8'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach</p>
                            <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                Make an Animation
                                <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className='group'>
                            <div className="border-2 rounded-[15px] group-hover:border-[#F5090B] group-hover:duration-700 duration-700 ease-in-out p-4 border-white h-full min-h-[320px] xl:min-h-[315px]">
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='min-h-[350px]'>
                                        <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover min-h-[320px] xl:min-h-[315px]">
                                                    <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                </video>
                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Fancybox>
                            </div>
                            <h3 className='poppins text-white text-[25px] leading-[38px] font-semibold pt-6 pb-5'><span className='text-[#F5090B]'>2D</span> Animation</h3>
                            <p className='text-white text-[13px] lg:text-[15px] poppins mb-8'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach</p>
                            <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                Make an Animation
                                <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className='group'>
                            <div className="border-2 rounded-[15px] group-hover:border-[#F5090B] group-hover:duration-700 duration-700 ease-in-out p-4 border-white h-full min-h-[320px] xl:min-h-[315px]">
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='min-h-[350px]'>
                                        <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover min-h-[320px] xl:min-h-[315px]">
                                                    <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                </video>
                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Fancybox>
                            </div>
                            <h3 className='poppins text-white text-[25px] leading-[38px] font-semibold pt-6 pb-5'><span className='text-[#F5090B]'>2D</span> Animation</h3>
                            <p className='text-white text-[13px] lg:text-[15px] poppins mb-8'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach</p>
                            <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                Make an Animation
                                <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className='group'>
                            <div className="border-2 rounded-[15px] group-hover:border-[#F5090B] group-hover:duration-700 duration-700 ease-in-out p-4 border-white h-full min-h-[320px] xl:min-h-[315px]">
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='min-h-[350px]'>
                                        <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover min-h-[320px] xl:min-h-[315px]">
                                                    <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                </video>
                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Fancybox>
                            </div>
                            <h3 className='poppins text-white text-[25px] leading-[38px] font-semibold pt-6 pb-5'><span className='text-[#F5090B]'>2D</span> Animation</h3>
                            <p className='text-white text-[13px] lg:text-[15px] poppins mb-8'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach</p>
                            <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                Make an Animation
                                <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className='group'>
                            <div className="border-2 rounded-[15px] group-hover:border-[#F5090B] group-hover:duration-700 duration-700 ease-in-out p-4 border-white h-full min-h-[320px] xl:min-h-[315px]">
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='min-h-[350px]'>
                                        <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover min-h-[320px] xl:min-h-[315px]">
                                                    <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                </video>
                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Fancybox>
                            </div>
                            <h3 className='poppins text-white text-[25px] leading-[38px] font-semibold pt-6 pb-5'><span className='text-[#F5090B]'>2D</span> Animation</h3>
                            <p className='text-white text-[13px] lg:text-[15px] poppins mb-8'>We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach</p>
                            <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-max px-5 tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                Make an Animation
                                <Image src={RightArrow} alt='Infinity Animation' className='w-[8%]' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className='bg-[#F5090B] rounded-[15px] py-8 lg:py-10 px-6 lg:px-8 relative'>
                            <h3 className='text-white poppins text-[25px] lg:text-[35px] leading-[40px] lg:leading-[45px] font-semibold'>Get A Quote</h3>
                            <h3 className='text-[#FFCC00] text-[42px] lg:text-[62px] leading-[52px] lg:leading-[72px] font-semibold poppins mb-4 lg:mb-6'>Today!</h3>
                            <p className='text-white text-[13px] lg:text-[14px] poppins mb-4 lg:mb-6'>We are a leading video animation company <br className='xl:block hidden' />
                                in the USA that has helped thousands of</p>
                            <div>
                                <Link href="javascript:;" className='bg-white h-[65px] w-max px-4 rounded-[6px] flex items-center gap-x-4'>
                                    <Image src={chatIcon} alt='Infinity Animation' />
                                    <div>
                                        <span className='text-black text-[10px] poppins font-semibold block'>Chat Now to Avail 50% OFF</span>
                                        <span className='text-black text-[20px] leading-[30px] font-semibold poppins block text-center'>Live Chat</span>
                                    </div>
                                </Link>
                            </div>
                            <div className='xl:block hidden absolute right-[-35px] top-[-35px]'>
                                <Image src={MeetingImage} alt='Infinity Animation' className='max-h-[380px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookMeeting;
