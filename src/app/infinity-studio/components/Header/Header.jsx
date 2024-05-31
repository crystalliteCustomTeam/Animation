import React, { useEffect, useState } from 'react'
import usePopup from '@/app/configs/store/Popup'
import Image from 'next/image'
//===== Images 
// import logo from "media/images/logo.gif";
import logo from "media/infinity-studio/logo.webp";
import Chat from "media/video-explainer/cht-icon.png"
import telephone from "media/icons/call.png";


const HeaderLP = () => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // ===============================================
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrollDown(scrollTop > 1 && scrollTop > lastScrollTop);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            <header className={`fixed left-0 top-0 py-5 z-50 w-full ${isScrolled ? 'bg-[#003465] shadow-lg' : 'bg-transparent'} ${isScrollDown ? 'pt-4 md:pt-3' : ''}`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6 lg:col-span-4 xl:col-span-5">
                            <div className="logo">
                                <Image src={logo} alt='logo' width={150} className='w-[70%] md:w-[50%] lg:w-[28%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 xl:col-span-7 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex justify-end items-center gap-x-4 xl:gap-x-7'>
                                    <li>
                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center gap-3 rounded-[5px] shadow-xl ml-[10px] py-[10px] px-[35px] bg-transparent border'>
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100]' />
                                            <span className='font-[400] text-[15px] text-white poppins tracking-[.3px] leading-[20px]'>
                                                Live Chat
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[15px] text-[#003262] font-[700] poppins bg-[#FFCC00] ml-[10px] py-[10px] px-[40px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all'>
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
