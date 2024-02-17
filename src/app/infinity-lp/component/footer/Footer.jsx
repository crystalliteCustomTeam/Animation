"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/Footer/footer.module.css';
import payment from "../../../../../public/banner/payment.png"
import top from "../../../../../public/banner/top.png"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

const Video = () => {
   
    return (
        <>
            <section className={`newcon ${styles.touch}`}>
            <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-2 items-center ${styles.world}`}>
                        <div>
                            <h3 className={styles.touchnow}>Get In <span class="colorred2">Touch</span> Now!</h3>
                                <p className={styles.wordsmosth}>Its High Time to Showcase
                                    Your
                                    Store to the World</p>

                                <div className={styles.form2}>
                                    <input type="text" name="name" class="form-control" placeholder="Enter Your Name" />
                                    <input type="email" name="email" class="form-control" placeholder="Enter Your Email" />
                                </div>
                                <div className={styles.form2}>
                                    <input type="tel" name="name" class="form-control" placeholder="Enter Your Number" />
                                </div>
                                <div class="">
                                    <textarea  className={styles.megg} id="exampleFormControlTextarea1" placeholder="Type Message" rows="5"></textarea>
                                    <input type="submit" value="Get Started" className={styles.showcas} />
                        </div>
                        
                    </div>
                    <div className={styles.newtab}>
                            <ul className={styles.newfight}>
                                <li class="fontmontserratregular  pb-3"><IoCall /><a class="colorwhite" href="">  +1-000-000-0000</a></li>
                                <li class="fontmontserratregular  pb-3"><MdEmail /><a class="colorwhite" href="">  sales.infinityanimations.com</a></li>
                                <li class="fontmontserratregular  pb-3"><FaGlobe /><a class="colorwhite" href="">  www.infinityanimations.com</a></li>
                                <li><Image src={payment} class="img-fluid" alt="" /></li>
                        </ul>
                    </div>
                    </div>
            </div>

            <a className={styles.animatio} href="#header">
                <Image src={top} alt="" />
            </a>
            </section>
            <section className={styles.longton}>
            <div class={`container mx-auto `}>
                        <div class={`md:grid md:grid-cols-1 items-center ${styles.world1}`}>
                            <p>Copyright © 2024, Infinity Animations All Rights Reserved</p>
                        </div>
                        
                </div>
            </section>

            
        </>
    )
}

export default Video
