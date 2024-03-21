"use client"

import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Creativity from './components/Creativity/Creativity'
import VideoAnimation from './components/VideoAnimation/VideoAnimation'
import Streamed from './components/Streamed/Streamed'
import Packages from './components/Packages/Packages'
import Unmatched from './components/Unmatched/Unmatched'
import Testinomials from './components/Testinomials/Testinomials'
import Footer from './components/Footer/Footer'

const page = () => {

    const banner = {
        bannerImage: "https://player.vimeo.com/progressive_redirect/playback/925117975/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dab6eeb220f8cc1b556236864b3498d5113da0f28574fc660097a9326366334d",
    }

    return (
        <div className='bg-white'>
            <Header />
            <Banner content={banner} />
            <Creativity />
            <VideoAnimation />
            <Streamed />
            <Packages />
            <Unmatched />
            <Testinomials />
            <Footer />
        </div>
    )
}

export default page