"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/display/display.module.css';
import icon1 from "media/banner/display.png"
import lang from "media/banner/lang.png"
import usePopup from "@/app/configs/store/Popup";

const Video = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };

    return (
        <>
            <section className={`newcon ${styles.display}`}>
                <div className={`container mx-auto ${styles.pointer} `}>
                    <div className={`md:grid md:grid-cols-1`}>
                        <div className={styles.newscool}>
                            <Image src={icon1} className={`  mostimg ${styles.newyork}`} alt="Infinity Animations" />
                            <div className={styles.today}>
                                <h3>Start Displaying Your Brand With <br></br> Amazing Animated Videos
                                </h3>
                                <p>Spread profound message and scale up your business with our animated
                                    video services today!</p>
                                <div className={styles.message}>
                                    <button onClick={popupHandle} className={styles.scale}>Get Started</button>
                                    <a href="javascript:void(Tawk_API.toggle())" className={styles.sefve}>Live Chat</a>
                                    <div className={styles.pont}>
                                        <Image src={lang} alt="Infinity Animations" />
                                        <a className={styles.newlong} href="tel:833-666-6689"> 833-666-6689</a>
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
