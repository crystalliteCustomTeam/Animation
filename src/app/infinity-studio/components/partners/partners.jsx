import Image from 'next/image'
import React from 'react'


// ==== Images
import Partners from 'media/video-explainer/trusted-logo.png'

const partners = () => {
    return (
        <>
            <section className='bg-white shadow-lg relative '>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1">
                        <Image src={Partners} alt='Partners' className='w-full' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default partners
