"use client"
import usePopup from '@/app/configs/store/Popup';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Images
import Chat from "media/infinity-studio-lp-new/chat-icon.svg"

const Brand = ({ content }) => {
    const { popup, togglePopup } = usePopup();
    const popupHandle = () => {
        togglePopup(popup);
    }
    const { title, subtitle, desc, branImage, isBranImage, btnTxt, css, positionCss, callTxt, isColor } = content
    return (
        <>
            <section className='py-[30px] md:py-[70px] lg:pt-[60px] bg-white relative'>
                <div className={`mx-4 sm:mx-8 lg:max-w-7xl xl:mx-auto py-10 md:py-16 lg:py-10 px-4 sm:px-9 relative ${isColor ? "bg-[#EE8526] rounded-[30px]" : "bg-[#FA1F33] rounded-[17px]"}`}>
                    <div className="grid grid-cols-12">
                        {isBranImage ?
                            <div className="col-span-12 lg:col-span-7">
                                <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] mb-2'>{title}</h2>
                                <h5 className='text-white font-bold poppins leading-[31px] text-[18px] md:text-[25px] lg:w-11/12 pb-[7px]'>{subtitle}</h5>
                                <p className='text-white text-[13px] lg:text-[16px] poppins'>{desc}</p>
                                <div className='flex items-center gap-4'>
                                    <div className="btn mt-6 w-[250px]">
                                        <a href='tel:1-833-666-6689' class="text-[13px] md:text-[16px] font-bold leading-[25px] text-black bg-white rounded-[5px] max-width h-[44px] px-[10px] md:px-[20px] poppins flex items-center justify-center">{btnTxt}</a>
                                    </div>
                                    <div className="btn mt-6 w-[180px]">
                                        <a class="text-[13px] md:text-[16px] font-bold leading-[25px] text-white bg-black rounded-[5px] max-width h-[44px] px-[10px] md:px-[20px] poppins flex items-center justify-center" href="javascript:$zopim.livechat.window.show();">
                                            <Image src={Chat} alt='UK' className='object-contain grayscale-[1] brightness-[100] xl:block hidden' />
                                            <span className='text-[14px] xl:text-[16px] text-white px-[8px] fontbold poppins'>
                                                {callTxt}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div> :
                            <div className="col-span-12 lg:col-span-6">
                                <h2 className='text-white font-bold font-sans text-[25px] md:text-[35px] xl:text-[70px] leading-tight xl:leading-[70px] xl:mb-[20px]'>{title}</h2>
                                <h5 className='text-white font-bold font-sans leading-[31px] text-[25px] lg:w-11/12 pb-[5px]'>{subtitle}</h5>
                                <p className='text-[17px] text-white font-sans leading-[22px]'>{desc}</p>
                                <div className="btn mt-6">
                                    <a href='javascript:$zopim.livechat.window.show();' class="text-[13px] md:text-[16px] font-semibold leading-[25px] text-white bg-black rounded-[5px] w-full md:w-[410px] h-[44px] poppins flex items-center justify-center">Let's Begin Your Animated Journey Together!</a>
                                </div>
                            </div>}
                        {isBranImage ?
                            <div className="col-span-5">
                                <div className={`img ${positionCss} lg:block hidden`}>
                                    <Image src={branImage} alt='brandShine' className={`${css}`} quality={85} />
                                </div>
                            </div> :
                            <div className="col-span-6">
                                <div className="img absolute bottom-0 right-0 lg:right-[-5px] xl:right-[-27px] lg:block hidden">
                                    <Image src={branImage} alt='brandShine' height={622} width={389} className='xl:min-h-[400px] xl:w-full h-full ' quality={85} />
                                </div>
                            </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
