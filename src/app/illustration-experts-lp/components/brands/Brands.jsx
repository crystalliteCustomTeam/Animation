import Image from 'next/image'
import React from 'react'
//===== Component
import usePopup from '@/app/configs/store/Popup';
// ==== Images 
import CTAPart from "media/illustration-experts/cta-img.png"


const Brands = ({ content }) => {
    const { title, subTitle, desc, isBtn, backgroundImage } = content;
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className={`py-[50px] bg-cover bg-center bg-no-repeat ${backgroundImage} relative`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="content">
                            <p className='text-[#ffffff] text-[16px] lg:text-[28px] montserrat font-[400] py-[20px] leading-[30px]'>
                                {desc}
                            </p>
                            <h2 className='text-[#ffffff] font-[700] montserrat text-[36px] leading-[28px] lg:leading-[35px]'>
                                {title} <br />
                                <span>{subTitle}</span>
                            </h2>

                        </div>
                        <div className="btns flex-wrap flex items-center justify-center md:justify-start gap-5 mt-6">
                            <div className="btn">
                                <button onClick={popupHandle} className='flex items-center text-[16px] text-white hover:text-black font-[700] montserrat bg-[#7c2791] hover:bg-[#ffffff] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#7c2791]  hover:border-black'>
                                    Get Started
                                </button>
                            </div>
                            <div className="btn">
                                <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-black hover:text-white font-[700] montserrat bg-[#ffffff] hover:bg-[#7c2791] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#000000] hover:border-[#7c2791]'>
                                    Live Chat
                                </a>
                            </div>
                            {isBtn ? <div className="btn">
                                <a href="tel:833-666-6689" className='flex items-center'>
                                    <span className='text-[18px] text-white-500 py-[10px] px-[8px] font-[200] montserrat '>
                                        Call us at: <span className='font-bold'>833-666-6689</span>
                                    </span>
                                </a>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className="partical absolute right-[30px] top-[-75px] animation lg:block hidden">
                    <Image src={CTAPart} alt='particale-Image' width={400} />
                </div>
            </section>
        </>
    )
}

export default Brands
