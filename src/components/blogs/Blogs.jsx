"use client"
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from "./blog.module.css"
//===== Images 
import author from "media/blogs/author.png"
import verified from "media/blogs/verified.png"
import arrow from "media/blogs/arrow.png"
import Blog1 from "media/blogs/blog1.png"
import Blog2 from "media/blogs/blog2.png"
import Blog3 from "media/blogs/blog3.png"

const tabInfo = [
    { label: "2D Animations", index: 0 },
    { label: "3D Animation", index: 1 },
    { label: "Architectural Animation", index: 2 },
    { label: "CGI & VFX", index: 3 },
    { label: "Infographics", index: 4 },
    { label: "Motion Graphics", index: 5 },
];

const Blogs = () => {

    return (
        <>
            <section className={`w-full flex py-8 lg:py-16 mt-[125px] lg:mt-0`}>
                <div className="container">
                    <div className="w-full lg:w-[90%] mx-auto">
                        <ul className="bg-[#4A4A4A] h-full lg:h-[50px] flex flex-wrap justify-around text-sm font-medium text-center gap-3 md:gap-5 rounded-xl">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`flex items-center py-3 h-full text-[15px] font-normal font-sans text-white cursor-pointer hover:bg-primary-100 px-5 rounded-lg`}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col  md:grid grid-cols-12 gap-10 mt-10 md:mt-16 lg:mt-20">
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog1} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog2} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog3} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog3} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog1} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog2} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog1} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog2} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:col-span-6 lg:col-span-4">
                                <div className="bg-[#262626] rounded-2xl flex flex-col gap-[28px]">
                                    <div className="blogImg">
                                        <Image src={Blog3} alt="Infinity Animations" />
                                    </div>
                                    <div className={`${styles.blogContent} px-5 flex flex-col gap-2`}>
                                        <h5 className="text-[18px] text-primary-100 font-normal font-sans mb-0">Architectural Animation</h5>
                                        <h4 className="text-[20px] md:text-[24px] xl:text-[28px] text-white leading-tight font-bold font-sans mb-0">Be the First to Hire Our Professional Animators</h4>
                                        <p className="text-[16px] text-white font-normal font-sans mb-0">Discover unparalleled creativity at Cloud Animations, your gateway to transformative visual storytelling. As one of the leading animation studios in Austin,</p>
                                    </div>
                                    <div className="aboutBlog flex flex-row items-center justify-between px-5 pb-5">
                                        <div className="author flex flex-row items-center w-full gap-3">
                                            <div className="w-[20%]">
                                                <Image src={author} alt="Infinity Animations" />
                                            </div>
                                            <div className="relative">
                                                <Image src={verified} alt="Infinity Animations" className="absolute right-[-18%] top-[14%] w-[10%]" />
                                                <h4 className="text-[15px] xl:text-[20px] text-white font-semibold font-sans mb-0">James D. Surratt</h4>
                                                <h5 className="text-[12px] xl:text-[15px] text-white font-normal font-sans mb-0">Animation Manager</h5>
                                            </div>
                                        </div>
                                        <Link href="javascript:;" className={`${styles.readMore} flex flex-row items-center justify-end gap-3 pb-2`}>
                                            <span className="text-[16px] text-white font-normal font-sans mb-0">Read More</span>
                                            <Image src={arrow} alt="Infinity Animations" className="w-[20%]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <button className="text-[16px] font-sans bg-prime text-white w-max px-12 py-3 rounded-lg">Load More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs