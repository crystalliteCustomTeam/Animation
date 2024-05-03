import Image from 'next/image';
import { useState } from 'react';
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Css
import styles from "./Illustrative.module.css"
// Import Component
import usePopup from '@/app/configs/store/Popup';
// Import Images
import IlluImage1 from "media/illustration-experts/illu-img-li-1.png"
import IlluImage2 from "media/illustration-experts/illu-img-2d-2.png"
import IlluImage3 from "media/illustration-experts/illu-img-3d-3.png"
import IlluImage4 from "media/illustration-experts/illu-img-flat-4.png"
import IlluImage5 from "media/illustration-experts/illu-img-wb-5.png"
import IlluImage6 from "media/illustration-experts/illu-img-mas-6.png"
import TabImage1 from "media/illustration-experts/tab-illus-inner-li-1.png"
import TabImage2 from "media/illustration-experts/tab-illus-inner-1.png"
import TabImage3 from "media/illustration-experts/tab-illus-inner-3d-2.png"
import TabImage4 from "media/illustration-experts/tab-illus-inner-wb-5.png"
import TabImage5 from "media/illustration-experts/tab-illus-inner-mas-3.png"
import TabImage6 from "media/illustration-experts/tab-illus-inner-fl-4.png"
import CheckIcon from "media/illustration-experts/check-icon.png"


const tabInfo = [
    { label: "Logo Illustration", image: IlluImage1, index: 0 },
    { label: "2D Illustration", image: IlluImage2, index: 1 },
    { label: "3D Illustration", image: IlluImage3, index: 2 },
    { label: "Whiteboard Illustration", image: IlluImage4, index: 3 },
    { label: "Mascot Illustration", image: IlluImage5, index: 4 },
    { label: "Flat Illustration", image: IlluImage6, index: 5 },
];

