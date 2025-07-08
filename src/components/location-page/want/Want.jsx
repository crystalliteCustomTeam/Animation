"use client"
import React from 'react'
import Image from 'next/image'
// Import Components
import CTA from '../../cta/CTA'
// Import Images
import Car from "media/images/talk-bg.gif"

const Want = ({ content }) => {
    const { title, wantDesc } = content;
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <>
            <section className={`my-8 md:mb-0 md:mt-20 wantbg md:bg-[url('../../public/images/talk-bg.png')] bg-no-repeat bg-[length:100%] md:h-[30vh] lg:h-[80vh] relative py-7 md:py-0`}>
                <div className='hidden md:grid grid-cols-2'>
                    <Image src={Car} className='w-[48%] rotate-[5deg] absolute left-[2%] bottom-[25%] lg:bottom-[16%]' alt='Infinity Animation' />
                </div>
                <div className="md:absolute right-[13%] top-[15%] lg:top-[20%] xl:top-[18%] 2xl:top-[25%] w-[60%] md:w-[35%] lg:w-[28%] mx-auto">
                <h2 className='text-white text-[25px] lg:text-[38px] xl:text-[40px] font-bold font-sans text-center' dangerouslySetInnerHTML={{__html : title}} />
                <p className='text-white text-[12px] lg:text-[14px] xl:text-[16px] font-normal font-sans text-center md:w-6/12 mx-auto lg:w-full' dangerouslySetInnerHTML={{__html: wantDesc}} />
                    <div className="flex flex-wrap gap-3 lg:gap-4 justify-center pt-3 lg:pt-6">
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
            </section>
        </>
    )
}

export default Want
