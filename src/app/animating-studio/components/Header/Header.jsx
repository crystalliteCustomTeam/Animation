import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import usePopup from '@/app/configs/store/Popup'
//===== Images 
import logo from "media/images/logo.gif";
import Chat from "media/video-explainer/cht-icon.png"
import telephone from "media/icons/call.png";
import email from "media/animating-studio/email.svg";


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
                <div className="px-4 sm:px-8 xl:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6 lg:col-span-3">
                            <div className="logo">
                                <Image priority src={logo} alt='logo' width={150} className='w-[70%] md:w-[50%]' />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-9 lg:block hidden">
                            <div className="nav_lists">
                                <ul className='flex justify-end items-center gap-x-2 xl:gap-x-7'>
                                    <li>
                                        <a href="mailto:queries@infinityanimations.com" className='flex items-center'>
                                            <Image src={email} className='w-[25px] h-[25px]' />
                                            <span className='text-[13px] text-white py-[10px] px-[8px] font-normal font-sans'>queries@infinityanimations.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='javascript:$zopim.livechat.window.show();' className='flex items-center justify-center text-[13px] xl:text-[15px] text-white font-normal font-sans bg-transparent xl:ml-[10px] py-[10px] px-[8px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all border border-white'>
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100]' />
                                            <span className='text-[13px] xl:text-[15px] text-white px-[8px] font-normal font-sans '>
                                                Live Chat
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={popupHandle} className='flex items-center text-[13px] xl:text-[15px] text-white font-normal font-sans bg-[#A70A0E]  xl:ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all'>
                                            Get A Quote
                                        </button>
                                    </li>
                                    <li>
                                        <a href='tel:833-666-6689' className='flex items-center text-[13px] xl:text-[15px] text-black font-normal font-sans bg-[#f6c501] xl:ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all'>
                                            Call Now: 1-833-666-6689
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-6 lg:hidden block">
                            <ul>
                                <li className='flex items-center justify-end'>
                                    <a href="tel:833-666-6689" className='flex items-center gap-x-2 text-[13px] xl:text-[15px] text-black font-normal font-sans bg-[#f6c501] xl:ml-[10px] py-[10px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl duration-700 transition-all hover:duration-700 hover:transition-all w-max'>
                                        <Image src={telephone} loading="lazy" width="56" height="52" class="w-[15px] brightness-100 invert-[1]" alt='Infinity Animations' />
                                        1-833-666-6689
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
