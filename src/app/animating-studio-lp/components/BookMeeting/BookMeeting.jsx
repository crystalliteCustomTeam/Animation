import Image from 'next/image'
import React from 'react'
// Images
import MaketBg from "media/infinity-studio-lp-new/marketing-bg.png"
import MerketMen from "media/infinity-studio-lp-new/market-men.png"

const BookMeeting = () => {
    return (
        <section className='relative py-[50px] lg:py-[90px]'>
            <Image src={MaketBg} alt='Infinity Animation' fill={true} className='z-[-1] object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-white poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[50px] text-center mb-7 sm:mb-12 lg:mb-20 lg:w-8/12 mx-auto'>Book A Meeting With A Member Of Our Team To Learn More And <span className='text-[#F5090B]'>Get A Quote</span> Today!</h2>
                    </div>
                    <div className="hidden lg:block lg:col-span-6">
                        <Image src={MerketMen} alt='Infinity Animation' className='w-full h-full lg:w-10/12 object-contain' />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div>
                            <h3 className='montserrat text-[30px] md:text-[40px] font-bold leading-[40px] md:leading-[33px] mb-5'>Get A Quote</h3>
                            <form action="javascript:;">
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                    <div className="name">
                                        <input type="text" name='name' placeholder='Enter Your Name' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[45px] px-4 border-0' />
                                    </div>
                                    <div className="email">
                                        <input type="email" name='email' placeholder='Enter Your Number' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[45px] px-4 border-0' />
                                    </div>
                                </div>
                                <div className="number mb-3">
                                    <input type="tel" name='number' placeholder='Enter Your Number' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[45px] px-4 border-0' />
                                </div>
                                <div className="message">
                                    <textarea name="message" type="message" placeholder='Type Message' className='text-[#000000] poppins text-[13px] font-normal leading-[17px] w-full focus:outline-0 h-[110px] px-4 pt-4 border-0' ></textarea>
                                </div>
                                <p className='text-[15px] md:text-[18px] poppins leading-[23px] md:leading-[25px] font-normal text-white pt-3 pb-5'>By continuing you agree to the Explainly Privacy Policy <br className='xl:block hidden'/>
                                and consent to receive communications from us.</p>
                                <button type='submit' className='text-white text-[16px] font-semibold poppins leading-[22px] bg-[#FF0000] rounded-[5px] px-9 py-3 w-max'>Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookMeeting
