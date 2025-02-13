"use client"
// Import Components
import CTA from "@/components/cta/CTA";
// Next
import Image from "next/image";
// Import Images
import right from "media/location-page/speedometer.png";

const Speedometer = () => {

    return (
        <>
            <section className="py-[100px]">
                <div className="container">
                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-12 lg:col-span-6 ms-auto pe-0 md:pe-5 flex flex-col justify-center relative'>
                            <h1 className={`text-[30px] md:text-[50px] xl:text-[46px] 2xl:text-[60px] font-semibold font-sans leading-tight mb-5`}>
                                <span className="text-primary-100">Best</span> Video Animation <br /> Company <span className="text-primary-100">in New York <br /></span> With Diverse Services
                            </h1>
                            <p className="text-[15px] lg:text-[16px] font-normal font-sans leading-normal tracking-wider mb-5">
                                With diverse video animation and production services, we are leading the market with quality work, and great customer services. Here are the animated video production services in New York you can get from Infinity Animation:
                            </p>
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                />
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[40px]"
                                    bg="bg-[#000]"
                                    color={`text-white`}
                                    border={`border-2 border-[#fff]`}
                                    hover="hover:bg-prime"
                                    href="javascript:void(Tawk_API.toggle())"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
                            <Image src={right} alt='Infinity Animation' className="mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Speedometer
