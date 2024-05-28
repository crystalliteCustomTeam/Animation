"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { main, title, para: { paraArray }, isCTA, flodImg, css, isBtns } = content;
    // set fold Image
    const router = usePathname();
    let lookinImage;
    let lookingSecCol;
    let bgTransparent;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        case '/2d-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/3d-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/architectural-visualization':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/cgi-and-vfx-services':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/contact-us':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/infographics-design':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/motion-graphics':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case 'video-animation-portfolio':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case 'video-animation-pricing':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/tech-videos':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/video-editing':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/whiteboard-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/why-us':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        default:
            break;
    }

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative ${bgTransparent}`}>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className='grid grid-cols-12 flex flex-col-reverse lg:flex-row items-end justify-around gap-y-7'>
                        <div className="col-span-12 lg:col-span-5 flex flex-col items-start ">
                            <h1 className={`text-[40px] md:text-[50px] xl:text-[55px] font-semibold font-sans leading-none  mt-5 mb-4 text-start me-auto`}>
                                {main}
                            </h1>
                            <div className={`w-full lg:w-[500px] ${lookinImage} `}>
                                <Image src={flodImg} className={`w-full mx-auto ${css}`} alt="Infinity Animation" quality={85} />
                            </div>
                        </div>
                        <div className={`col-span-12 lg:col-span-7  ${lookingSecCol} lg:ps-[35px]`}>
                            <h1 className="text-[15px] sm:text-[20px] lg:text-[25px] xl:text-[30px] font-semibold font-sans leading-tight mb-5">
                                {title}
                            </h1>
                            {paraArray.map((para, index) => (
                                <p key={index} className="text-[16px] font-[400] font-sans leading-snug tracking-wider text-justify mb-5">
                                    {para}
                                </p>
                            ))}

                            {isBtns ?
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
                                    {isCTA ?
                                        <CTA
                                            text="Live Chat"
                                            icon="/icons/chat.png"
                                            iconCss="w-[40px]"
                                            bg="bg-[#000]"
                                            color={`text-white`}
                                            border={`border-2 border-[#fff]`}
                                            hover="hover:bg-prime"
                                            href="javascript:$zopim.livechat.window.show();"
                                        /> : null}
                                </div> :
                                null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Looking
