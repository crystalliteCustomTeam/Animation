"use client"
import { useState } from 'react';
// Import Css
import styles from "./PortFolio.module.css"


const Portfolio = ({ content }) => {
    const { title, para, tabInfo, tabContents, tabsInfo } = content;
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16`}>
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight my-2">
                                {title}
                            </h1>
                            <p className="w-full md:w-[80%] mx-auto text-[14px] sm:text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                        </div>
                    </div>
                    <div className={`${tabsInfo ? "mt-8 md:mt-12" : "mt-0"}`}>
                        {tabsInfo ?
                            <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 lg:w-11/12 mx-auto">
                                {tabInfo.map((tab, index) => (
                                    <li key={index}
                                        className={`inline-block w-[180px] xl:w-[220px] py-3 text-[16px] lg:text-[20px] font-normal font-sans text-white border rounded-[27px] cursor-pointer hover:border-primary-100 ${activeTab === index ? 'border-primary-100' : 'border-[#646464]'}`}
                                        onClick={() => handleTabClick(index)}>
                                        {tab.label}
                                    </li>
                                ))}
                            </ul> : null}
                        <div className="tabs-content pt-7 md:pt-12">
                            {tabContents[activeTab] && (
                                <div className='grid grid-cols-3 gap-3 md:gap-8'>
                                    {tabContents[activeTab].map((item, index) => (
                                        <div key={index}>
                                            <video className={`${styles.shadow} w-full h-full`} muted="muted" autoPlay src={item}></video>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
