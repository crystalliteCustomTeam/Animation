import Image from "next/image"
import locationPin from "media/locations/location_pin.svg"
import phone from "media/locations/phone.svg"
import clock from "media/locations/clock.svg"

const Satellight = ({ text, number , address , map,page }) => {
  
    return (
        <>
            <div className="border-2 border-white rounded-xl p-10 flex flex-col gap-3 justify-center items-start">
                <div className="border-2 border-primary-100 py-2 flex w-[250px] rounded-full justify-center gap-5">
                    <Image src={locationPin} />
                    <h5 className="font-sans font-semibold text-[20px]"> Satellite Office</h5>
                </div>
                <div className="flex flex-col gap-5 justify-center ">
                    <div className="border-l-2 border-white flex flex-col gap-3 pl-5">
                        <h2 className="text-white font-semibold font-sans text-[30px]"> { text }</h2>
                        <h3 className="text-white font-light font-sans">
                            { address }
                        </h3>
                        <div className="flex flex-row gap-3">
                            <Image src={phone} />
                            <h2 className="text-primary-100 font-semibold font-sans text-[20px]">{ number }</h2>
                        </div>
                        <div className="flex flex-row gap-3">
                            <Image src={clock} />
                            <h2 className="text-white-100 font-semibold font-sans text-[20px]">M-F: 9:00am - 5:00pm</h2>
                        </div>
                        <div className="flex flex-row gap-3 mt-2">
                            <a href={map} className='bg-prime text-white border-0 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                                <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">Get Directions</span>
                            </a>
                            <a href={page} className='bg-black text-white border-2 border-white h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md flex items-center gap-x-2'>
                                <span className="text-[12px] md:text-[16px] xl:text-[18px] font-normal font-sans">View Services</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Satellight