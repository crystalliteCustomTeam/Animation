"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/explainer-videos-animations/component/logo/logo.module.css';
import icon1 from "media/banner/trusted.png"

const Banner = () => {

    return (
        <>
            <section className={`newcon ${styles.logo}`}>
                <div className={`container mx-auto ${styles.pointer} `}>
                    <div className={`md:grid md:grid-cols-1 ${styles.animate}`}>
                        <Image src={icon1} className={styles.newtoen} alt="Infinity Animations" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
