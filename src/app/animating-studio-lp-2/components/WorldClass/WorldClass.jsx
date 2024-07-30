import React from 'react'
import WorldClassSlider from './WorldClassSlider/WorldClassSlider'
// Images
import Chats from "media/infinity-studio-lp-new/chat-icon.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'

const WorldClass = () => {
    return (
        <section className='bg-white py-[50px] md:py-[90px]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-3'>
                            Trusted By <span className='text-[#F5090B]'>450+ World-Class</span> Startups And Established <span className='text-[#F5090B]'>Enterprises!</span>
                        </h2>
                        <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-10/12 mx-auto'>
                            We are a leading video animation company in the USA that has helped thousands of brands to broaden their product reach via fascinating explainer videos.We are a leading video
                        </p>
                    </div>
                </div>
            </div>
            <WorldClassSlider />
            <div className="flex items-center justify-center gap-3 pt-16">
                <div>
                    <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins ml-[10px] h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-[#FF2D4B] hover:duration-700 hover:transition-all'>
                        <FaPhoneAlt />
                        Call Now
                    </Link>
                </div>
                <div>
                    <Link href="javascript:;" className='flex items-center justify-center gap-x-2 text-[14px] xl:text-[14px] md:text-[16px] text-white font-semibold poppins h-[45px] w-[165px] tracking-[.3px] rounded-[5px] leading-[20px] duration-700 transition-all bg-black hover:duration-700 hover:transition-all'>
                        <Image src={Chats} alt='Infinity Animation' />
                        Live Chat
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WorldClass
