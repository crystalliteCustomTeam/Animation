"use client"
import React from 'react';
// Import Components
const HeaderLP = React.lazy(() => import('./components/Header/Header'));
const Banner = React.lazy(() => import('./components/banner/Banner'));
const Partners = React.lazy(() => import('./components/partners/partners'));
const Explainer = React.lazy(() => import('./components/explainer/Explainer'));
const Streamed = React.lazy(() => import('./components/streamed/Streamed'));
const Brands = React.lazy(() => import('./components/brands/Brands'));
const ExplainerType = React.lazy(() => import('./components/type-explainer/ExplainerType'));
const Packages = React.lazy(() => import('./components/packages/Packages'));
const Animations = React.lazy(() => import('./components/infinity-animation/Animations'));
const Work = React.lazy(() => import('./components/work/Work'));
const Faqs = React.lazy(() => import('./components/faqs/Faqs'));
const ClientThinking = React.lazy(() => import('./components/client/ClientThinking'));
const Clients = React.lazy(() => import('./components/OurClients/Clients'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

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
