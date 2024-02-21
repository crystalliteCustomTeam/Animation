"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/faqs/faqs.module.css';
import close from "../../../../../public/banner/close.png"
import open from "../../../../../public/banner/open.png"
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Video = ({ content }) => {
    const { accordionData, lists } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? true : index));
    };


    return (
        <>
            <section className={`newcon ${styles.display}`}>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>FAQS</h3>
                            <p className={styles.wordsmost4}> For our customers, we
                                create meaningful and entertaining videos at Explain Art Animation. The entire video content is
                                produced and tailored to our client's requirements. Our team excels at creating high-quality
                                videos, whether you need a corporate video to boost your brand awareness or a product demo to
                                promote your services.Our process entails a series of meticulous animation and development
                                steps, from brainstorming various concepts to the final delivery. </p>
                        </div>
                    </div>
                </div>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-2 gap-5`}>
                        {/* <div>
                            <div className={`${styles.tabsBtn} ${activeTab == "tab1" ? styles.active : ""}`}
                                onClick={() => loc("tab1")}
                                href="#">
                                How Many People Will Work On My Video?

                                {activeTab == "tab1" ?
                                    <Image src={open} />
                                    :
                                    <Image src={close} />
                                }
                            </div>
                            {activeTab == "tab1" && (
                                <div className={styles.locBox}>
                                    <ul>
                                        <li>Understanding your business and marketing objectives</li>
                                        <li>Story and script development</li>
                                        <li>Storyboard</li>
                                        <li>Voiceover</li>
                                        <li>Illustration</li>
                                        <li>Animation</li>
                                        <li>Delivery/publication</li>
                                    </ul>


                                </div>
                            )}
                        </div>
                        <div>

                            <div className={`${styles.tabsBtn} ${activeTab == "tab2" ? styles.active : ""}`}
                                onClick={() => loc("tab2")}
                                href="#">
                                How Many People Will Work On My Video?
                                {activeTab == "tab2" ?
                                    <Image src={open} />
                                    :
                                    <Image src={close} />
                                }
                            </div>

                            {activeTab == "tab2" && (
                                <div className={styles.locBox}>
                                    <ul>
                                        <li>Understanding your business and marketing objectives</li>
                                        <li>Story and script development</li>
                                        <li>Storyboard</li>
                                        <li>Voiceover</li>
                                        <li>Illustration</li>
                                        <li>Animation</li>
                                        <li>Delivery/publication</li>
                                    </ul>


                                </div>
                            )}

                            <div className={`${styles.tabsBtn} ${activeTab == "tab3" ? styles.active : ""}`}
                                onClick={() => loc("tab3")}
                                href="#">
                                Do I Get Full Copyrights To The Video?


                                {activeTab == "tab3" ?
                                    <Image src={open} />
                                    :
                                    <Image src={close} />
                                }



                            </div>
                            {activeTab == "tab3" && (
                                <div className={styles.locBox}>
                                    <ul>
                                        <li>Understanding your business and marketing objectives</li>
                                        <li>Story and script development</li>
                                        <li>Storyboard</li>
                                        <li>Voiceover</li>
                                        <li>Illustration</li>
                                        <li>Animation</li>
                                        <li>Delivery/publication</li>
                                    </ul>


                                </div>
                            )}


                            <div className={`${styles.tabsBtn} ${activeTab == "tab4" ? styles.active : ""}`}
                                onClick={() => loc("tab4")}
                                href="#">
                                Do You Produce All Types Of Animation Videos And Provide Video
                                Concept Too, If I Have No Concept Idea?
                                {activeTab == "tab4" ?
                                    <Image src={open} />
                                    :
                                    <Image src={close} />
                                }
                            </div>

                            {activeTab == "tab4" && (
                                <div className={styles.locBox}>
                                    <ul>
                                        <li>Understanding your business and marketing objectives</li>
                                        <li>Story and script development</li>
                                        <li>Storyboard</li>
                                        <li>Voiceover</li>
                                        <li>Illustration</li>
                                        <li>Animation</li>
                                        <li>Delivery/publication</li>
                                    </ul>


                                </div>
                            )}

                        </div> */}

                        {accordionData.map((item, index) => (
                            <div key={index} className={`py-1 ${activeIndex === index ? 'border-white' : ' border-white'} border-b-2`}>
                                <div className={`flex space-x-3 items-center justify-between cursor-pointer p-[15px] rounded-[10px] h-[65px] bg-gradient-to-r from-[#000] to-[#596062] ${activeIndex === index ? '' : ''}`}
                                    onClick={() => handleClick(index)}>
                                    <h3 className={`text-[12px] w-[98%] pr-[20%] font-[600] capitalize montserrat`}>{item.question}</h3>
                                    <span>{activeIndex === index ? <Image src={open} /> : <Image src={close} />}</span>
                                </div>
                                {activeIndex === index && (
                                    <div className='mt-3 pt-5 px-4 pb-5 bg-gradient-to-r from-[#d50d12] to-[#9c1418] rounded-[8px]'>
                                        <ul className="list-disc pl-[20px]">
                                            {item.lists.map((lisItems, index) => (
                                                <li key={index}>
                                                    <div className={`block text-[14px] font-normal montserrat text-white pb-1`}>{lisItems}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Video
