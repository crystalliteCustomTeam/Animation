"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Collapse } from "@material-tailwind/react";
// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// Images 
import logo from "media/images/logo.gif";
import BtnBg from "media/game-lp/btn-bg1.png"

const Header = () => {
    // Navlists
    const NavLists = [
        'Home',
        'Why Us',
        'Services',
        'Portfolio',
        'Process',
        'Pricing'
    ]

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1099 && setOpenNav(false),
        );
    }, []);
    return (
        <header className='pt-[25px] bg-black'>
            <div className="px-4 md:px-8 xl:max-w-7xl mx-auto">
                <div className="flex items-center justify-between gap-10">
                    <div className="logo w-[150px] sm:w-[190px] xl:w-[200px]">
                        <Image src={logo} alt='Infinity Animation' className='w-full' />
                    </div>
                    <div className='lists w-full hidden lg:block'>
                        <ul className={`flex items-center justify-center gap-x-[40px] xl:gap-x-[70px]`}>
                            {NavLists.map((content, index) => (
                                <li key={index} className='poppins text-[13px] xl:text-[16px] opacity-45 hover:duration-700 duration-700 hover:opacity-100 ease-in-out'>
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="btn w-[200px] lg:block hidden">
                        <Link href="javascript:;" className=' text-white text-[16px] font-light poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                            <Image src={BtnBg} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                            Contact Us Now
                        </Link>
                    </div>
                    <button onClick={() => setOpenNav(!openNav)} className="flex items-center gap-x-4 lg:hidden">
                        {openNav ? (
                            <>
                                <div className="btn w-[200px] sm:block hidden">
                                    <Link href="javascript:;" className=' text-white text-[16px] font-light poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                        <Image src={BtnBg} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                        Contact Us Now
                                    </Link>
                                </div>
                                <XMarkIcon className="h-[40px] w-[40px]" strokeWidth={2} />
                            </>
                        ) : (
                            <>
                                <div className="btn w-[200px] sm:block hidden">
                                    <Link href="javascript:;" className=' text-white text-[16px] font-light poppins w-[190px] h-[50px] flex items-center justify-center relative z-10'>
                                        <Image src={BtnBg} alt='Btn Background' fill={true} className='z-[-1] object-cover object-center' />
                                        Contact Us Now
                                    </Link>
                                </div>
                                <Bars3Icon className="h-[40px] w-[40px]" strokeWidth={2} />
                            </>
                        )}
                    </button>
                    {openNav && (
                        <Collapse open={openNav} className="block lg:hidden absolute top-[115px] left-0 w-full">
                            <ul className={`flex flex-col gap-[25px] bg-white pt-4`}>
                                {NavLists.map((content, index) => (
                                    <li key={index} className='poppins text-[13px] xl:text-[16px] text-black border-b-2 border-dashed border-black pb-3 px-6'>
                                        {content}
                                    </li>
                                ))}
                            </ul>
                        </Collapse>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header