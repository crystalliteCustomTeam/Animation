"use client"
import React from 'react'
// Import Components
import CTA from '../cta/CTA'

const Want = ({ content }) => {
    const { title, wantDesc, btnBg, btnColor, btnBorder, btnHover, } = content;

    return (
        <>
            <section className={`pt-10 md:mt-20 wantbg md:bg-[url('../../public/images/talk-bg.png')] bg-no-repeat bg-[length:100%] md:h-[30vh] lg:h-[80vh] relative py-7 md:py-0`}>
                <div className="md:absolute right-[7.3%] top-[15%] lg:top-[20%] xl:top-[18%] 2xl:top-[25%] w-[40%] mx-auto">
                    <h2 className='text-white text-[25px] lg:text-[38px] xl:text-[50px] font-bold font-sans text-center'>{title}</h2>
                    <p className='text-white text-[12px] lg:text-[14px] xl:text-[16px] font-normal font-sans text-center md:w-6/12 mx-auto lg:w-full'>{wantDesc}</p>
                    <div className="flex flex-wrap gap-3 lg:gap-4 justify-center pt-3 lg:pt-6">
                        <CTA
                            text="Get Started"
                            icon1={true}
                            bg="bg-prime"
                            color={`text-white`}
                            border={`border-2 border-[#f5090b]`}
                            hover="hover:bg-transparent"
                            href="#"
                        />
                        <CTA
                            text="Live Chat"
                            icon2={true}
                            bg="bg-[#000]"
                            color={`text-white`}
                            border={`border-2 border-[#fff]`}
                            hover="hover:bg-prime"
                            href="javascript:$zopim.livechat.window.show();"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Want
