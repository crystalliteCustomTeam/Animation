import React from 'react'
import Image from 'next/image'
// Images
import ProcessImage from "media/game-lp/processImage.png"
import ProcessBg from "media/game-lp/processbg.png"
import BtnBg2 from "media/game-lp/formbtn.png"
const Discusss = () => {
    return (
        <section className='py-[50px] lg:py-[90px]'>
            <div className="max-w-7xl px-4 lg:px-0 md:mx-8 xl:mx-auto relative group">
                <Image src={ProcessBg} alt='Background Image' fill={true} className='object-cover object-center z-[-1]' />
                <div className="grid grid-cols-12 items-center">
                    <div className="lg:col-span-6 lg:block hidden">
                        <div className='absolute top-[-60px] lg:top-[-95px] left-0 group-hover:top-[-50px] lg:group-hover:top-[-85px] group-hover:duration-1000 ease-in-out duration-1000'>
                            <Image src={ProcessImage} alt='Process' className='w-8/12 lg:w-9/12 xl:w-10/12 lg:mx-auto' />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className='pt-[40px] lg:pt-[60px] pb-[40px] sm:pr-[20px] lg:pr-[60px]'>
                            <div className="txt">
                                <h2 className='text-[25px] sm:text-[30px] lg:text-[40px] leading-[35px] sm:leading-[45px] lg:leading-[55px] font-semibold poppins mb-2 sm:mb-4 sm:text-left text-center'>Reach Out and Let’s Discuss
                                    Your Next Project</h2>
                                <p className='text-[17px] leading-[33px] font-normal poppins mb-5 sm:mb-3 lg:mb-7 xl:mb-10 sm:text-left text-center'>We're excited to collaborate! Share your project details, and let's create something amazing together.</p>
                            </div>
                            <div className="forms">
                                <form>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-8 lg:gap-y-12 xl:gap-y-16">
                                        <div>
                                            <input type="text" placeholder='Name *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Email *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Phone Number *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='Your Requirments *' className='text-[16px] text-white poppins font-normal leading-[33px] bg-transparent border-b-2 placeholder:text-white h-[40px] placeholder:text-[14px] px-2 w-full focus:outline-0' />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="btn mt-6 lg:mt-8">
                                            <button className=' text-black text-[16px] font-normal poppins w-full h-[50px] flex items-center justify-center relative z-10'>
                                                <Image src={BtnBg2} alt='Btn Background' fill={true} className='z-[-1] object-fill object-center' />
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discusss
