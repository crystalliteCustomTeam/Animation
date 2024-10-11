//========== Imports
import Image from 'next/image';
//========== Import Css
import styles from "./Customers.module.css"
//========== Import Components
import { AutoPlay } from '@/components/sliders';
//========= Import Icons 
import { FaStar } from 'react-icons/fa';
//========= Import Images 
import client from "media/healthcare/client.png";
import clutch from "media/healthcare/icons/clutch.png"
import google from "media/healthcare/icons/google.png"
import PlayIcon from "media/healthcare/icons/play.png"


const Customers = () => {
    return (
        <>
            <section className="py-10 lg:py-16 bg-[#F3F3F3] relative">
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around mb-8 lg:mb-14'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>What Our <span className='text-[#F5090B]'>Customers</span> Are Saying</h2>
                        </div>
                    </div>
                    <AutoPlay arrowPosition="">
                        <div className="grow-0 shrink-0 basis-[100%] lg:basis-6/12 pl-4 md:pl-10">
                            <div className="grid grid-cols-12 items-center gap-y-6 md:gap-10">
                                <div className="col-span-12 md:col-span-8 flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                    </div>
                                    <p className='text-[16px] italic poppins leading-relaxed font-normal text-black mt-4 mb-6'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h5 className='text-[18px] italic poppins font-bold text-black'>Ernest L. Wynn</h5>
                                            <h6 className="text-[12px] italic poppins text-[#BBBBBB]">Video Production Company</h6>
                                        </div>
                                        <div className="w-[8%] mr-5 md:mr-0">
                                            <Image src={clutch} alt="Infinity Animations" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-4 overlay relative cursor-pointer">
                                    <Image src={client} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-250px] md:translate-y-[-140px] lg:translate-y-[-132px] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[50px]`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-[100%] lg:basis-6/12 pl-4 md:pl-10">
                            <div className="grid grid-cols-12 items-center gap-y-6 md:gap-10">
                                <div className="col-span-12 md:col-span-8 flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                        <FaStar className="text-[#FFBB00]" />
                                    </div>
                                    <p className='text-[16px] italic poppins leading-relaxed font-normal text-black mt-4 mb-6'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical.</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h5 className='text-[18px] italic poppins font-bold text-black'>Ernest L. Wynn</h5>
                                            <h6 className="text-[12px] italic poppins text-[#BBBBBB]">Video Production Company</h6>
                                        </div>
                                        <div className="w-[8%] mr-5 md:mr-0">
                                            <Image src={google} alt="Infinity Animations" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-4 overlay relative cursor-pointer">
                                    <Image src={client} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-250px] md:translate-y-[-140px] lg:translate-y-[-132px] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[50px]`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AutoPlay>
                </div>
            </section>
        </>
    )
}

export default Customers
