import { usePathname } from 'next/navigation';
// Import Components
import Image from 'next/image';
// Import Images
import DescDot from "media/location-page/desc-dot.png"


function Description({ content }) {
    const { title, para, bannerLeft, bannerRight, downArrow } = content;
    // Set Bg-Image
    const router = usePathname();
    let backgroundImage;
    let margin;
    switch (router) {
        case "/":
            backgroundImage = 'bg-cover bg-bottom lg:items-end xxl:items-center lg:bg-[url("../../public/home/banner-img.gif")]'
            margin = 'mt-0'
            break;
        case '/why-us':
            backgroundImage = 'bg-[length:100%_100%] bg-bottom lg:bg-[url("../../public/why-us/banner-bg.png")]'
            break;
        case '/video-animation-portfolio':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/portfolio/banner-bg.png")]'
            break;
        case '/video-animation-process':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/process/banner-bg.gif")]'
            break;
        case '/video-animation-pricing':
            backgroundImage = 'bg-[length:100%_140%] bg-center lg:bg-[url("../../public/pricing/banner-bg.gif")]'
            break;
        case '/blog':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/blogs/banner-bg.gif")]'
            break;
        case '/contact-us':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/contact/banner-bg.gif")]'
            break;
        case '/custom-logo-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/logo-animation/banner-bg.png")]'
            break;
        case '/architectural-visualization':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/architectural-services/banner-bg.gif")]'
            break;
        case '/cgi-and-vfx-services':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/cgi-and-vfx/banner-bg.png")]'
            break;
        case '/motion-graphics':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/motion-graphics/banner-bg.png")]'
            break;
        case '/video-editing':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/video-editing/banner-bg.png")]'
            break;
        case '/2d-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/2d-animation/banner-bg.png")]'
            break;
        case '/3d-animation':
            backgroundImage = 'bg-[length:100%_100%] bg-center lg:bg-[url("../../public/3d-animation/banner-bg.gif")]'
            break;
        case '/whiteboard-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/whiteboard/banner-bg.png")]'
            break;
        case '/infographics-design':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/infographics/banner-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/hybrid-cel/banner-bg.png")]'
            break;
        case '/tech-videos':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/tech-videos/banner-bg.png")]'
            break;
        case '/corporate-video':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/corporate-video/banner-bg.png")]'
            break;
        default:
            break;
    }
    return (
        <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
            <div className="px-[35px] sm:px-8 lg:max-w-7xl mx-auto">
                <div className='grid grid-cols-12   justify-items-center w-full '>
                    {bannerLeft && <div className={`order-last lg:order-first  col-span-12 lg:col-span-6 flex flex-col justify-between lg:h-full`}>
                        <Image src={bannerLeft} />
                    </div>
                    }
                    <div className={`${bannerLeft && "lg:ps-[55px]"} col-span-12 lg:col-span-6 ms-auto pe-5 flex flex-col justify-center `}>
                        <h1 className={`text-[#fff] text-[25px] md:text-[35px] font-[800] montserrat font-sans leading-[45px]  mt-5 mb-4 text-start`}>
                            {title}
                        </h1>
                        <p className="text-[12px] sm:text-[15px] montserrat text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                            {para}
                        </p>
                        {downArrow &&
                            <div className={`flex items-center h-[70px] ${downArrow === 'start' &&  'justify-start border-l-2 mt-3' } ${downArrow === 'end' &&  'justify-end border-r-2 mt-3' }  border-gray-500`}>
                                <Image src={DescDot} width='25px' height='25px' className={`${downArrow === 'start' &&  'ms-[-18px]' } ${downArrow === 'end' &&  'me-[-18px]' }`} />
                            </div>
                        }
                    </div>
                    {bannerRight && <div className={`col-span-12 lg:col-span-6 my-auto flex flex-col justify-between lg:h-full`}>
                        <Image src={bannerRight} />
                    </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default Description