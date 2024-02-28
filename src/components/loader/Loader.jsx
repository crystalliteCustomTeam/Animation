import React from "react";
import Image from "next/image"
// Import Image
import logo from "media/images/loader-logo.webp";
// Import Css
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <>
            <section className={`${styles.loader} fixed left-0 top-0 w-[100%] h-[100vh]  z-50 flex flex-col items-center justify-center bg-whit`}>
                <div>
                    <p className="text-[30px] font-sans leading-3 tracking-wider">Infinity</p>
                    <p className={`${styles.animi} text-[30px] font-bold font-sans tracking-wider`}>Animations</p>
                </div>
                <p className={`${styles.para} pt-1`}></p>
            </section>
        </>
    )
}

export default Loader



