import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// css
import styles from "./packages.module.css"
// ==== Images 
import pkgIcon from "media/infinity-studio/pkgIcon1.png"
import pkgIcon2 from "media/infinity-studio/pkgIcon2.png"
import pkgIcon3 from "media/infinity-studio/pkgIcon3.png"
import Check from "media/infinity-studio/pkgCheck.png"
import BtnImg from "media/infinity-studio/pkgCta.png"

const Packages = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className='py-[50px] packages'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mb-[10px]">
                            <h2 className='text-[#A70A0E] text-center font-[600] montserrat text-[15px] md:text-[20px] lg:text-[25px]'>Pricing </h2>
                            <h2 className='text-[#003262] text-center font-[500] montserrat text-[20px] md:text-[30px] lg:text-[35px]'>Types of Explainer Videos</h2>
                            <p className='text-[#231F20] text-[16px] md:text-[18px] montserrat font-[400] py-[17px] text-center lg:w-10/12 mx-auto leading-[20px] md:leading-[22px] md:pb-[70px]'>Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:</p>
                        </div>
                        <div className="col-span-12 lg:col-span-4 ">
                            <div className={styles.borderTrans}>
                                <div className="card bg-[#ffffff] rounded-[10px] py-[10px] ">
                                    <div className="card_top  text-start relative z-1">
                                        <Image src={pkgIcon} alt='pkgIcon_image' className='img-fluid w-[100px] m-3' />
                                        <h3 className='text-[#fff] montserrat text-[17px] font-[500] uppercase bg-[#A70A0E] w-[80%] rounded-r-lg px-[15px] py-[5px] '>STARTUP PACKAGE</h3>
                                        <h4 className='text-[#231f20] text-[40px] md:text-[55px] font-[700] poppins px-[35px]'>$195</h4>
                                    </div>
                                    <div className="grid grid-cols-12 items-end px-[15px] pb-[25px] h-[250px]">
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> 30 Seconds Duration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Script Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Custom Artwork</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Background Music</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>HD Format Video</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>Dedicated Support</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                        <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                            <a href="tel:833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                                speak with us
                                                <span className=' text-[16px] pt-2  font-normal'>833-666-6689</span>
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                                Want to Discuss
                                                <span className=' text-[16px] pt-2 font-normal'>Live Chat Now</span>
                                            </a>
                                        </div>
                                        <div className="grid grid-cols-12  items-end py-[25px]">
                                            <div className='col-span-12 md:col-span-6 flex justify-center'>
                                                <button onClick={popupHandle} className='flex justify-between items-center text-[16px] text-white font-[700] poppins bg-[#A70A0E] py-[12px] px-[20px] lg:px-[30px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-[90%] mb-[10px] md:mb-0'>
                                                    Get Started
                                                </button>
                                            </div>
                                            <div className='col-span-12 md:col-span-6 flex justify-center'>
                                                <a href="javascript:$zopim.livechat.window.show();" className='flex justify-between items-center text-[16px] text-black font-[700] poppins bg-transparent border border-black py-[8px] px-[18px]  tracking-[.3px] rounded-[5px] leading-[20px] w-[90%]'>
                                                    <span>Live Chat</span>
                                                    <span ><Image src={BtnImg} className='w-[25px]' /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 ">
                            <div className={styles.borderTrans}>
                                <div className="card bg-[#ffffff] rounded-[10px] py-[10px] ">
                                    <div className="card_top  text-start relative z-1">
                                        <Image src={pkgIcon2} alt='pkgIcon_image' className='img-fluid w-[100px] m-3' />
                                        <h3 className='text-[#fff] montserrat text-[17px] font-[500] uppercase bg-[#003262] w-[80%] rounded-r-lg px-[15px] py-[5px] '>Classic Package</h3>
                                        <h4 className='text-[#231f20] text-[40px] md:text-[55px] font-[700] poppins px-[35px]'>$499</h4>
                                    </div>
                                    <div className="grid grid-cols-12 items-end px-[15px] pb-[25px] h-[250px]">
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> 30 Seconds Duration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Script Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Professional Voice-over & SFX</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>  Hand-drawn Illustrations</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Unlimited Revisions</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>HD Format Video</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>Dedicated Support</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                        <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                            <a href="tel:833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                                speak with us
                                                <span className=' text-[16px] pt-2  font-normal'>833-666-6689</span>
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                                Want to Discuss
                                                <span className=' text-[16px] pt-2 font-normal'>Live Chat Now</span>
                                            </a>
                                        </div>
                                        <div className="grid grid-cols-12  items-end py-[25px]">
                                            <div className='col-span-12 md:col-span-6 flex justify-center'>
                                                <button onClick={popupHandle} className='flex justify-between items-center text-[16px] text-white font-[700] poppins bg-[#003262] py-[12px] px-[20px] lg:px-[30px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-[90%] mb-[10px] md:mb-0 '>
                                                    Get Started
                                                </button>
                                            </div>
                                            <div className='col-span-12 md:col-span-6 flex justify-center'>
                                                <a href="javascript:$zopim.livechat.window.show();" className='flex justify-between items-center text-[16px] text-black font-[700] poppins bg-transparent border border-black py-[8px] px-[18px]  tracking-[.3px] rounded-[5px] leading-[20px] w-[90%]'>
                                                    <span>Live Chat</span>
                                                    <span ><Image src={BtnImg} className='w-[25px]' /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 ">
                            <div className={styles.borderTrans}>
                                <div className="card bg-[#ffffff] rounded-[10px] py-[10px] ">
                                    <div className="card_top  text-start relative z-1">
                                        <Image src={pkgIcon3} alt='pkgIcon_image' className='img-fluid w-[100px] m-3' />
                                        <h3 className='text-[#003262] montserrat text-[17px] font-[500] uppercase bg-[#FFCC00] w-[80%] rounded-r-lg px-[15px] py-[5px] '>Premium Package</h3>
                                        <h4 className='text-[#231f20] text-[40px] md:text-[55px] font-[700] poppins px-[35px]'>$799</h4>
                                    </div>
                                    <div className="grid grid-cols-12 items-end px-[15px] pb-[25px] h-[250px]">
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> 30 Seconds Duration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'> Script Writing</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>Professional Voice-over & SFX</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>Custom 2D Character Illustration</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>Unlimited Revisions</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>HD Format Video</span>
                                            </div>
                                        </div>
                                        <div className="col-span-12  h-[32px]">
                                            <div className='flex items-center ps-[10px] '>
                                                <div className='w-[15px] h-[15px]'>
                                                    <Image src={Check} alt='banner-logos' className='img-fluid' />
                                                </div>
                                                <span className='text-black font-[400] pb-[10px] montserrat ps-[18px] pt-[10px]'>Dedicated Support</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                        <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                            <a href="tel:833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                                speak with us
                                                <span className=' text-[16px] pt-2  font-normal'>833-666-6689</span>
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                                Want to Discuss
                                                <span className=' text-[16px] pt-2 font-normal'>Live Chat Now</span>
                                            </a>
                                        </div>
                                        <div className="grid grid-cols-12  items-end py-[25px]">
                                            <div className='col-span-12 md:col-span-6 flex justify-center'>
                                                <button onClick={popupHandle} className='flex justify-between items-center text-[16px] text-[#003262] font-[700] poppins bg-[#FFCC00] py-[12px] px-[20px] lg:px-[30px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl w-[90%] mb-[10px] md:mb-0'>
                                                    Get Started
                                                </button>
                                            </div>
                                            <div className='col-span-12 md:col-span-6 flex justify-center'>
                                                <a href="javascript:$zopim.livechat.window.show();" className='flex justify-between items-center text-[16px] text-black font-[700] poppins bg-transparent border border-black py-[8px] px-[18px]  tracking-[.3px] rounded-[5px] leading-[20px] w-[90%]'>
                                                    <span>Live Chat</span>
                                                    <span ><Image src={BtnImg} className='w-[25px]' /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages
