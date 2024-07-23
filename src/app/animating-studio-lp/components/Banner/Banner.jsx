import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Images
import Chats from "media/infinity-studio-lp-new/banner-chat.svg"

const Banner = () => {
    return (
        <section className='pt-[115px] md:pt-[150px] 3xl:pt-[250px] pb-[60px] md:pb-[100px]'>
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6">
                        <div className="txt">
                            <h1 className='text-[40px] font-semibold poppins leading-[50px] mb-5'>Boost Sales With Animation Services.Instantaneously Forge Animatedexplainer Videos!</h1>
                            <p className='text-[16px] poppins leading-[25px] font-normal xl:pr-[80px]'>Transform Your Ideas into Visually Engaging Animated Stories, Tailored to Resonate with Your Audience & Elevate your Brand.</p>
                            <div className="flex items-center gap-4 lg:gap-8 pt-5 lg:pt-9">
                                <div>
                                    <Link href="javascript:;" className='flex items-center justify-center text-[14px] xl:text-[16px] text-white font-semibold poppins ml-[10px] h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-3xl duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
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
                        </div>
                    </div>
                    <div className="col-span-6"></div>
                </div>
            </div>
        </section>
    )
}

export default Banner
