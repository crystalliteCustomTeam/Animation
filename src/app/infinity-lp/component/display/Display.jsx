"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/display/display.module.css';
import icon1 from "../../../../../public/banner/display.png"
import lang from "../../../../../public/banner/lang.png"

const Video = () => {
   
    return (
        <>
            <section className={`newcon ${styles.display}`}>
            <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1`}>
                    <div className={styles.newscool}>
                        <Image src={icon1} class="img-fluid mostimg" alt="" />
                        <div className={styles.today}>
                        <h3>Start Displaying Your Brand With <br></br> Amazing Animated Videos
                        </h3>
                        <p>Spread profound message and scale up your business with our animated
                            video services today!</p>
                        <div className={styles.message}>
                            <button className={styles.scale}>Get Started</button>
                            <button className={styles.sefve} >Live Chat</button>
                          <div className={styles.pont}>
                          <Image src={lang} alt="" />
                          <a className={styles.newlong}  href="tel:+10000000000"> +1-000-000-0000</a>
                         
                          </div>
                        </div>
                    </div>
                    </div>
                   
                    </div>
                 
                </div>
            </section>
        </>
    )
}

export default Video
