import React from 'react'
// icons 
import { FaPaperPlane } from "react-icons/fa";
// Images 
import logo from "media/images/logo.gif";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header className='pb-3 pt-3 fixed top-0 z-[9992] w-full bg-white'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="logo">
                            <Image src={logo} alt='Infinity Animations' width={150} className='w-[70%] md:w-[50%] lg:w-[28%]' />
                        </div>
                        <div className='flex items-center gap-x-8'>
                            <div className="livechat">
                                <Link href="javascript:;" className='relative text-[#282828] text-[20px] font-[700] pl-[17px] font-sans'>
                                    <span className='bg-[#f36e16] w-[8px] h-[8px] absolute left-0 top-0 bottom-0 m-auto rounded-[30px] scale-100 transform_scale'></span>
                                    Live Chat
                                </Link>
                            </div>
                            <div className="btn1">
                                <Link href="tel:;" className='text-[16px] border border-[#f36e16] rounded-[30px] text-[#282828] font-[700] font-sans py-[12px] px-[35px] hover:bg-[#f36e16] hover:duration-700 duration-700 ease-in-out hover:text-white'>
                                    +1-833-666-6684
                                </Link>
                            </div>
                            <div className="btn2">
                                <Link href="tel:;" className='text-[16px] rounded-[30px] text-white font-[700] font-sans py-[12px] px-[35px] bg-[#f36e16] w-[220px] flex items-center gap-x-2'>
                                    <FaPaperPlane />
                                    Get A Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header