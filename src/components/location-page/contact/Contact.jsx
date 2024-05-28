"use client"
import Image from "next/image";
// Import Components
import Form from "../form/Form";
// Import Images
import contactBg from "media/images/fold-bg.png";
import contactImg from "media/location-page/contact-img.png";
// Import Images
import styles from "./Contact.module.css"

const Contact = () => {

    // form code start

    return (
        <>
            <section className={`w-full h-full mt-8 md:mt-16 mb-10 flex items-center justify-star `}>
                {/* <Image src={contactBg} className="absolute w-full top-[-12%] left-[-12%] sm:block hidden -z-1" alt="Infinity Animation" /> */}
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                        <h1 className="text-[15px] sm:text-[25px] lg:text-[35px] xl:text-[50px] font-semibold font-sans leading-none mb-3">
                        Connect With Us
                        </h1>
                        <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3 text-center mb-0 lg:mb-5">
                        Let’s engage, share ideas, and explore together
                        </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-4 bg-transparent relative z-50 '>
                        <div className="px-6 py-8 md:py-12 border rounded-[30px] w-[90%]">
                            <Form />
                        </div>
                        <div className={`${styles.imgBefore} relative lg:block hidden`}>
                            <Image src={contactImg} className="absolute right-[-3.5%] xl:right-[-4%] 2xl:right-[-4%] xxl:right-[-15%] 3xl:right-[-29.5%] top-[-14.5%]" alt="Infinity Animation" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
