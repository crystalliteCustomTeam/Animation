import Image from 'next/image'
import React from 'react'
// Images
import Win1 from "media/infinity-studio-lp-new/reward-1.png"
import Win2 from "media/infinity-studio-lp-new/reward-2.png"
import Win3 from "media/infinity-studio-lp-new/reward-3.png"
import Win4 from "media/infinity-studio-lp-new/reward-4.png"
import Win5 from "media/infinity-studio-lp-new/reward-5.png"
import Win6 from "media/infinity-studio-lp-new/reward-6.png"
import AwardBg from "media/infinity-studio-lp-2/awardwinning-bg.png"
import Award1 from "media/infinity-studio-lp-2/award1.png"
import Award2 from "media/infinity-studio-lp-2/award2.png"
import Award3 from "media/infinity-studio-lp-2/award3.png"
import Award4 from "media/infinity-studio-lp-2/award4.png"
import Award5 from "media/infinity-studio-lp-2/award5.png"
import Award6 from "media/infinity-studio-lp-2/award6.png"
import Award7 from "media/infinity-studio-lp-2/award7.png"
import Award8 from "media/infinity-studio-lp-2/award8.png"
import AutoScrollSlider from '../AutoScrollSlider/AutoScrollSlider'

const AwardWinning = () => {
    return (
        <section className='bg-white py-[30px] md:py-[80px] relative'>
            <Image src={AwardBg} alt='Inifnity Animation' fill={true} className='z-[1] object-cover object-center' />
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div>
                            <h2 className='text-black poppins text-[25px] md:text-[30px] lg:text-[35px] font-semibold leading-[35px] md:leading-[45px] lg:leading-[60px] text-center mb-2'>An <span className='text-[#F5090B]'>Clients </span> We Serve</h2>
                            <p className='text-[14px] md:text-[16px] poppins text-normal text-black text-center xl:w-7/12 mx-auto'>At Infinity Animations our animators have magic in their hands with their perfect blend of creativity we create incredible visuals for your business. At every stage of the making, we ensure:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <AutoScrollSlider>
                    {
                        [Award1, Award2, Award3, Award4, Award5, Award6, Award7, Award8].map((e, i) => (
                            <div key={i} className="grow-0 group flex items-center justify-center shrink-0 basis-8/12 sm:basis-6/12 md:basis-4/12 lg:basis-3/12 min-w-0 pl-4 pt-12">
                                <div className="relative">
                                    <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-50 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                                    <Image tabIndex={0} key={i} src={e} alt="thumbnails" className="rounded-[10px]" />
                                </div>
                            </div>
                        ))
                    }
                </AutoScrollSlider>
            </div>
        </section>
    )
}

export default AwardWinning
