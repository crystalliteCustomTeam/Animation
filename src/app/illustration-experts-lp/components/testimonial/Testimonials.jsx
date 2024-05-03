import Image from "next/image"
// Media
import TestimonialSlider from "./TestimonialSlider"
import TestiImg from 'media/illustration-experts/testi-img.png'

const Testimonials = () => {
    return (
        <section id="testimonialsCMP" className="hidden md:block">
            <div>
                <div className="container">
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-x-5 items-center">
                        <div className="md:block hidden">
                            <Image src={TestiImg} alt="testimonialImg" className="block mx-auto " height={450} />
                        </div>
                        <div className="w-[95%] md:w-[90%] ">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials