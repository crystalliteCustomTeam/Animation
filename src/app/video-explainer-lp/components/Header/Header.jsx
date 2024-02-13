import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

//===== Images 
import Logo from "media/video-explainer/logo.gif"
import UK from "media/video-explainer/flag-icon.png"
import Chat from "media/video-explainer/cht-icon.png"


const HeaderLP = () => {
    return (
        <>
            <header className='pt-5 '>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-4 xl:col-span-5">
                            <div className="logo">
                                <Image src={Logo} alt='logo' width={150} className='ml-auto lg:ml-0 mr-auto' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 xl:col-span-7 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex items-center gap-x-4 xl:gap-x-7'>
                                    <li>
                                        <Link href="mailto:queries@infinityanimations.com" className='flex items-center'>
                                            <EnvelopeIcon className='w-[25px] h-[25px]' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>queries@infinityanimations.com</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+1-716-300-1135" className='flex items-center'>
                                            <Image src={UK} alt='UK' className='w-[23px] h-[16px] object-contain' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>
                                                +1-716-300-1135
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+1-716-300-1135" className='flex items-center'>
                                            <Image src={Chat} alt='UK' className='w-auto object-contain grayscale-[1] brightness-[100]' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>
                                                Live Chat
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel:+1-716-300-1135" className='flex items-center text-[13px] text-white font-[700] font-sans bg-black ml-[10px] py-[10px] px-[12px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all'>
                                            Get Started
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderLP
