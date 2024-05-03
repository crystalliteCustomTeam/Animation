import Image from "next/image"
// Media
import TestimonialSlider from "./TestimonialSlider"
import TestiImg from 'media/illustration-experts/testi-img.png'

const Testimonials = () => {
    return (
        <section id="testimonialsCMP">
            <div>
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 items-center">
                        <div className="md:block hidden">
                            <Image src={TestiImg} alt="testimonialImg" className="block mx-auto w-[75%]" />
                        </div>
                        <div className="w-[75%] m-auto">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials