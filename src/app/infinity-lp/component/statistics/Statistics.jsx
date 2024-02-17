"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/Statistics/statistics.module.css';
import proven from "../../../../../public/banner/proven.png"


const Video = () => {
   
    return (
        <>
            <section className={`newcon ${styles.display}`}>
            <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-1`}>
                    <div className={styles.element}>
                        <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Types Of <span class="colorred2">Explainer </span>
                        Videos</h3>
                        <p className={styles.words}>
                        Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
                        </p>
                    </div>

                    <div class={styles.provenbg}>
                       <div className={styles.process}>
                            <div className={styles.video}>
                                    <div className={styles.soul}>
                                        <h3>12+</h3>
                                        <p>Years Of <br></br>
                                        Experience</p>
                                    </div>
                                    <div className={styles.soul1}>
                                        <h3>15+</h3>
                                        <p>Million <br></br>
Views</p>
                                    </div>
                            </div>
                            <div className={styles.video}>
                                <div className={styles.soul2}>
                                    <h3>1600+</h3>
                                    <p>Videos <br></br>
Delivered</p>
                                </div>
                                <div className={styles.soul3}>
                                    <h3>1200+</h3>
                                    <p> Clients <br></br>
Across The World </p>
                                </div>
                            </div>
                       </div>
                       <div className={styles.pricing}>
                            <Image src={proven} className={styles.newtoen} alt="" /> 
                       </div>
                    </div>

                    </div>
                </div>
             
            </section>
        </>
    )
}

export default Video
