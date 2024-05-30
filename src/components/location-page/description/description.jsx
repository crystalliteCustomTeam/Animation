import { usePathname } from 'next/navigation';
// Import Components
import Image from 'next/image';
// Import Images
import DescDot from "media/location-page/desc-dot.png"
import { useRef, useState } from 'react';



function Description({ content, poster }) {
    const { title, para, bannerLeft, bannerRight, downArrow } = content;

    // video code start
    // const handleVideoPlay = (e) => {
    //     const video = e.currentTarget.querySelector('video');
    //     video.play();
    // };
    // const handleVideoPause = (e) => {
    //     const video = e.currentTarget.querySelector('video');
    //     video.pause();
    // };

    return (
        <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
            <div className="px-[35px] sm:px-8 lg:px-16 mx-auto">
                <div className='grid grid-cols-12   justify-items-center w-full'>
                    {bannerLeft && <div className={`order-last lg:order-first mt-[25px] lg:mt-0  col-span-12 lg:col-span-6 flex flex-col justify-between lg:me-auto lg:h-full`} >
                        <Image src={bannerLeft} />
                    </div>
                    }
                    
                    {/* {bannerLeft && (
                        <div className={`order-last lg:order-first mt-[25px] lg:mt-0 col-span-12 lg:col-span-6 flex flex-col justify-between lg:me-auto lg:h-full w-full border`} onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>
                            <video loading="lazy" muted loop preload="auto" poster={poster} autoPlay={false} className="rounded-[12px] w-[150px] h-full object-cover " >
                                <source src={bannerLeft} type="video/mp4" />
                            </video>
                        </div>
                    )} */}

                    <div className={` col-span-12 lg:col-span-6 ms-auto pe-5 flex flex-col justify-center `}>
                        <h2 className={`text-[#fff] text-[35px] sm:text-[40px] font-semibold font-sans leading-tight mt-5 mb-5 text-start`}>
                            {title}
                        </h2>
                        <p className="text-[12px] sm:text-[15px] montserrat text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                            {para}
                        </p>
                        {downArrow &&
                            <div className={`flex items-center h-[70px] mt-[35px] ${downArrow === 'start' && 'justify-start border-l-2 '} ${downArrow === 'end' && 'justify-end border-r-2'}  border-gray-500`}>
                                <Image src={DescDot} width='25px' height='25px' className={`${downArrow === 'start' && 'ms-[-18px]'} ${downArrow === 'end' && 'me-[-18px]'}`} />
                            </div>
                        }
                    </div>
                    {bannerRight && <div className={`col-span-12 lg:col-span-6 lg:ms-auto my-auto mt-[25px] lg:mt-0 flex flex-col justify-between lg:h-full`}>
                        <Image src={bannerRight} />
                    </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default Description