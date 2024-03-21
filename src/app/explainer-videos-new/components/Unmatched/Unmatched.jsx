import Image from 'next/image';
import React from 'react'

import { FaAngleRight } from "react-icons/fa";
// Images
import Combo from "media/explainer-videos-new/combo.png"
import Link from 'next/link';

const Unmatched = () => {
    return (
        <>
            <section className="py-[50px] lg:py-[100px] bg-[url('../../public/explainer-videos-new/unmatched-bg.png')] bg-cover bg-no-repeat">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-7">
                            <span className='text-[#230d55] bg-white py-[5px] px-[12px] font-[500] w-[400px] text-[24px] mb-[10px] poppins block'>Claim your Video of more than</span>
                            <h2 className='text-[85px] text-white font-[600] leading-[1] poppins'><span className='text-[#f36e16] font-[900] mb-3 lg:mb-9'>60 Sec</span> At Unmatched Prices</h2>
                            <p className='text-[24px] lg:text-[27px] text-white mb-[30px] leading-[1.43] font-sans'>We create indulging animations that will</p>

                            <div className="grid grid-cols-2">
                                <div>
                                    <ul>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Convey Your Story Clearly
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Outperform Your Competition
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Enhance Your Brand Visibility
                                            </span>
                                        </li>
                                        <li>
                                            <span className='text-white text-[14px] mb-[10px] flex items-center poppins'>
                                                <FaAngleRight className='text-[#e4b90b] font-[600] mr-[4px]' />
                                                Increase Customer Loyalty
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="combo-pack relative rounded-md bg-[#f36e16] lg:w-10/12 mx-auto">
                                <div className="pt-[35px] px-[20px] mb-[20px]">
                                    <Image src={Combo} alt='Infinity Animations' className='mx-auto block' />
                                    <h3 className='text-white font-[700] text-[30px] lg:text-[37px] m-0 leading-[1.1] text-center poppins'>Get a Custom Quote</h3>
                                    <p className='text-[16px] lg:text-[23px] leading-[1.43] font-sans text-center'>For Your Next Animation Video</p>
                                </div>
                                <div className="order bg-[#e4b90b] py-[4px] text-center">
                                    <h5 className='text-[#333] text-[30px] font-[700] poppins'>
                                        <span className='text-white'>20% OFF</span> Next Order
                                    </h5>
                                </div>
                                <div className="flex items-center justify-center gap-5 lg:gap-12 relative before:content-[''] before:absolute before:w-[1px] before:bg-white before:h-full before:top-0 before:left-[52%] before:translate-x-[-52%] mt-[30px]">
                                    <div className="LinkOne">
                                        <Link href="javascript:;" className='text-white text-[16px] font-[600] poppins text-right'>
                                            <span className='text-[14px] font-[400] block'>
                                                Speak with us
                                            </span>
                                            +1-833-666-6684
                                        </Link>
                                    </div>
                                    <div className="LinkTwo">
                                        <Link href="javascript:;" className='text-white text-[16px] font-[600] poppins text-left'>
                                            <span className='text-[14px] font-[400] block'>
                                                Want to discuss?
                                            </span>
                                            Live Chat Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="btn flex justify-center mt-[30px] pb-[30px]">
                                    <Link href="javascript:;" className='bg-white text-black text-[18px] py-[10px] px-[40px] poppins cursor-pointer rounded-[30px] font-[700] uppercase'>
                                        Order Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section Start */}
            <section className="py-[50px] lg:py-[140px] bg-[url('../../public/explainer-videos-new/cta-bg.png')] bg-cover bg-no-repeat mt-[-60px]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-6">
                            <h3 className='text-white text-[42px] font-[700] poppins'>What are you waiting for?</h3>
                            <p className='text-[24px] lg:text-[25px] text-white mb-[30px] leading-[1.43] font-sans'>Let’s animate a Kickass Animation Today!</p>
                        </div>
                        <div className="col-span-3">
                            <div className="btn flex justify-center mt-[30px] pb-[30px]">
                                <Link href="javascript:;" className='bg-[#230d55] text-white text-[16px] py-[10px] px-[35px] poppins cursor-pointer rounded-[30px] font-[700] uppercase'>
                                    MAKE AN ANIMATION
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="Link">
                                <Link href="javascript:;" className='text-white text-[16px] lg:text-[24px] leading-[1.3]  poppins'>
                                    <span className='text-[16px] block'>
                                        Discuss with our <span className='font-[600]'>strategists</span>
                                    </span>
                                    <span className='font-[700]'>
                                        +1-833-666-6684
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section End */}
        </>
    )
}

export default Unmatched
