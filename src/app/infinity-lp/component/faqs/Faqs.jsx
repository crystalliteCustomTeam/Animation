"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/faqs/faqs.module.css';
import close from "../../../../../public/banner/close.png"
import open from "../../../../../public/banner/open.png"
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Video = () => {


    const [activeTab, setActiveTab] = useState("");
    function loc(tabs1) {
        setActiveTab(tabs1);
    }


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
                    <div class={`md:grid md:grid-cols-2`}>
                        <div>
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

                        </div>
                    </div>
                </div>
             
            </section>
        </>
    )
}

export default Video
