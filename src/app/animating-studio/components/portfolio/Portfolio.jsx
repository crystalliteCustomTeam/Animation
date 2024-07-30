"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Css
import styles from "./PortFolio.module.css"
// icons
import PlayIcon from "media/infinity-studio/play2.png"

const Portfolio = ({ content }) => {
    const { title, tabInfo, tabContents, bg } = content;
    //========= tabs =========
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    //========= fancy box =========
    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }

    //========= video code start =========
    const handleVideoPlay = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.play();
    };
    const handleVideoPause = (e) => {
        const video = e.currentTarget.querySelector('video');
        video.pause();
    };


    return (
        <>
            <section className={`w-full flex items-center justify-start pt-[40px] pb-0 md:py-[40px] lg:py-[60px] ${bg}`} id='portfolio'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:max-w-7xl mx-auto">
                        <div className="col-span-12 md:mt-4">
                            <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>{title}</h2>
                        </div>
                    </div>
                    <div className={`"mt-8 md:mt-8`}>
                        <ul className="flex flex-wrap justify-center text-sm font-medium text-center gap-3 md:gap-5 mx-auto border-b border-black py-[25px]">
                            {tabInfo.map((tab, index) => (
                                <li key={index}
                                    className={`inline-block px-5 md:px-8 py-3 text-[14px] lg:text-[17px] font-[500] poppins cursor-pointer  ${activeTab === index ? "bg-[#FFCC00] rounded-[5px] text-[#003262]" : "text-[#000]"}`}
                                    onClick={() => handleTabClick(index)}>
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content pt-7 md:pt-12">
                            {tabContents[activeTab] && (
                                <Fancybox options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                                        {tabContents[activeTab].map((item, index) => (
                                            <Link key={index} href={item.video} datafancybox="gallery" className={`${styles.shadow} w-full h-full group`}>
                                                <div className="overlay relative ">
                                                    <Image src={item.thumbnail} alt="Infinity Animations" className='h-[263px] min-w-[468px]' />
                                                    <div className="bg-slate-700/75 h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] group-hover:translate-y-[-132px] translate-y-[132px] flex items-center justify-center ">
                                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} brightness-200 invert-0 w-[75px]`} />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Fancybox>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
