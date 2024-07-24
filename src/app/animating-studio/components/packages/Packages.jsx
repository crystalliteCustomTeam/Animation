import React from 'react'
import Image from 'next/image'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import Package1 from "media/animating-studio/package-img-1.png"
import Package2 from "media/animating-studio/package-img-2.png"
import Package3 from "media/animating-studio/package-img-3.png"
import Rocket from "media/animating-studio/rocket.svg"
import Message from "media/animating-studio/message.svg"
import Setting from "media/animating-studio/setting.svg"
import ArrowWhite from "media/animating-studio/arrow-white.svg"
import ArrowBlack from "media/animating-studio/arrow-black.svg"
import PackageMsg1 from "media/animating-studio/package-msg-1.svg"
import PackageMsg2 from "media/animating-studio/package-msg-2.svg"

const Packages = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className='pt-[40px] pb-0 md:pt-[20px] md:pb-[40px] packages'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:max-w-7xl mx-auto">
                        <div className="col-span-12 md:mb-[30px]">
                            <h3 className='text-[#000000] text-center font-[600] poppins text-[15px] md:text-[20px] lg:text-[25px]'>Pricing</h3>
                            <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>Types of <span className="text-[#A70A0E]">Explainer Videos</span></h2>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>Infinity Animations is a renowned name in the video animation industry. Our experts produce all <br className='hidden lg:block' /> types of animation videos with the usage of modern devices and techniques, some are <br className='hidden lg:block' /> discussed below:</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-4 ">
                            <div className="card bg-gradient-to-br from-[#FFE680] to-[#FFCC00] rounded-[35px] pb-[15px]">
                                <div className='relative mb-[45px]'>
                                    <Image src={Package1} />
                                    <div className='bg-[#fff] w-[75px] h-[75px] flex justify-center items-center rounded-[50%] right-[40%] left-[40%] bottom-[-40px] absolute'>
                                        <Image src={Rocket} />
                                    </div>
                                </div>
                                <div className="card_top text-center pt-[15px] relative z-1">
                                    <h3 className='text-[#000] poppins text-[17px] font-[500] uppercase font-[700]'>Startup Package</h3>
                                    <h4 className='text-[#231f20] text-[40px] md:text-[50px] font-[700] poppins '>$195</h4>
                                </div>
                                <div className="grid grid-cols-12 items-end px-[15px] pb-[20px]  relative z-1 ">
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowBlack} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> 60 Seconds Duration</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowBlack} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Script Writing</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowBlack} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Custom Artwork</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowBlack} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Background Music</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowBlack} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>HD Format Video</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 h-[32px] ">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowBlack} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-black font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Dedicated Support</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                        <a href="tel:833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px] pt-2'>833-666-6689</span>
                                        </a>
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#000] montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <span className='text-[#231f20] text-[16px] pt-2'>Live Chat Now</span>
                                        </a>
                                    </div>
                                    <div className="flex-wrap flex items-center justify-between mt-[0px] md:mt-[35px] mb-[20px]">
                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-white font-[700] poppins bg-[#A70A0E] py-[12px] px-[20px] lg:px-[30px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </button>
                                        <a href='tel:833-666-6689' className='flex items-center justify-center text-[15px] text-[#A70A0E] font-[700] font-sans bg-transparent ml-[10px] border border-[#A70A0E] py-[12px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl '>
                                            Live Chat <span className='ml-[15px]'><Image src={PackageMsg1} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 ">
                            <div className="card bg-gradient-to-br from-[#005DB8] to-[#003262] rounded-[35px] pb-[15px]">
                                <div className='relative mb-[45px]'>
                                    <Image src={Package2} />
                                    <div className='bg-[#fff] w-[75px] h-[75px] flex justify-center items-center rounded-[50%] right-[40%] left-[40%] bottom-[-40px] absolute'>
                                        <Image src={Setting} />
                                    </div>
                                </div>
                                <div className="card_top text-center pt-[15px] relative z-1">
                                    <h3 className='text-[#fff] poppins text-[17px] font-[500] uppercase font-[700]'>Classic Package</h3>
                                    <h4 className='text-[#fff] text-[40px] md:text-[50px] font-[700] poppins '>$499</h4>
                                </div>
                                <div className="grid grid-cols-12 items-end px-[15px]  relative z-1">
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> 60 Seconds Duration</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Script Writing</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Professional Voice-over & SFX</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Hand-drawn Illustrations</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Unlimited Revisions</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>HD Format Video</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 h-[32px] invisible">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Dedicated Support</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                        <a href="tel:833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#fff] montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#fff] text-[16px] pt-2'>833-666-6689</span>
                                        </a>
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#fff] montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <span className='text-[#fff] text-[16px] pt-2'>Live Chat Now</span>
                                        </a>
                                    </div>
                                    <div className="flex-wrap flex items-center justify-between mt-[0px] md:mt-[35px] mb-[20px]">
                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-[#005DB8] font-[700] poppins bg-white py-[12px] px-[20px] lg:px-[30px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </button>
                                        <a href='tel:833-666-6689' className='flex items-center justify-center text-[15px] text-[#fff] font-[700] font-sans bg-transparent ml-[10px] border border-[#fff] py-[12px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl '>
                                            Live Chat <span className='ml-[15px]'><Image src={PackageMsg2} /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 ">
                            <div className="card bg-gradient-to-br from-[#C76365] to-[#A70A0E] rounded-[35px] pb-[15px]">
                                <div className='relative mb-[45px]'>
                                    <Image src={Package3} />
                                    <div className='bg-[#fff] w-[75px] h-[75px] flex justify-center items-center rounded-[50%] right-[40%] left-[40%] bottom-[-40px] absolute'>
                                        <Image src={Message} />
                                    </div>
                                </div>
                                <div className="card_top text-center pt-[15px] relative z-1">
                                    <h3 className='text-[#fff] poppins text-[17px] font-[500] uppercase font-[700]'>Premium Package</h3>
                                    <h4 className='text-[#fff] text-[40px] md:text-[50px] font-[700] poppins '>$799</h4>
                                </div>
                                <div className="grid grid-cols-12 items-end px-[15px]  relative z-1">
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> 60 Seconds Duration</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Script Writing</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Professional Voice-over & SFX</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Custom 2D Character Illustration</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'> Unlimited Revisions</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12  h-[32px]">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>HD Format Video</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 h-[32px] invisible">
                                        <div className='flex items-center ps-[10px] '>
                                            <div className='w-[15px] h-[15px]'>
                                                <Image src={ArrowWhite} alt='banner-logos' className='img-fluid' />
                                            </div>
                                            <span className='text-[#fff] font-[400] pb-[15px] poppins ps-[18px] pt-[15px]'>Dedicated Support</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="hidden md:flex flex-wrap gap-y-3 items-center justify-between">
                                        <a href="tel:833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#fff] montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#fff] text-[16px] pt-2'>833-666-6689</span>
                                        </a>
                                        <a href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#fff] montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <span className='text-[#fff] text-[16px] pt-2'>Live Chat  Now</span>
                                        </a>
                                    </div>
                                    <div className="flex-wrap flex items-center justify-between mt-[0px] md:mt-[35px] mb-[20px]">
                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-[#A70A0E] font-[700] poppins bg-white py-[12px] px-[20px] lg:px-[30px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </button>
                                        <a href='tel:833-666-6689' className='flex items-center justify-center text-[15px] text-[#fff] font-[700] font-sans bg-transparent ml-[10px] border border-[#fff] py-[12px] px-[15px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-xl '>
                                            Live Chat <span className='ml-[15px]'><Image src={PackageMsg2} /></span>
                                        </a>
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
