"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/Packages/packages.module.css';
import livechat from "../../../../../public/banner/livechat.png"
import check from "../../../../../public/banner/check.png"
import checkw from "../../../../../public/banner/checkw.png"
import star from "../../../../../public/banner/star.png"
import livechat2 from "../../../../../public/banner/livechat2.png"


const Video = () => {
   
    return (
        <>
            <section className={`newcon ${styles.display}`}>
                <div class={`container mx-auto`}>
                    <div class={`md:grid md:grid-cols-1`}>
                    <div className={styles.element}>
                        <h3 className={`fontsfpro mb-0 ${styles.heading}`}>Our  <span class="colorred2">Packages </span>
                        </h3>
                        <p className={styles.words}>
                        Infinity Animations is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
                        </p>
                    </div>
                    </div>
                </div>
                <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-3`}>
                    <div className={styles.pkgcard}>
                        <div className={styles.cardbef}>
                            <Image src={star} class="img-fluid" alt="Star" />
                        </div>
                        <h3 className={styles.startup}>Startup Package</h3>
                        <h4 className={styles.price}>$195</h4>
                        <ul className={styles.priceList}>
                            <li> <Image src={check} alt="Infinity" /> 60 Seconds Duration</li>
                            <li> <Image src={check} alt="Infinity" /> Script Writing</li>
                            <li> <Image src={check} alt="Infinity" /> Custom Artwork</li>
                            <li> <Image src={check} alt="Infinity" /> Background Music</li>
                            <li> <Image src={check} alt="Infinity" /> HD Format Video</li>
                            <li> <Image src={check} alt="Infinity" /> Dedicated Support</li>
                            <li> <Image src={check} alt="Infinity" /> Professional Voice-over SFX</li>
                        </ul>
                        <div className={styles.pkgcta}>
                            <div className={styles.speak}>
                                <p class="">Speak With Us</p>
                                <a class="" href="#">+1-000-000-0000</a>
                            </div>
                            <div className={styles.speak}>
                                <p class="">Want To Discuss</p>
                                <a class="" href="#">Live Chat Now</a>
                            </div>
                        </div>
                        <div className={styles.pkgcta}>
                            <a href="#" className={styles.popup}>Get Started</a>
                            <a href="#" className={styles.chat} >
                                <span>Live Chat</span>
                                <Image src={livechat} alt="Live_Chat" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.pkgcard2}>
                        <div className={styles.cardbef}>
                            <Image src={star} class="img-fluid" alt="Star" />
                            <Image src={star} class="img-fluid" alt="Star" />
                        </div>
                        <h3 className={styles.startup}>Classic Package</h3>
                        <h4 className={styles.price}>$499</h4>
                        <ul className={styles.priceList}>
                            <li> <Image src={checkw} alt="Infinity" /> 60 Seconds Duration</li>
                            <li> <Image src={checkw} alt="Infinity" /> Script Writing</li>
                            <li> <Image src={checkw} alt="Infinity" /> Professional Voice-over & SFX</li>
                            <li> <Image src={checkw} alt="Infinity" /> Hand-drawn Illustrations</li>
                            <li> <Image src={checkw} alt="Infinity" /> Unlimited Revisions</li>
                            <li> <Image src={checkw} alt="Infinity" /> HD Format Video</li>
                            <li> <Image src={checkw} alt="Infinity" /> Dedicated Support</li>
                        </ul>
                        <div className={styles.pkgcta}>
                            <div className={styles.speak}>
                                <p class="">Speak With Us</p>
                                <a class="" href="#">+1-000-000-0000</a>
                            </div>
                            <div className={styles.speak}>
                                <p class="">Want To Discuss</p>
                                <a class="" href="#">Live Chat Now</a>
                            </div>
                        </div>
                        <div className={styles.pkgcta}>
                            <a href="#" className={styles.popup}>Get Started</a>
                            <a href="#" className={styles.chat} >
                                <span>Live Chat</span>
                                <Image src={livechat2} alt="Live_Chat" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.pkgcard}>
                        <div className={styles.cardbef}>
                            <Image src={star} class="img-fluid" alt="Star" />
                            <Image src={star} class="img-fluid" alt="Star" />
                            <Image src={star} class="img-fluid" alt="Star" />
                        </div>
                        <h3 className={styles.startup}>Premium Package</h3>
                        <h4 className={styles.price}>$799</h4>
                        <ul className={styles.priceList}>
                            <li> <Image src={check} alt="Infinity" /> 60 Seconds Duration</li>
                            <li> <Image src={check} alt="Infinity" /> Script Writing</li>
                            <li> <Image src={check} alt="Infinity" /> Professional Voice-over & SFX</li>
                            <li> <Image src={check} alt="Infinity" /> Custom 2D Character Illustration</li>
                            <li> <Image src={check} alt="Infinity" /> Unlimited Revisions</li>
                            <li> <Image src={check} alt="Infinity" /> HD Format Video</li>
                            <li> <Image src={check} alt="Infinity" /> Dedicated Support</li>
                        </ul>
                        <div className={styles.pkgcta}>
                            <div className={styles.speak}>
                                <p class="">Speak With Us</p>
                                <a class="" href="#">+1-000-000-0000</a>
                            </div>
                            <div className={styles.speak}>
                                <p class="">Want To Discuss</p>
                                <a class="" href="#">Live Chat Now</a>
                            </div>
                        </div>
                        <div className={styles.pkgcta}>
                            <a href="#" className={styles.popup}>Get Started</a>
                            <a href="#" className={styles.chat} >
                                <span>Live Chat</span>
                                <Image src={livechat} alt="Live_Chat" />
                            </a>
                        </div>
                    </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
