import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Images
import Chats from "media/infinity-studio-lp-new/banner-chat.svg"
import BannerLogos from "media/infinity-studio/bannerLogos.png"
import BannerLogosTwo from "media/infinity-studio-lp-new/bannerLogosTwo.png"
import Logo1 from "media/infinity-studio-lp-new/form-1.png"
import Logo2 from "media/infinity-studio-lp-new/form-2.png"

const Banner = () => {
    const backgroundVideo = 'https://player.vimeo.com/progressive_redirect/playback/950015917/rendition/720p/file.mp4?loc=external&log_user=0&signature=e0789e199bc0374e4971e5fc0b408a23ea883170eeb1fa2500dbaf2d0117d095';

    return (
        <section className='pt-[115px] md:pt-[150px] 3xl:pt-[250px] pb-[60px] md:pb-[100px] relative h-full'>
            <div className="video-div w-full h-[480px] md:h-full absolute top-0 z-[-1] before:content-[''] before:bg-[#000] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[90] before:opacity-[0.7]">
                <video id="background-video" src={backgroundVideo} autoPlay loop muted className='relative h-full xl:left-0 w-full object-cover'>
                </video>
            </div>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-y-5 md:gap-y-10 items-center">
                    <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                        <div className="txt">
                            <h1 className='text-[25px] lg:text-[35px] font-semibold poppins leading-[35px] lg:leading-[50px] mb-5'>Boost Sales With Animation Services.Instantaneously Forge Animatedexplainer Videos!</h1>
                            <p className='text-[14px] md:text-[16px] poppins leading-[25px] font-normal xl:pr-[20px]'>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.</p>
                            <div className="flex items-center gap-4 lg:gap-8 pt-5 lg:pt-9">
                                <div>
                                    <Link href="javascript:;" className='flex items-center justify-center text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins ml-[10px] h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                                        Call Now
                                    </Link>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image src={Chats} alt='Infinity Animation' />
                                    <div>
                                        <p className='text-[15px] leading-tight text-white poppins font-normal '>Chat Now to Avail 50% OFF</p>
                                        <span className='text-[#0DEB48] poppins text-[17px] font-semibold'>
                                            Live Chat
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-7 pt-5 lg:pt-9'>
                                <Image src={BannerLogos} alt='Infinity Animation' className='w-6/12' />
                                <Image src={BannerLogosTwo} alt='Infinity Animation' className='w-4/12' />
                            </div>
                        </div>
                    </div>
                    <div className="2xl:block hidden 2xl:col-span-1"></div>
                    <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                        <div className='bg-[#FF2D4B] rounded-[19px] py-12 px-6 xl:px-8 relative '>
                            <div className="flex items-center gap-x-4">
                                <Image src={Logo1} alt='Infinity Animation' height={100} className='mt-[-49px]' />
                                <p className='text-[15px] md:text-[17px] font-semibold leading-[22px] md:leading-[26px] text-white poppins'>
                                    SIGN-UP & GET UPTO <span className='text-[#FFCC00]'>50%</span> Off <br className='lg:block hidden' />
                                    ON ALL TYPE OF VIDEO SERVICES
                                </p>
                            </div>
                            <div className="logo absolute right-[-16px] top-[2px] xl:top-[25px]">
                                <Image src={Logo2} alt='Infinity Animation' width={125} height={60} />
                            </div>
                            <form action="javascript:;" className='pt-5 lg:pt-8'>
                                <div className="name mb-4">
                                    <input type="text" placeholder='Name' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' />
                                </div>
                                <div className="number mb-4">
                                    <input type="tel" placeholder='Phone Number' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' />
                                </div>
                                <div className="email mb-4">
                                    <input type="email" placeholder='Email' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[50px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0' />
                                </div>
                                <div className="message mb-4">
                                    <textarea name="message" placeholder='Tell us about your Project' className='text-[14px] md:text-[16px] font-normal leading-[25px] w-full h-[185px] text-[#0000008e] poppins px-4 rounded-[5px] border border-[#00000029] focus:outline-0 pt-4'></textarea>
                                </div>
                                <div className="btn">
                                    <button className='h-[50px] w-full bg-black rounded-[5px] poppins text-[14px] md:text-[16px] leading-[25px] font-semibold'>Get a Free Quote</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
