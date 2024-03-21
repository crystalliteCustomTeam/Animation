import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

// Images
import CreativeMain from "media/explainer-videos-new/creativemain.png"
import Creative1 from "media/explainer-videos-new/creative1.png"
import Creative2 from "media/explainer-videos-new/creative3.png"
import CreativeBrands from "media/explainer-videos-new/creativebrands.png"

const Creativity = () => {
    return (
        <>
            <section className="bg-[url('../../public/explainer-videos-new/creative-bg.png')] bg-no-repeat py-[100px] ">
                <div className="max-w-7xl mx-auto relative z-[999]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            <h2 className='text-[#333] font-[700] text-[40px] lg:text-[50px] capitalize mb-[13px] leading-[1.1] font-sans'>Let The <span className='text-[#f36e16]'> Creativity Flow</span> And Do Wonders</h2>
                            <p className='text-[#333] text-[16px] mb-0 poppins leading-[1.43]'>With utmost dedication to producing custom videos, Explainer Videos provides the most innovative and wholly-immersive animated content for your business. Our exceptional digital artists ensure your desired message is conveyed to your target audience on a visceral level.</p>
                            <div className="btns flex items-center justify-between w-9/12 mt-[55px]">
                                <div className="btn1">
                                    <Link href="javacript:;" className='btn_shadow text-[18px] text-[#9a9a9a] bg-white py-[10px] px-[40px] relative poppins cursor-pointer font-[700] rounded-[30px] uppercase'>
                                        LET'S
                                        <span className='text-[#f36e16]'> ANIMATE</span>
                                    </Link>
                                </div>
                                <div className="chat">
                                    <Link href="javascript:;" className='text-[#f36e16] font-[700] text-[20px] leading-[1.2] inline-block cursor-pointer poppins text-center'>
                                        <span className='text-black block text-[13px]'>24/7 Available </span>
                                        Live Chat
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className="text-right relative">
                                <Image src={CreativeMain} alt='Infinity Animations' className='ml-[220px]' />
                                <Image src={Creative1} alt='Infinity Animations' className='absolute left-[30px] bottom-[-5px]' />
                                <Image src={Creative2} alt='Infinity Animations' className='absolute right-[-115px] bottom-[-5px] h-full ' />
                            </div>
                            <Image src={CreativeBrands} alt='Infinity Animations' className='ml-[30%] mt-5' />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Creativity
