"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
// Images 
import Faq from "media/infinity-studio/faqs.png"
// Import CSS
import styles from "./faqs.module.css"
import { FaCircle } from "react-icons/fa";

const Faqs = ({ content }) => {

    const { accordionData, lists } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? true : index));
    };

    return (
        <>
            <section className='py-[50px] '>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    {/* <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className='text-[#231f20] font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>FAQS</h2>
                            <p className='text-[#231f20] text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] leading-[22px] pb-[30px] md:pb-[60px]'>We have piled up a list of common questions that are usually asked by new clients who show their interest in hiring our services. You may get your answer to the following questions if you have any in your mind.</p>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-12 lg:col-span-6">
                            {accordionData.map((item, index) => (
                                <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                    <div className={`flex space-x-3 items-center cursor-pointer p-[15px] rounded-[10px] h-[65px] ${activeIndex === index ? 'bg-[#003466] text-white' : 'text-black bg-[#e6e7e8]'}`}
                                        onClick={() => handleClick(index)}>
                                        <h3 className={`text-[12px] md:text-[16px] font-[500] capitalize montserrat me-auto`}>{item.question}</h3>
                                        <span>{activeIndex === index ? <TiArrowSortedUp className='text-[20px] font-[900]' /> : <TiArrowSortedDown className='text-[20px] font-[900]' />}</span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className='pt-5'>
                                            <div className={` text-[14px] sm:text-[16px] font-normal montserrat text-black pb-1 ${styles.ani}`}>{item.answer}</div>

                                            <ul>
                                                {accordionData.map((index) => (
                                                    <li key={index} className={styles.list}><div className={`block text-[14px] font-normal montserrat text-black pb-1`}>{item.item1}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-6 lg:block hidden ">
                            <Image src={Faq} alt='Faqs' className='w-full w-[450px] h-[450px] mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
