import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaSliderArrows/EmblaSliderArrows'
// Images
import review from "media/game-lp/star.png"
import Slider1 from "media/game-lp/slider-1.png"

const TestimonialsSlider = ({ wrapperClasses = " " }) => {
    const plugins = [
        ClassNames(),
        Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true, }, plugins)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);
    const sliderData = [
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
        {
            desc: "At the heart of every great game lies captivating art that immerses players in unique, vibrant worlds. We craft visuals that not only enhance gameplay but also evoke emotion,",
            clientName: <>Dennis K. Willard</>,
            image: Slider1,
        },
    ]
    return (
        <section>
            <div>
                <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                    <div className="flex [margin-left:calc(1rem_*_-1)]">
                        {sliderData.map((e, i) => (
                            <div className={`grow-0 shrink-0 basis-[85%] md:basis-[55%] lg:basis-[35%] xl:basis-[25%] min-w-0 pl-4`} key={i}>
                                <div className={`slide bg-white px-4 lg:px-7 py-6 sm:py-9 rounded-0 h-full`}>
                                    <div className="review flex items-center gap-x-2 mb-5">
                                        <Image src={review} alt='Review' />
                                        <Image src={review} alt='Review' />
                                        <Image src={review} alt='Review' />
                                        <Image src={review} alt='Review' />
                                        <Image src={review} alt='Review' />
                                    </div>
                                    <div className=''>
                                        <div>
                                            <div>
                                                <p className='text-[13px] sm:text-[16px] leading-[25px] sm:leading-[33px] italic text-black poppins mb-5'>{e.desc}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className='text-[15px] sm:text-[20px] leading-[23px] sm:leading-[28px] text-black poppins font-semibold'>{e.clientName}</h3>
                                                    <span className='text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] font-normal text-black poppins'>{e.clientName}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className='text-[12px] font-medium leading-[22px] text-black poppins'>
                                                        4.9/5.0
                                                    </span>
                                                    <Image src={Slider1} alt='Slider Icons' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center gap-12 mt-8 lg:mt-12">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}
export default TestimonialsSlider;