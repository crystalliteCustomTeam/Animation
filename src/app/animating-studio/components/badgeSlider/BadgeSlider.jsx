import React from "react";
import Image from "next/image";
// Import Images
import Win1 from "media/infinity-studio-lp-new/reward-1.png"
import Win2 from "media/infinity-studio-lp-new/reward-2.png"
import Win3 from "media/infinity-studio-lp-new/reward-3.png"
import Win4 from "media/infinity-studio-lp-new/reward-4.png"
import Win5 from "media/infinity-studio-lp-new/reward-5.png"
import Win6 from "media/infinity-studio-lp-new/reward-6.png"

const BadgeSlider = () => {
    return (
        <section className='bg-white py-[30px] md:py-[60px]'>
            <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div>
                            <h2 className='text-[#000000] text-center font-[600] poppins text-[32px] md:text-[42px] lg:text-[48px]'>An <span className="text-[#A70A0E]">Award-Winning</span> Video Animation Company</h2>
                            <p className='text-[#231F20] text-[16px] poppins font-[400] py-[17px] text-center lg:w-[90%] mx-auto leading-[20px] md:leading-[22px] mb-0'>At Infinity Animations, we create powerful video animations that elevate your brand. Our dedication to <br className='hidden lg:block' /> excellence has earned us numerous awards and accolades, including: </p>
                        </div>
                        <div className="flex items-center flex-wrap gap-10 lg:gap-0 justify-center lg:justify-between pt-12">
                            <Image src={Win1} alt='infinity Animation' className='w-[10%]' />
                            <Image src={Win2} alt='infinity Animation' className='w-[10%]' />
                            <Image src={Win3} alt='infinity Animation' className='w-[10%]' />
                            <Image src={Win4} alt='infinity Animation' className='w-[10%]' />
                            <Image src={Win5} alt='infinity Animation' className='w-[10%]' />
                            <Image src={Win6} alt='infinity Animation' className='w-[10%]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BadgeSlider
