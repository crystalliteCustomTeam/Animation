import Image from 'next/image';
// Import Images
import DescDot from "media/location-page/desc-dot.png"
import BlogImg1 from "media/inner-blogs/image-1.svg"
import BlogImg2 from "media/inner-blogs/image-2.svg"
import style from "./blogdescription.module.css"

function BlogDescription({ content }) {
    const { DescArray, DescParaArray } = content;

    return (
        <section className={`w-full flex items-center justify-start py-6 md:py-12 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative `}>
            <div className="container">
                <div className='grid grid-cols-12 w-full'>

                    <div className={` col-span-12 lg:col-span-9 ms-auto pe-5 lg:pe-[25px]`}>
                        {DescArray?.map((item, index) => (
                            <div className=' pb-[45px]'>
                                <h2 className={`text-[25px] sm:text-[30px] lg:text-[40px] xl:text-[50px] font-bold font-sans leading-tight mb-5 capitalize`}>
                                    {item.title}
                                </h2>
                                <p className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                    {item.para}
                                </p>
                                <p className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start pt-[15px]">
                                    {item.para2}
                                </p>
                                {item.DescParaArray?.map((array, index) => (
                                    <div key={index}>
                                        <h4 className={`text-[20px] xl:text-[30px] font-bold font-sans leading-tight my-4 capitalize`}>
                                            {array?.title}
                                        </h4>
                                        <p className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                            {array?.para}
                                        </p>
                                    </div>
                                ))}
                                <div className="w-full h-full py-[25px]" >
                                    {item.ImageDesc}
                                </div>
                                <h4 className={`text-[20px] xl:text-[30px] font-bold font-sans leading-tight my-4 capitalize`}>
                                    {item.subTitle}
                                </h4>
                                {item.subPara &&
                                    <p className="text-[15px] sm:text-[17px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        {item.subPara}
                                    </p>

                                }
                            </div>
                        ))}
                    </div>
                    <div className={`col-span-12 lg:col-span-3 `}>
                        <div className='w-full bg-[#4A4A4A] flex flex-col text-center rounded-[10px] w-[370px]'>
                            <h5 className={`text-[22px] xl:text-[32px] font-normal font-sans leading-tight my-4 capitalize`}>
                                Quick Links
                            </h5>

                            <div class="grid grid-cols-1 divide-y-2 divide-gray-500 pb-[10px]">
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Elevating Your Project's Visuals Partner With Houston Animation
                                    </p>
                                </div>
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Discover Unparalleled Creativity At Cloud Animations,
                                    </p>
                                </div>
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Elevating Your Project's Visuals
                                    </p>
                                </div>
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Security Measurements
                                    </p>
                                </div>
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Discover Unparalleled Creativity At Cloud Animations, Your Gateway To Transformative Visual Storytelling.
                                    </p>
                                </div>
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Discover Unparalleled Creativity At Cloud Animations,
                                    </p>
                                </div>
                                <div className={style.DiverHover}>
                                    <p className="text-[14px] sm:text-[16px] px-[25px] py-[15px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                                        Elevating Your Project's Visuals
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col pt-[35px]'>
                            <h5 className={`text-[22px] xl:text-[32px] font-normal font-sans leading-tight my-4 capitalize text-start py-[25px]`}>
                                Relevant Articles
                            </h5>
                            <div className="grid grid-cols-12 mb-5 py-1">
                                <div className="col-span-3 ">
                                    <Image src={BlogImg1} width={70}/>
                                </div>
                                <div className="col-span-9 flex flex-col justify-end text-start">
                                    <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-5 py-1">
                                <div className="col-span-3 ">
                                    <Image src={BlogImg2} width={70}/>
                                </div>
                                <div className="col-span-9 flex flex-col justify-end text-start">
                                    <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-5 py-1">
                                <div className="col-span-3 ">
                                    <Image src={BlogImg1} width={70}/>
                                </div>
                                <div className="col-span-9 flex flex-col justify-end text-start">
                                    <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-5 py-1">
                                <div className="col-span-3 ">
                                    <Image src={BlogImg2} width={70}/>
                                </div>
                                <div className="col-span-9 flex flex-col justify-end text-start">
                                    <span className='text-white text-opacity-90 text-[17px] font-normal poppins '>Be the First to Hire Our <br /> Professional Animators</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogDescription