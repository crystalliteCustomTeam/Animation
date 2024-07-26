import React from 'react'
import AutoScrollSlider from '../../AutoScrollSlider/AutoScrollSlider'
// Images 
import World1 from "media/infinity-studio-lp-2/world-1.png"
import World2 from "media/infinity-studio-lp-2/world-2.png"
import World3 from "media/infinity-studio-lp-2/world-3.png"
import World4 from "media/infinity-studio-lp-2/world-4.png"
import World5 from "media/infinity-studio-lp-2/world-5.png"
import Image from 'next/image'

const WorldClassSlider = () => {
    return (
        <>
            <AutoScrollSlider wrapperClasses='mt-[40px] md:mt-[60px]'>
                {
                    [World1, World2, World3, World4, World5, World1, World2, World3, World4, World5, World1, World2, World3, World4, World5, World1, World2, World3, World4, World5].map((e, i) => (
                        <div key={i} className="grow-0 group shrink-0 xxl:basis-2/12 xl:basis-2/12 md:basis-3/12 basis-5/12 pl-4 flex items-center justify-center">
                            <div>
                                <Image src={e} alt='Inifnity Animation' width={140} height={45} key={i} tabIndex={0} className='opacity-50 hover:opacity-100 group-hover:duration-700 duration-700 ease-in-out' />
                            </div>
                        </div>
                    ))
                }
            </AutoScrollSlider>
        </>
    )
}

export default WorldClassSlider
