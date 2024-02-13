"use client"
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//===== Images 
import Blog1 from "media/blogs/blog-1.png"

const Blogs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
    };
    const renderDots = (dots, slider) => (
        <ul className="absolute right-0 bottom-0 z-50">
            {dots.map((dot, index) => (
                <li
                    key={index}
                    style={{
                        display: "inline-block",
                        margin: "0 5px",
                        opacity: index === currentSlide ? 1 : 0.6,
                        color: index === currentSlide ? 'white' : 'inherit',
                    }}
                >
                    {index + 1}
                </li>
            ))}
        </ul>
    );

    // Slider Setting
    const blogsSlider = {
        rows: 2,
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: handleBeforeChange,
        appendDots: renderDots,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className={`w-full flex py-8 lg:py-16 relative`}>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="col-span-12">
                                <h2 className='text-[45px] font-bold font-sans text-center mb-3 xl:mb-6'>Latest Posts</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Slider {...blogsSlider} className="blogsSlider">
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 px-2">
                                <div className="card backdrop-blur-sm bg-white/20 rounded-[30px]">
                                    <div className="img">
                                        <Image src={Blog1} alt='Infinity Animation' className='object-contain w-full' />
                                    </div>
                                    <div className="content p-4">
                                        <h3 className='text-[16px] sm:text-[20px] font-bold font-sans xl:w-9/12 leading-[20px] sm:leading-[24px]'>How Whiteboard Explainer Videos
                                            Inspire Audiences</h3>
                                        <p className='text-[13px] sm:text-[14px] font-light font-sans leading-[18px] pt-3 xl:w-8/12'>How Whiteboard Explainer Videos Inspire Audiences In today’s fast-paced world, capturing and keeping your audience’s</p>
                                    </div>
                                    <div className="card_bottom bg-second px-5 pt-5 pb-5 rounded-b-[30px] border-t border-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                                        <p className='text-[13px] font-sans font-light'>December 13, 2023 </p>
                                        <div className="btn">
                                            <Link href="javascript:;" className='bg-primary-100 text-[16px] px-7 py-2 border-2 border-white font-sans rounded-[5px] shadow-2xl'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <hr className="border border-[#707070] absolute bottom-[34px] left-[46%] 2xl:left-[48%] translate-x-[-48%] w-[75%] xl:w-[85%] 3xl:w-[68%] mx-auto z-0 sm:block hidden" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs