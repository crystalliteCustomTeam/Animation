"use client"
// Import Components
import CTA from "@/components/cta/CTA";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// Import Images
import PlayIcon from "media/icons/play.png"
//
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"


function Why({ content }) {
    const { title, para, bannerLeft, thumbnail, isCTA } = content;

    //========= fancy box =========
    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }

    return (
        <section className={`flex items-center justify-start py-6 md:py-12 lg:py-16 relative `}>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-10'>
                    {bannerLeft && <div className={`order-last lg:order-first mt-[25px] lg:mt-0  lg:col-span-5`} >
                        <Fancybox options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}>
                            <Link className="w-full h-full" href={bannerLeft} datafancybox="gallery">
                                <div className={`w-full h-full overlay relative group overflow-hidden rounded-lg`}>
                                    <div className='w-full h-full flex justify-center items-center  overlay-div-testi '>
                                        <Image src={thumbnail} alt="Infinity Animations" width={468} height={263} className='h-full w-full' />
                                        <div className=" bg-secondary-100/70 h-full w-full absolute left-[50%] top-[100%] translate-x-[-50%] group-hover:top-[0%] flex items-center justify-cente">
                                            <Image src={PlayIcon} alt='Play-icon' className='brightness-200 invert-0 mx-auto' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Fancybox>
                    </div>}
                    <div className={` lg:col-span-7  flex flex-col justify-center relative`}>
                        <h2 className={`text-[#fff] text-[30px] sm:text-[50px] font-bold font-sans leading-tight mb-5`} dangerouslySetInnerHTML={{ __html: title }} />
                        <div className="text-[15px] flex flex-col gap-y-3 lg:text-[16px] text-[#fff] font-light font-sans leading-normal tracking-wider mb-10" dangerouslySetInnerHTML={{ __html: para }} />
                        {
                            isCTA && <div className="flex gap-6">
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
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why