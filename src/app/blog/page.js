import React from 'react'
// import BlogBanner from '@/src/components/BlogBanner'
// import BlogHero from '@/components/blogs-old/BlogHero'
import BlogList from '@/src/components/blogs-new/BlogList'
import BlogHero from '@/src/components/blogs-old/BlogHero';

const page = () => {
    //=====Banner Fold=====//
    const hero = {
        title: (<> <span className='text-primary-100'>Our</span> Blogs </>),
        para: "A top-notch video animation production company in Austin helping brands to grow their business and drive more conversion with interactive animated videos.",
        btnBg: "bg-prime",
    };

    return (
        <>
            <BlogHero content={hero} />
            <BlogList />
        </>
    )
}

export default page
