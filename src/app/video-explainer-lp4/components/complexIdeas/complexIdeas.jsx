"use client"
import React, { useState } from 'react'
import Image from 'next/image'
// Images
import Arrow from "media/explainer-videos/right-arrow.svg"
import Link from 'next/link'

const ComplexIdeas = ({ content }) => {
    const { menus, sections } = content;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className='py-[50px] lg:py-[90px]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[#231f20] text-center font-[700] montserrat text-[18px] md:text-[25px] lg:text-[30px]'>Struggling to Simplify Complex Ideas? We’ve Got You Covered!</h2>
                        <p className='text-[#231f20] text-[16px] montserrat font-[400] py-[17px] text-center mx-auto leading-[22px] pb-[30px] md:pb-[60px]'>Are you finding it hard to explain what your business does in a way that your audience truly understands? Does your message feel too complicated, leaving potential customers confused or uninterested? You're not alone—many businesses face the same challenge when trying to communicate complex ideas or products.</p>
                    </div>
                </div>
                <div className="group bg-[#F2F5FA] rounded-[20px] py-[15px] px-[10px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6">
                            <ul className='py-[10px] px-[25px] flex flex-col h-full'>
                                {menus.map((tab, index) => (
                                    <li key={index} className={`text-[#231f20] text-[12px] xl:text-[15px] montserrat font-bold leading-[22px] pb-[17px] border-b  flex items-center justify-between pl-[10px] relative before:content-[''] before:absolute before:left-[-8px] before:top-[48%] before:w-[9px] before:h-[9px] before:rounded-full pt-[25px] ${activeTab === index ? 'opacity-100 border-b-[#707070] before:bg-[#134478]' : 'opacity-30 border-b-[#707070] before:bg-transparent before:border-[1px] before:border-black'}`} onMouseEnter={() => handleTabClick(index)}>
                                        {tab.label}
                                        <Image src={Arrow} alt='Infinity Animation' width={20} className={`${activeTab === index ? 'block' : 'hidden'}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            {sections[activeTab] && (
                                <div className='bg-[#FFD100] rounded-[20px] py-[30px] md:py-[60px] px-[25px] mr-auto'>
                                    {sections[activeTab].map((item, index) => (
                                        <div key={index}>
                                            <h2 className='text-[#231f20] font-bold montserrat text-[18px] xl:text-[25px] mb-[20px]'>
                                                {item.title}
                                            </h2>
                                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                            <Link href="tel:;" className='bg-black text-white text-[13px] md:text-[17px] leading-[25px] montserrat rounded-[7px] block sm:w-max py-[10px] px-[35px]'>Get A Call For Free Consultation</Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComplexIdeas
