"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/header/header.module.css';
import icon1 from "../../../../../public/banner/logo.png"
import email from "../../../../../public/banner/email.png"
import lang from "../../../../../public/banner/lang.png"
import chat from "../../../../../public/banner/chat.png"

const Video = () => {
   
    return (
        <>
            <section className={`newcon  ${styles.display}`} id="header">
              <div className={`container ${styles.pointer}`}>
                <div>
                    <Image src={icon1}  />
                </div>
                <div className={styles.poster}>
                    <div className={styles.got}>
                    <Image src={email} />     <a href="mailto:info@infinityanimations.com">  info@infinityanimations.com</a>
                    </div>
                    <div className={styles.got}>
                    <Image src={lang} />   <a href="tel:833-666-6684">  833-666-6684</a>
                    </div>
                    <div className={styles.got}>
                    <Image src={chat} />   <a href="javascript:$zopim.livechat.window.show();">Live Chat</a>
                    </div>
                    <div className={styles.got1}>
                        <a href="tel:833-666-6684">Get Started</a>
                    </div>
                </div>
              </div>
          
            </section>
        </>
    )
}

export default Video