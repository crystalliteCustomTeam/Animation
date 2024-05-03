import Image from 'next/image'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
//===== CSS
import styles from './banner.module.css'
// ===== Images
import BannerLogos from "media/illustration-experts/banner-side-img.svg"

const Banner = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }

    return (
        <>
            <section className='bg-fixed bg-cover bg-center bg-[#ffffff] lg:bg-[url("../../public/illustration-experts/main-banner-bg.webp")] h-[100%] pt-[160px]  pb-[30px] md:pb-[50px] mt-[-85px]'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-y-12 justify-content-center">
                        <div className="col-span-12 lg:col-span-6 content-center px-[15px]">
                            <h1 className='text-[#333333] text-[20px] md:text-[25px] lg:text-[50px] font-[700] uppercase montserrat lg:w-11/12 md:leading-[60px]'>TRANSLATE YOUR VISION INTO CAPTIVATING ILLUSTRATIONS .</h1>
                            <p className='text-[#333333] text-[15px] font-[300] montserrat lg:w-11/12 leading-[25px] py-[25px]'>We make your illustrations with much precision, and our process is simple, fast, and affordable. Check out our custom illustration design packages now!</p>

                            <div className="flex gap-4 md:gap-6">
                                <div className="btn">
                                    <button onClick={popupHandle} className='flex items-center text-[16px] text-white hover:text-black font-[700] montserrat bg-[#fa690c] hover:bg-[#ffffff] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#fa690c]  hover:border-black'>
                                        Get Started
                                    </button>
                                </div>
                                <div className="btn">
                                    <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-black hover:text-white font-[700] montserrat bg-[#ffffff] hover:bg-[#fa690c] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#000000] hover:border-[#fa690c]'>
                                        Live Chat
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 flex justify-center ">
                            <Image src={BannerLogos} alt='banner-logos' className='object-contain mt-4' />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner
