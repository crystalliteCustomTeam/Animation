import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaSliderArrows/EmblaSliderArrows'
import styles from "./style.module.css"
import Image from 'next/image'
// Images
import Book1 from "media/game-lp/portfolio5.png"
import Book2 from "media/game-lp/portfolio5.png"
import Book3 from "media/game-lp/portfolio5.png"
import Book4 from "media/game-lp/portfolio5.png"
import Book5 from "media/game-lp/portfolio5.png"

const TestimonialsSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);
    const sliderData = [
        {
            title: <>Adventure of  <span class='font-bold text-[#40BEE2]'>Brave </span> Guys</>,
            desc: "Adventure of Brave Guys became a reality with our help. Our team of children's publishers guided the author through the entire process, from manuscript to distribution. Now, the magical story is inspiring readers worldwide",
            number: "02",
            lidescs: [
                { desc: "We ensured the manuscript met professional publishing standards, offering feedback to enhance storytelling for young readers." },
                { desc: "We connected with our talented illustrators who perfectly captured the magical essence of the island and its characters." },
                { desc: "We helped publish the book on Amazon KDP, making the story available in print and digital formats." }
            ],
            image: Book2,
        },
        {
            title: <>Tiny  <span class='font-bold text-[#40BEE2]'>Girl Born</span> From A Flower</>,
            desc: 'Bonds of Blood" explores the unbreakable ties forged in the heat of battle and the sacrifices made in the name of loyalty and family. This gripping narrative delves into the complex relationships that define both war and survival.',
            number: "03",
            lidescs: [
                { desc: "Unyielding Loyalty: Discover the powerful connections that drive soldiers to protect one another against all odds." },
                { desc: "Sacrifice and Survival: Witness the personal costs of war as characters grapple with life-altering decisions." },
                { desc: "Family and Brotherhood: Explore the deep bonds that extend beyond blood, shaping identities in the midst of conflict." }
            ],
            image: Book3,
        },
        {
            title: <>Adventure of  <span class='font-bold text-[#40BEE2]'>Brave </span> Guys</>,
            desc: "Adventure of Brave Guys became a reality with our help. Our team of children's publishers guided the author through the entire process, from manuscript to distribution. Now, the magical story is inspiring readers worldwide",
            number: "02",
            lidescs: [
                { desc: "We ensured the manuscript met professional publishing standards, offering feedback to enhance storytelling for young readers." },
                { desc: "We connected with our talented illustrators who perfectly captured the magical essence of the island and its characters." },
                { desc: "We helped publish the book on Amazon KDP, making the story available in print and digital formats." }
            ],
            image: Book2,
        },
        {
            title: <>Tiny  <span class='font-bold text-[#40BEE2]'>Girl Born</span> From A Flower</>,
            desc: 'Bonds of Blood" explores the unbreakable ties forged in the heat of battle and the sacrifices made in the name of loyalty and family. This gripping narrative delves into the complex relationships that define both war and survival.',
            number: "03",
            lidescs: [
                { desc: "Unyielding Loyalty: Discover the powerful connections that drive soldiers to protect one another against all odds." },
                { desc: "Sacrifice and Survival: Witness the personal costs of war as characters grapple with life-altering decisions." },
                { desc: "Family and Brotherhood: Explore the deep bonds that extend beyond blood, shaping identities in the midst of conflict." }
            ],
            image: Book3,
        },
        {
            title: <>Adventure of  <span class='font-bold text-[#40BEE2]'>Brave </span> Guys</>,
            desc: "Adventure of Brave Guys became a reality with our help. Our team of children's publishers guided the author through the entire process, from manuscript to distribution. Now, the magical story is inspiring readers worldwide",
            number: "02",
            lidescs: [
                { desc: "We ensured the manuscript met professional publishing standards, offering feedback to enhance storytelling for young readers." },
                { desc: "We connected with our talented illustrators who perfectly captured the magical essence of the island and its characters." },
                { desc: "We helped publish the book on Amazon KDP, making the story available in print and digital formats." }
            ],
            image: Book2,
        },
        {
            title: <>Tiny  <span class='font-bold text-[#40BEE2]'>Girl Born</span> From A Flower</>,
            desc: 'Bonds of Blood" explores the unbreakable ties forged in the heat of battle and the sacrifices made in the name of loyalty and family. This gripping narrative delves into the complex relationships that define both war and survival.',
            number: "03",
            lidescs: [
                { desc: "Unyielding Loyalty: Discover the powerful connections that drive soldiers to protect one another against all odds." },
                { desc: "Sacrifice and Survival: Witness the personal costs of war as characters grapple with life-altering decisions." },
                { desc: "Family and Brotherhood: Explore the deep bonds that extend beyond blood, shaping identities in the midst of conflict." }
            ],
            image: Book3,
        },
    ]
    return (
        <section>
            <div className={styles.embla}>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className={`${styles.embla__container}`}>
                        {sliderData.map((e, i) => (
                            <div className={`${styles.embla__slide}`} key={i}>
                                <div className={`grid grid-cols-12 gap-5`}>
                                    <div className="mr-lg:block hidden col-span-12 mr-lg:col-span-4">
                                        <div className="bg-[#40BEE2] pt-10 pb-7 px-0 rounded-[15px] mr-xl:w-9/12 ml-auto">
                                            <Image src={e.image} alt='Book' className='mx-auto shadow-2xl' />
                                        </div>
                                    </div>
                                    <div className="col-span-12 mr-lg:col-span-8">
                                        <div className='bg-[#282828] px-4 mr-lg:px-9 py-9 mr-md:py-6 rounded-[15px] h-full flex items-center justify-center mr-xl:w-11/12 relative'>
                                            <div className="number absolute top-[15px] mr-md:top-[20px] right-[20px] mr-md:right-[40px]">
                                                <p className='text-[13px] mr-md:text-[16px] text-[#8D8D8D] leading-normal'><span className='text-[#40BEE2]'>{e.number}</span> / 02</p>
                                            </div>
                                            <div>
                                                <h3 className='text-[25px] mr-lg:text-[30px] leading-normal text-white font-semibold mb-3'>{e.title}</h3>
                                                <p className='mr-md:text-lg text-sm font-normal leading-normal text-white'>{e.desc}</p>
                                                <ul className='pt-5'>
                                                    {e.lidescs.map((data, index) => (
                                                        <li key={index} className="mr-md:text-[17px] text-sm font-normal leading-normal pr-[25px] text-[#C7C7C7] relative before:content-[''] before:absolute before:top-[7px] before:left-[-24px] before:w-[10px] before:h-[10px] before:bg-[#40BEE2] before:rounded-full ml-[20px] mr-md:ml-[25px] mb-4">
                                                            {data.desc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className={styles.embla__controls}>
                    <div className={styles.embla__buttons}>
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TestimonialsSlider;