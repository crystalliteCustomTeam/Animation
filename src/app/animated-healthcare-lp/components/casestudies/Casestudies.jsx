//========== Imports
import Image from 'next/image';
//========== Import Css
import styles from "./Casestudies.module.css"
//========== Import Components
import CTA from "../cta/CTA";
//========= Import Images 
import casestudy1 from "media/healthcare/casestudy1.png";
import casestudy2 from "media/healthcare/casestudy2.png";
import PlayIcon from "media/healthcare/icons/play.png"


const Casestudies = () => {
    return (
        <>
            <section className={`py-20 bg-[#F3F3F3]`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='flex items-center justify-around'>
                        <div className='w-full text-center'>
                            <h2 className='text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold poppins mb-4 text-black text-center'>Our Healthcare <span className='text-[#F5090B]'>Animation</span> Casestudies</h2>
                            <p className='text-[16px] poppins leading-normal font-normal text-black text-center w-full lg:w-8/12 mx-auto'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical</p>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-14">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col shadow-xl">
                                <div className="overlay relative">
                                    <Image src={casestudy1} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-115px] md:translate-y-[-105px] lg:translate-y-[-132px] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[65px]`} />
                                    </div>
                                </div>

                                <div className="px-5 py-10">
                                    <h4 className='text-[20px] tracking-wide poppins font-bold text-black'>
                                        Our Healthcare Animation Casestudies
                                    </h4>
                                    <p className='text-[16px] poppins leading-relaxed font-normal text-black mt-4 mb-6'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical information easily understandable.</p>
                                    <div className="w-max">
                                        <CTA
                                            text="View Casestudy"
                                            bg="bg-prime"
                                            color={`text-white`}
                                            href="javascript:$zopim.livechat.window.show();"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col shadow-xl">
                                <div className="overlay relative">
                                    <Image src={casestudy2} alt="Infinity Animations" />
                                    <div className="h-full w-full absolute left-[50%] top-[50%] lg:top-[132px] translate-x-[-50%] translate-y-[-115px] md:translate-y-[-105px] lg:translate-y-[-132px] flex items-center justify-center ">
                                        <Image src={PlayIcon} alt='Play-icon' className={`${styles.animi} w-[65px]`} />
                                    </div>
                                </div>
                                <div className="px-5 py-10">
                                    <h4 className='text-[20px] tracking-wide poppins font-bold text-black'>
                                        Our Healthcare Animation Casestudies
                                    </h4>
                                    <p className='text-[16px] poppins leading-relaxed font-normal text-black mt-4 mb-6'>We specialize in creating high-quality animated healthcare videos that enhance patient education and engagement. Our expert team delivers compelling visuals to make complex medical information easily understandable.</p>
                                    <div className="w-max">
                                        <CTA
                                            text="View Casestudy"
                                            bg="bg-prime"
                                            color={`text-white`}
                                            href="javascript:$zopim.livechat.window.show();"
                                        />
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

export default Casestudies
