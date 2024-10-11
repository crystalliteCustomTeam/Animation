import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images 
import Teliphone from "media/game-lp/number.png"
import Email from "media/game-lp/email.png"
import Location from "media/game-lp/location.png"
import BtnBg2 from "media/game-lp/formbtn.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaVimeo, FaYoutube } from 'react-icons/fa'


const Contact = () => {
    return (
        <>
            <section className='py-[50px] lg:py-[90px] bg-[#1C1C1C]'>
                <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                    <div className="grid grid-cols-12 items-center gap-x-6 5xl:gap-x-0 gap-y-8">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="txt">
                                <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] 5xl:text-[60px] leading-[50px] sm:leading-[50px] lg:leading-[60px] 5xl:leading-[90px] font-semibold text-white poppins mb-3'>Let’s Create Your Next
                                    Hit Game Together</h2>
                                <p className='text-[13px] sm:text-[15px] xl:text-[18px] leading-[25px] sm:leading-[30px] xl:leading-[33px] text-white poppins mb-7 lg:mb-10 lg:w-11/12 xl:pr-5'>Our mobile games deliver immersive experiences with intuitive controls and engaging gameplay. Designed for all devices, they offer seamless performance and stunning visuals.</p>
                                <div className="details">
                                    <div className="flex flex-wrap items-center justify-between pr-14 5xl:w-[75%]">
                                        <Link href="tel:;" className="flex items-center justify-center gap-4  mb-4 lg:mb-8">
                                            <Image src={Teliphone} alt='Number' />
                                            <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>833-666-6689</span>
                                        </Link>
                                        <Link href="mailto:queries@infinityanimations.com" className="flex items-center justify-center gap-4  mb-4 lg:mb-8">
                                            <Image src={Email} alt='Email' />
                                            <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>queries@infinityanimations.com</span>
                                        </Link>
                                    </div>
                                    <Link href="mailto:queries@infinityanimations.com" className="flex items-center gap-4 mb-4 lg:mb-7">
                                        <Image src={Email} alt='Email' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>One World Trade Center, Suite 8500, New York, 10007, United States</span>
                                    </Link>
                                    <Link href="mailto:queries@infinityanimations.com" className="flex items-center gap-4 mb-4 lg:mb-7">
                                        <Image src={Email} alt='Email' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>1024 Iron Point Rd, Folsom, CA 95630s</span>
                                    </Link>
                                    <Link href="mailto:queries@infinityanimations.com" className="flex items-center gap-4 mb-4 lg:mb-7">
                                        <Image src={Email} alt='Email' />
                                        <span className='text-[14px] xl:text-[17px] leading-[24px] xl:leading-[27px] font-normal poppins'>229 Yonge St Suite 400, Toronto, ON M5B 1N9, Canada</span>
                                    </Link>
                                </div>
                                <div className="socials_icons flex items-center gap-4 lg:gap-6 pt-5">
                                    <Link href="#href" className='group rounded-[5px] bg-[#2f2e3c] w-[50px] h-[50px] flex items-center justify-center'>
                                        <FaFacebook className='text-[25px] group-hover:scale-[1.1] group-hover:duration-1000 ease-in-out duration-1000' />
                                    </Link>
                                    <Link href="#href" className='group rounded-[5px] bg-[#2f2e3c] w-[50px] h-[50px] flex items-center justify-center'>
                                        <FaTwitter className='text-[25px] group-hover:scale-[1.1] group-hover:duration-1000 ease-in-out duration-1000' />
                                    </Link>
                                    <Link href="#href" className='group rounded-[5px] bg-[#2f2e3c] w-[50px] h-[50px] flex items-center justify-center'>
                                        <FaInstagram className='text-[25px] group-hover:scale-[1.1] group-hover:duration-1000 ease-in-out duration-1000' />
                                    </Link>
                                    <Link href="#href" className='group rounded-[5px] bg-[#2f2e3c] w-[50px] h-[50px] flex items-center justify-center'>
                                        <FaLinkedin className='text-[25px] group-hover:scale-[1.1] group-hover:duration-1000 ease-in-out duration-1000' />
                                    </Link>
                                    <Link href="#href" className='group rounded-[5px] bg-[#2f2e3c] w-[50px] h-[50px] flex items-center justify-center'>
                                        <FaYoutube className='text-[25px] group-hover:scale-[1.1] group-hover:duration-1000 ease-in-out duration-1000' />
                                    </Link>
                                    <Link href="#href" className='group rounded-[5px] bg-[#2f2e3c] w-[50px] h-[50px] flex items-center justify-center'>
                                        <FaVimeo className='text-[25px] group-hover:scale-[1.1] group-hover:duration-1000 ease-in-out duration-1000' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <div className="form bg-[#FB1E30] py-6 lg:py-10 px-5 xl:px-7 xl:w-11/12 ml-auto">
                                <div className="txt text-center">
                                    <h3 className='text-[30px] leading-[45px] font-semibold poppins mb-2 lg:mb-3'>Request A Free Quote</h3>
                                    <p className='text-[14px] leading-[21px] font-normal poppins mb-4 lg:mb-10'>Our game art team crafts unique and immersive visuals, tailored to elevate your game's world and captivate players.</p>
                                </div>
                                <div className="form">
                                    <form>
                                        <div className="flex flex-col md:flex-row items-center gap-x-4">
                                            <div className="name w-full mb-4">
                                                <input type="text" placeholder='Name *' className='text-[16px] leading-[33px] font-normal poppins 3 placeholder:text-black placeholder:text-[15px] px-4 h-[50px] w-full' />
                                            </div>
                                            <div className="email w-full mb-4">
                                                <input type="text" placeholder='Email *' className='text-[16px] leading-[33px] font-normal poppins text-black placeholder:text-black placeholder:text-[15px] px-4 h-[50px] w-full' />
                                            </div>
                                        </div>
                                        <div className="phone mb-4">
                                            <input type="text" placeholder='Phone Number *' className='text-[16px] leading-[33px] font-normal poppins text-black placeholder:text-black placeholder:text-[15px] px-4 h-[50px] w-full' />
                                        </div>
                                        <div className="message mb-4">
                                            <textarea name="message" placeholder='Message' className='text-[16px] leading-[33px] font-normal poppins text-black placeholder:text-black placeholder:text-[15px] px-4 h-[155px] w-full pt-2'></textarea>
                                        </div>
                                        <div className="btn">
                                            <button className=' text-white text-[16px] font-normal poppins w-full h-[50px] flex items-center justify-center relative z-10'>
                                                <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-fill object-center brightness-100 invert-[1]' />
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* // ========================= CopyRight Start ======================= // */}
            <section className='py-2'>
                <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div>
                            <p className='text-[15px] font-normal leading-[22px] md:leading-[33px] poppins text-white text-center md:text-left'>© Infinity Animations 2024. - All Rights Reserved By Dreamweave Media Inc</p>
                        </div>
                        <div className="flex items-center gap-4 lg:mr-[120px] xl:mr-[80px]">
                            <Link href="javascript:;" className='text-[15px] font-normal leading-[33px] poppins text-white'>
                                Terms of Services
                            </Link>
                            <Link href="javascript:;" className='text-[15px] font-normal leading-[33px] poppins text-white'>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* // ========================= CopyRight End ======================= // */}
        </>
    )
}

export default Contact
