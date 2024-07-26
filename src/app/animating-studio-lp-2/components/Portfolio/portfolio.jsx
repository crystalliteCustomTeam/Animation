"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// icons
import PlayIcon from "media/icons/play.png" 

const tabs = ["Hybrid Animation", "3D Animation", "2D animation", "Whiteboard Animation", "Motion Graphics"];

const Portfolio = () => {
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
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
        });

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
        <>
            <section className={`w-full flex items-center justify-start pb-12 pt-6 py-[50px] lg:py-[90px] bg-[#F3F3F3]`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className={`text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2`}>
                                <span className='text-[#F5090B]'>Animated Videos</span> That Deliver Results
                            </h2>
                            <p className="text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-7/12 mx-auto mb-5 md:mb-0">
                                Our creative prospectus, over the years, has garnered quite a reputation for itself. <br className='lg:block hidden' />
                                Here’s the evidence.
                            </p>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-12`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-2 lg:gap-5 mx-auto">
                            {tabs.map((tab, index) => (
                                <li key={index}
                                    className={`w-max px-[10px] lg:px-[35px] h-[35px] lg:h-[55px] flex items-center justify-center text-[12px] lg:text-[18px] font-semibold poppins border rounded-[27px] cursor-pointer border-primary-100 hover:bg-[#ff2d4b] hover:text-white hover:duration-700 duration-700 ease-in-out ${activeTab === index ? 'bg-[#FF2D4B] text-white' : 'bg-transparent text-black'}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab}
                                </li>
                            ))}
                        </ul>
                        <div className={`tabs-content pt-8 lg:pt-12`}>
                            {activeTab === 0 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-3  xl:gap-10'>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 1 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-3  xl:gap-10'>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 2 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-3  xl:gap-10'>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 3 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-3  xl:gap-10'>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                            {activeTab === 4 && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-12 justify-center items-center gap-3  xl:gap-10'>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%] flex flex-col gap-[22px]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-[323px] overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='col-span-12 md:col-span-6 lg:col-span-4 w-[100%] h-[100%]'>
                                            <Link href="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                    <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                        <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                            <source src="https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969" type="video/mp4" />
                                                        </video>
                                                        <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                        {/* =============== */}
                        {/* <div className={` mt-6 md:mt-10`}>
                            {videoData.map((tabData, index) => (
                                activeTab === index && (
                                    <Fancybox options={{ Carousel: { infinite: false } }} key={index}>
                                        <Slider {...testiSlider} className="testiSlider portfolio">
                                            {tabData.map((video, videoIndex) => (
                                                <div key={videoIndex} className='w-full h-full'>
                                                    <Link href={video.href} datafancybox="gallery" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                                        <div className={`w-full h-full overlay relative group overflow-hidden rounded-[10px]`}>
                                                            <div className='w-full h-full flex justify-center items-center overlay-div-testi'>
                                                                <video loading="lazy" muted loop preload="auto" autoPlay={false} className="rounded-[12px] w-full h-full object-cover">
                                                                    <source href={video.href} type="video/mp4" />
                                                                </video>
                                                                <div className="bg-black/[0.2] h-full w-full absolute left-[50%] top-[0%] translate-x-[-50%] group-hover:top-[100%] flex items-center justify-center">
                                                                    <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </Slider>
                                    </Fancybox>
                                )
                            ))}
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio