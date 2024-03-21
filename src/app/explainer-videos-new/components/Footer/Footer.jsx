import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Import 
import PaymentMethods from "media/explainer-videos-new/methods.png"

const Footer = () => {
    return (
        <>
            <footer className="pt-[40px] pb-[30px] bg-[url('../../public/explainer-videos-new/footer-bg.png')] bg-center bg-no-repeat bg-cover">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between lg:w-11/12 mx-auto">
                        <div className="links">
                            <Link href="javascript:;" className='text-[14px] lg:text-[16px] text-white poppins'>Privacy and Policy</Link>
                        </div>
                        <div className="payment_methods">
                            <Image src={PaymentMethods} alt='Infinity Animations' />
                        </div>
                        <div className="contact_info">
                            <p className='text-[18px] text-white mb-[25px] font-[500] poppins'> Contact Info:</p>
                            <Link href="javascript:;" className='text-[14px] lg:text-[16px] text-white poppins'>+1-833-666-6684</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom_footer bg-[#393940] py-[15px]">
                <p className='text-[14px] lg:text-[16px] text-white poppins text-center'>© Copyright 2024 explainer videos llc - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer
