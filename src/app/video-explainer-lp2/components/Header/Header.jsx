import React, { useEffect, useState } from 'react'
import usePopup from '@/app/configs/store/Popup'
import Image from 'next/image'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
//===== Images 
import logo from "media/images/logo.gif";
import UK from "media/video-explainer/flag-icon.png"
import Chat from "media/video-explainer/cht-icon.png"
import telephone from "media/icons/call.png";


const HeaderLP = () => { 

    const { popup, togglePopup } = usePopup();
    const [isFixed, setIsFixed] = useState(true);
    const popupHandle = () => {
        togglePopup(popup);
    }

    const [headercolor, setHeadercolor] = useState("bg-transparent");
    const [headerPad, setHeaderPad] = useState("py-3");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = 100; // Adjust this value according to your design
            if (currentScrollY > scrollThreshold) {
                setHeadercolor("bg-[#003465f0]");
                setHeaderPad("py-3");
            } else {
                setHeadercolor("bg-transparent");
                setHeaderPad("py-3");
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fixedClass = isFixed ? `fixed top-0 lg:relative ${headerPad}` : 'top-[20px]';

    return (
        <>
            <header className={`${headercolor} ${fixedClass} z-50 w-full`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6 lg:col-span-4 xl:col-span-5">
                            <div className="logo">
                                <Image src={logo} alt='logo' width={150} className='w-[70%] md:w-[50%] lg:w-[28%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 xl:col-span-7 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex items-center gap-x-4 xl:gap-x-7'>
                                    <li>
                                        <a href="mailto:queries@infinityanimations.com" className='flex items-center'>
                                            <EnvelopeIcon className='w-[25px] h-[25px] text-white' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>queries@infinityanimations.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:833-666-6689" className='flex items-center'>
                                            <Image src={UK} alt='UK' className='w-[23px] h-[16px] object-contain' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>
                                                833-666-6689
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center'>
                                            <Image src={Chat} alt='UK' className='w-auto object-contain grayscale-[1] brightness-[100]' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-[700] font-sans'>
                                                Live Chat
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[13px] text-white font-[700] font-sans bg-black ml-[10px] py-[10px] px-[12px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:bg-[#fb0d1c] hover:duration-700 hover:transition-all'>
                                            Get Started
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-span-6 lg:hidden block">
                            <ul>
                                <li>
                                    <a href="tel:833-666-6689" className='flex items-center justify-end gap-x-3 text-white font-sans'>
                                        <Image src={telephone} loading="lazy" width="56" height="52" class="w-[15px]" alt='Infinity Animations' />
                                        833-666-6689
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderLP
