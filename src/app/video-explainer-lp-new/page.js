"use client"
import React from 'react';
// Import Components
import HeaderLP from './components/Header/Header'
import Banner from './components/banner/Banner'
import Partners from './components/partners/partners'
import Explainer from './components/explainer/Explainer'
import Streamed from './components/streamed/Streamed'
import Brands from './components/brands/Brands'
import ExplainerType from './components/type-explainer/ExplainerType'
import Packages from './components/packages/Packages'
import Animations from './components/infinity-animation/Animations'
import Work from './components/work/Work'
import Faqs from './components/faqs/Faqs'
import ClientThinking from './components/client/ClientThinking'
import Clients from './components/OurClients/Clients'
import Contact from './components/Contact/Contact'
import Popup from './components/popup/Popup'

const Video = () => {
  // ===== Brands Content ===== //
  const brands = {
    title: "Ready For the Spotlight? Supercharge Your Brand's Story!",
    desc: "Illuminate your message with our tactfully and tastefully done explainer video services.",
    isBtn: true,
  }
  //===== FAQS =====//
  const accordionData = [
    {
      question: 'How Do Explainer Videos Benefit My Business Beyond Just Explaining A Product?',
      answer: "Explainer videos not only demystify your product but also create a memorable brand narrative, increasing engagement, and fostering a stronger emotional connection with your audience.",
    },
    {
      question: 'Can I Include Humor In My Explainer Video, Or Should It Strictly Be Professional?',
      answer: "Absolutely! Injecting humor into your explainer video can make it more relatable and shareable. Striking the right balance between professionalism and humor can leave a lasting impression on your audience",
    },
    {
      question: 'ow Long Should An Ideal Explainer Video Be, And Does Length Affect Its Effectiveness?',
      answer: "Aim for a sweet spot between 60 to 90 seconds. Keeping it concise ensures viewer engagement, but it's crucial to prioritize impactful content over strict time constraints. Quality storytelling matters most.",
    },
    {
      question: 'Are Explainer Videos Suitable For All Industries, Or Are They More Effective For Certain Types Of Businesses?',
      answer: "Explainer videos are versatile and can benefit businesses across industries. From tech startups to healthcare services, adapting the content to suit the specific needs and tone of your industry is key to their effectiveness.",
    }
  ];
  const faqs = {
    accordionData: accordionData,
  }
  // ===== Brands Content ===== //
  const brandsTwo = {
    title: "Ready to Transform Your Brand Story?",
    desc: "Let's create an explainer video that turns heads and drives results.",
    isBtn: true,
  }
  return (
    <>
      <div className='bg-white'>
        <Popup />
        <HeaderLP />
        <Banner />
        <Partners />
        <Explainer />
        <Streamed />
        <Brands content={brands} />
        <ExplainerType />
        <Packages />
        <Animations />
        <Work />
        <Faqs content={faqs} />
        <ClientThinking />
        <Clients />
        <Brands content={brandsTwo} />
        <Contact />
      </div>
    </>
  )
}

export default Video
