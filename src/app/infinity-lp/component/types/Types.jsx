"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/Types/types.module.css';
import icon1 from "../../../../../public/banner/motion/1.png"
import icon2 from "../../../../../public/banner/motion/2.png"
import icon3 from "../../../../../public/banner/motion/3.png"
import icon4 from "../../../../../public/banner/motion/4.png"
import icon5 from "../../../../../public/banner/motion/5.png"
import icon6 from "../../../../../public/banner/motion/6.png"

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
                    </div>
                </div>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-3`}>
                        <div className={styles.boxpost}>
                                    <Image src={icon1} class="img-fluid mt-3 newgost" alt="" />
                                    <h4 class="fontsfpro font20 center colorblack mt-3">
                                        Whiteboard Animation <br></br>
                                        Video
                                    </h4>
                        </div>
                        <div className={styles.boxpost}>
                                    <Image src={icon2} class="img-fluid mt-3 newgost" alt="" />
                                    <h4 class="fontsfpro font20 center colorblack mt-3">
                                        Whiteboard Animation <br></br>
                                        Video
                                    </h4>
                        </div>
                        <div className={styles.boxpost}>
                                    <Image src={icon3} class="img-fluid mt-3 newgost" alt="" />
                                    <h4 class="fontsfpro font20 center colorblack mt-3">
                                        Whiteboard Animation <br></br>
                                        Video
                                    </h4>
                        </div>
                        <div className={styles.boxpost}>
                                    <Image src={icon4} class="img-fluid mt-3 newgost" alt="" />
                                    <h4 class="fontsfpro font20 center colorblack mt-3">
                                    3D Animation Video
                                    </h4>
                        </div>
                        <div className={styles.boxpost}>
                                    <Image src={icon5} class="img-fluid mt-3 newgost" alt="" />
                                    <h4 class="fontsfpro font20 center colorblack mt-3">
                                    Screencast Videos
                                    </h4>
                        </div>
                        <div className={styles.boxpost}>
                                    <Image src={icon6} class="img-fluid mt-3 newgost" alt="" />
                                    <h4 class="fontsfpro font20 center colorblack mt-3">
                                    Typography Videos
                                    </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