const tabContents = [
    [
        {
            image: TabImage1,
            title: "Logo Illustration",
            desc: `You can’t make your brand standout without an astounding logo that can speak volumes. To make
            sure you are provided with the finest quality of logo illustration service, we follow a
            client-first approach, which helps us understand your specifications and work accordingly to
            meet your expectations.`,
            features: {
                list1: "Industry specific designers",
                list2: "Money back guarantee",
                list3: "100% original designs",
                list4: "24x7 customer support",
            }
        },
    ],
    [
        {
            image: TabImage2,
            title: "2D Illustration",
            desc: `We got highly skilled artists who prefer hand-drawn Illustrators for 2D Illustration. We
            possess the perfect yet unique, creative styles and ideas for visual storytellers. We understand
            your unique and creative needs and requirements and present you with the best of the best 2D
            Illustration.`,
            features: {
                list1: "Fetches Audience",
                list2: "Unique ideas",
                list3: "Communicating Designs",
                list4: "Easy to understand",
            }
        },
    ],
    [
        {
            image: TabImage3,
            title: "3D Illustration",
            desc: `We got the perfect solution for your 3D illustration with our highly skilled and experienced 3D
            designers. We offer various styles and specialties, from constructive visualization to character
            design, through our 3D illustration services. Check out our interesting 3D illustrative designs.`,
            features: {
                list1: "Realistic, easy, quick",
                list2: "Effective Marketing",
                list3: "project execution",
                list4: "Expert designers",
            }
        },
    ],
    [
        {
            image: TabImage4,
            title: "Whiteboard Illustration",
            desc: `Spice up your story with our excellent and unique whiteboard illustrations. Give an astonishing
            twist to your story with the help of our highly experienced and qualified whiteboard designers.
            Learn more about how to enhance your whiteboard story with the help of our illustrations.`,
            features: {
                list1: "Engaging and Interactive",
                list2: "fun, warm, and charming",
                list3: "different and fresh",
                list4: "sky’s NOT the limit.",
            }
        },
    ],
    [
        {
            image: TabImage5,
            title: "Mascot Illustration",
            desc: `A mascot is a brand representative of any firm; that's why it requires much more focus and
            accuracy when designing one. Our Illustrative mascot designers make sure that you get the
            perfect illustration for your mascot, and it presents the whole organization's idea.`,
            features: {
                list1: "Enhanced communication",
                list2: "Flexibility of personification",
                list3: "Memorability & recognizability",
                list4: "Consistent visual marking",
            }
        },
    ],
    [
        {
            image: TabImage6,
            title: "Flat Illustration",
            desc: `Our Illustrative Flat designs are two-dimensional art styles that are perceived to be more
            straightforward and more precise. Any organization needs a logo for its firm. For such
            businesses, we recommend out flat illustrative designs. They are attractive and highly
            affordable.`,
            features: {
                list1: "readability & legibility",
                list2: "clear visual hierarchy",
                list3: "easy adjustability",
                list4: "effective legibility",
            }
        },
    ],

];
const Illustrative = () => {
    // Popup
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    // ====== Responsive Slider 
    const testiSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        focusOnSelect: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className='py-[50px] hidden md:block bg-[url("../../public/illustration-experts/illus-tab-sec-bg.png")] h-[100%] bg-cover bg-center'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[#231f20] text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Our Best Illustrative Design Types</h2>
                            <p className='text-[#231f20] text-center text-[15px] font-[300] montserrat leading-[25px] py-[25px]'>From custom book cover illustrations to mascot logos, we’ve
                                been providing our clients with a range of illustration design services.</p>


                            <div className={``}>
                                <Slider {...testiSlider} className="streamedSlider border-b border-gray-200 pb-[10px]">
                                    {tabInfo.map((item, index) => (
                                        <div key={index}
                                            className={`flex justify-center  px-5 md:px-8 py-3 text-[15px] lg:text-[18px] montserrat cursor-pointer text-center   ${activeTab === index ? "text-primary-100 border-b-2 border-primary-100" : "text-[#898989]"}`}
                                            onClick={() => handleTabClick(index)}>
                                            <div className='flex justify-center'> <Image src={item.image} /></div>
                                            {item.label}
                                        </div>
                                    ))}
                                </Slider>

                                <div className="grid grid-cols-12 gap-y-12 justify-content-center py-[40px]">
                                    {tabContents[activeTab].map((item, index) => (
                                        <>
                                            <div
                                                key={index}
                                                className={`col-span-12 lg:col-span-6 content-center px-[15px] relative `}
                                            >
                                                <div
                                                    className={`flex justify-center`}
                                                >
                                                    <Image src={item.image}
                                                        height={300}
                                                        alt="Infinity Animation" quality={85} />
                                                </div>
                                            </div>
                                            <div
                                                className={`col-span-12 lg:col-span-6 `}
                                            >
                                                <h2 className=" text-[#685edd] text-[36px] font-[700] montserrat mb-5">
                                                    {item.title}
                                                </h2>
                                                <p className="text-[15px] text-[#606060] font-extralight montserrat font-sans leading-snug tracking-wider text-justify mb-5">
                                                    {item.desc}
                                                </p>
                                                <div className='grid grid-cols-12 gap-y-4 content-start justify-items-stretch border-t border-gray-200 py-[20px]'>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[15px] text-[#606060] font-extralight montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[15px] text-[#606060] font-extralight montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[15px] text-[#606060] font-extralight montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-6 relative justify-self-start'>
                                                        <div
                                                            className="flex justify-center items-center text-[15px] text-[#606060] font-extralight montserrat font-sans leading-snug tracking-wider text-justify"
                                                        >
                                                            <div className='pe-2'>
                                                                <Image src={CheckIcon} width={20} />
                                                            </div>{item.features.list1}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4 md:gap-8 py-[10px]">
                                                    <div className="btn">
                                                        <button onClick={popupHandle} className='flex items-center text-[16px] text-white hover:text-black font-[700] montserrat bg-[#fa690c] hover:bg-[#ffffff] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl-[1.5px]-[#fa690c]  hover:border-black'>
                                                            Get Started
                                                        </button>
                                                    </div>
                                                    <div className="btn">
                                                        <a href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-black hover:text-white font-[700] montserrat bg-[#ffffff] hover:bg-[#fa690c] py-[12px] px-[20px] md:px-[35px] tracking-[.3px] rounded-full leading-[20px] shadow-2xl border-[1.5px] border-[#000000] hover:border-[#fa690c]'>
                                                            Live Chat
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Illustrative

