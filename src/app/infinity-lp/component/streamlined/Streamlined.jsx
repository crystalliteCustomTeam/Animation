"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Components
import styles from '@/app/infinity-lp/component/streamlined/streamlined.module.css';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import ton1 from "../../../../../public/banner/1ton.png"
import ton2 from "../../../../../public/banner/2ton.png"
import ton3 from "../../../../../public/banner/3ton.png"
import ton4 from "../../../../../public/banner/4ton.png"


import pho1 from "../../../../../public/banner/1pho.png"
import pho2 from "../../../../../public/banner/2pho.png"
import pho3 from "../../../../../public/banner/3pho.png"
import pho4 from "../../../../../public/banner/4pho.png"

const Video = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    function loc(tabs1) {
        setActiveTab(tabs1);
    }
  const settings = {
        dots: false,
        arrow:false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: false
      
    };
    const settings1 = {
        dots: false,
        arrow:false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true
      
    };
  
    return (
        <>
            <section className={`newcon sliderpost ${styles.display}`}>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1`}>
                        <div className={styles.element}>
                            <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Our   <span class="colorred2">Streamlined   </span>
                            Projects</h3>
                          
                        </div>
                    </div>
                </div>
                <div class={`container p-0`}>
                    <div class={`md:grid md:grid-cols-1`}>
                        

                        <div className={styles.tabsBtns}>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab1" ? styles.active : ""}`}
                                            onClick={() => loc("tab1")}
                                            href="#">
                                            2D Animation
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab2" ? styles.active : ""}`}
                                            onClick={() => loc("tab2")}
                                            href="#">
                                            3D Animation
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab3" ? styles.active : ""}`}
                                            onClick={() => loc("tab3")}
                                            href="#">
                                            Whiteboard
                                        </div>
                                        <div className={`${styles.tabsBtn} ${activeTab == "tab4" ? styles.active : ""}`}
                                            onClick={() => loc("tab4")}
                                            href="#">
                                            Motion Graphics
                                        </div>
                        </div>
                        <div>
                                        {activeTab == "tab1" && (
                                            <div className="locBox">
                                            <Slider {...settings} className={styles.newyo}>
                                                    <div>
                                                        <Image src={ton1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>


                                            <Slider {...settings1} className={styles.newyo}>
                                                    <div>
                                                        <Image src={pho1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>
                                            </div>
                                        )}
                                        {activeTab == "tab2" && (
                                            <div className="locBox">
                                               <Slider {...settings} className={styles.newyo}>
                                                    <div>
                                                        <Image src={ton1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>


                                            <Slider {...settings1} className={styles.newyo}>
                                                    <div>
                                                        <Image src={pho1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>
                                            </div>
                                        )}
                                        {activeTab == "tab3" && (
                                            <div className="locBox">
                                                <Slider {...settings} className={styles.newyo}>
                                                    <div>
                                                        <Image src={ton1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>


                                            <Slider {...settings1} className={styles.newyo}>
                                                    <div>
                                                        <Image src={pho1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>
                                            </div>
                                        )}
                                          {activeTab == "tab4" && (
                                            <div className="locBox">
                                                 <Slider {...settings} className={styles.newyo}>
                                                    <div>
                                                        <Image src={ton1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={ton2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>


                                            <Slider {...settings1} className={styles.newyo}>
                                                    <div>
                                                        <Image src={pho1}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho3}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho4}  alt='slider-Image' className='' />
                                                    </div>
                                                    <div>
                                                        <Image src={pho2}  alt='slider-Image' className='' />
                                                    </div>
                                                 
                                            </Slider>
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
