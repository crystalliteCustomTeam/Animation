"use client"
import React from 'react';
// Import Components
import Banner from './components/banner/Banner';
import Portfolio from './components/portfolio/portfolio';
import Brands from './components/brands/Brands';
import Illustrative from './components/Illustrative/Illustrative';
import TreeStep from './components/tree-step/treeStep';
import LookingFor from './components/looking-for/lookingFor';
import Testimonials from './components/testimonial/Testimonials';
import Pricing from '@/components/pricing/Pricing';

const Illustration = () => {
  // ===== Brands 1 Content ===== //
  const brands1 = {
    // image : Brand1,
    title: "Connect with Us Today!",
    subTitle: "",
    desc: <> We provide unique illustrations for several <br /> categories. </>,
    isBtn: true,
    backgroundImage: 'bg-[url("../../public/illustration-experts/cta-bg-2.webp")]'
  }
  //=====Pricing Fold=====//
  const pricing = {
    title: (<> Pricing Plans </>),
    para: (<> Easy on the pocket and the eyes. </>),
};
  // ===== Brands 2 Content ===== //
  const brands2 = {
    // image : Brand1,
    title: "Talk to Us Today!",
    subTitle: "",
    desc: <> Share your exciting ideas with our illustration <br /> experts. </>,
    isBtn: true,
    backgroundImage: 'bg-[url("../../public/illustration-experts/cta-bg-1.jpg")]'
  }


  return (
    <>
      <div className='bg-dark'>
        <Banner />
        <Portfolio />
        <Brands content={brands1} />
        <Illustrative />
        <Brands content={brands2} />
        <TreeStep />
        <Pricing content={pricing} />
        <LookingFor />
        <Brands content={brands2} />
        <Testimonials />
      </div>
    </>
  )
}

export default Illustration
