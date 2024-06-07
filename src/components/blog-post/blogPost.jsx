import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Profile from "media/inner-blogs/profile-hero.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';


const BlogPost = () => {
    const tabInfo = [
        {
            subTitle: (<> Architectural Animation</>),
            image: "https://player.vimeo.com/progressive_redirect/playback/950010334/rendition/720p/file.mp4?loc=external&log_user=0&signature=a761e4cb6edbbad24b418c5e42ebcc25598aa36503bb5e3f218b69efbb9a666b",
            title: "Be the First to Hire Our Professional Animators",
            para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin.`
        },
        {
            subTitle: (<> Architectural Animation</>),
            image: "https://player.vimeo.com/progressive_redirect/playback/950011852/rendition/720p/file.mp4?loc=external&log_user=0&signature=15e9c340553571fedce72842f58c3e0af4fcafb7bbda0938d479a2246d9f7e06",
            title: "Be the First to Hire Our Professional Animators",
            para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,`
        },
        {
            subTitle: (<> Architectural Animation</>),
            image: "https://player.vimeo.com/progressive_redirect/playback/950016751/rendition/720p/file.mp4?loc=external&log_user=0&signature=029bced4bb0cb9e41cb9accc4e9c35fc8abd08ce894378fd6764f648b8a20a72",
            title: "Be the First to Hire Our Professional Animators",
            para: `Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,`
        },
    ];

    // Slider Setting
    const testiSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            }
        ]
    };
    // ======== Video
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
            <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16`}>
                <div className="container">
                    <div className="grid grid-cols-12 gap-6 mt-[65px] md:mt-0">
                        <div className="col-span-12 text-center">
                            
                            <h2 className={`text-[30px] sm:text-[35px] lg:text-[45px] xl:text-[55px] font-bold font-sans text-[#FFF] leading-tight mb-8 capitalize`}>
                                Related Post
                            </h2>
                        </div>
                    </div>
                    <div className="lg:block hidden py-[55px]">
                        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-16">
                            {tabInfo.map((items, i) => (
                                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                    <div className="card rounded-[20px] shadow-2xl h-full bg-[#262626] ">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='border rounded-[20px]'>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-[20px]" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content px-[25px] py-[25px]">
                                            <h5 className='text-[#FF2D4A] text-opacity-90 text-[14px] sm:text-[16px] w-full font-light font-sans leading-[20px] tracking-wider text-start pt-[10px] pb-[15px]'>
                                                {items.subTitle}
                                            </h5>
                                            <h3 className={`text-white text-[20px] md:text-[25px] poppins font-normal font-sans leading-[23px] md:leading-[33px] text-start`}>
                                                {items.title}
                                            </h3>
                                            <p className="text-[14px] xl:text-[16px] font-sans text-white text-opacity-80 font-light leading-[1.52857143] text-start py-[15px]">
                                                {items.para}
                                            </p>

                                            <div className="grid grid-cols-6  ">
                                                <div className='col-span-4 text-center flex items-start  '>
                                                    <div className="grid grid-cols-12  pt-2">
                                                        <div className="col-span-3">
                                                            <Image src={Profile} />
                                                        </div>
                                                        <div className="col-span-9 flex flex-col  text-start ps-3 pe-[35px]">
                                                            <span className=' text-[16px] font-normal poppins text-white text-opacity-80'>James D. Surratt</span>
                                                            <span className=' text-[13px] font-normal poppins text-white text-opacity-80'>Animation Manager</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className=' py-[15px] col-span-2 flex items-start justify-end'>
                                                    <div className="flex items-center justify-between border-b-2 border-white-500 w-[100px]">
                                                        <p className="text-[14px] xl:text-[16px] font-sans text-[#fff] font-light leading-[1.52857143] text-start text-white text-opacity-80">
                                                            Read More
                                                        </p>
                                                        <FaArrowRightLong />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden block">
                        <Slider {...testiSlider} className="typeSlider">
                            {tabInfo.map((items, i) => (
                                <div className='p-3'>
                                    <div className="card rounded-[20px] shadow-2xl h-full bg-[#262626] ">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause} className='border rounded-[20px]'>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-[20px]" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content px-[25px] py-[25px]">
                                            <h5 className='text-[#FF2D4A] text-opacity-90 text-[14px] sm:text-[16px] w-full font-light font-sans leading-[20px] tracking-wider text-start pt-[10px] pb-[15px]'>
                                                {items.subTitle}
                                            </h5>
                                            <h3 className={`text-white text-[20px] md:text-[25px] poppins font-normal font-sans leading-[23px] md:leading-[33px] text-start`}>
                                                {items.title}
                                            </h3>
                                            <p className="text-[14px] xl:text-[16px] font-sans text-white text-opacity-80 font-light leading-[1.52857143] text-start py-[15px]">
                                                {items.para}
                                            </p>

                                            <div className="grid grid-cols-6  ">
                                                <div className='col-span-4 text-center flex items-start  '>
                                                    <div className="grid grid-cols-12  pt-2">
                                                        <div className="col-span-3">
                                                            <Image src={Profile} />
                                                        </div>
                                                        <div className="col-span-9 flex flex-col  text-start ps-3 pe-[35px]">
                                                            <span className='text-white text-[16px] font-normal poppins text-white text-opacity-80'>James D. Surratt</span>
                                                            <span className='text-white text-[13px] font-normal poppins text-white text-opacity-80'>Animation Manager</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className=' py-[15px] col-span-2 flex items-start justify-end'>
                                                    <div className="flex items-center justify-between border-b-2 border-white-500 w-[100px]">
                                                        <p className="text-[14px] xl:text-[16px] font-sans text-[#fff] font-light leading-[1.52857143] text-start text-white text-opacity-80">
                                                            Read More
                                                        </p>
                                                        <FaArrowRightLong />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card rounded-[10px] bg-black shadow-2xl pt-[25px] px-[20px] pb-[35px] h-[375px]">
                                        <div onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                                            <video loading="lazy" muted loop preload="auto" autoPlay={false} className="w-full h-full object-cover rounded-lg" >
                                                <source src={items.image} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="content">
                                            <h3 className='text-[#fff] text-[20px] md:text-[25px] font-bold font-sans py-[20px] leading-[23px] md:leading-[33px] text-center hover:text-[#FF2D4A]'>{items.title}</h3>
                                            <p className='text-[14px] xl:text-[16px] font-sans text-[#fff] font-normal leading-[1.52857143] md:px-[10px] text-center '>{items.para}</p>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPost
