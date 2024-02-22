"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/header/header.module.css';
import icon1 from "media/images/logo.gif"
import email from "media/banner/email.png"
import lang from "media/banner/lang.png"
import chat from "media/banner/chat.png"
import usePopup from "@/app/configs/store/Popup";

const Video = () => {
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    return (
        <>
            <section className={`newcon  ${styles.display}`} id="header">
                <div className={`container ${styles.pointer}`}>
                    <div className="w-[12%]">
                        <Image src={icon1}  />
                    </div>
                    <div className={styles.poster}>
                        <div className={styles.got}>
                            <Image src={email} />     <a href="mailto:queries@infinityanimations.com">  queries@infinityanimations.com</a>
                        </div>
                        <div className={styles.got}>
                            <Image src={lang} />   <a href="tel:833-666-6684">  833-666-6684</a>
                        </div>
                        <div className={styles.got}>
                            <Image src={chat} />   <a href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                        </div>
                        <div className={styles.got1}>
                            <button onClick={popupHandle}>Get Started</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Video
