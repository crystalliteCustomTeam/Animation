import React from 'react';
// Import Components
const Banner = React.lazy(() => import('@/app/explainer-videos-animations/component/banner/Banner'));
const Logo = React.lazy(() => import('@/app/explainer-videos-animations/component/logo/Logo'));
const Video = React.lazy(() => import('@/app/explainer-videos-animations/component/video/Video'));
const Display = React.lazy(() => import('@/app/explainer-videos-animations/component/display/Display'));
const Explainer = React.lazy(() => import('@/app/explainer-videos-animations/component/explainer/Explainer'));
const Types = React.lazy(() => import('@/app/explainer-videos-animations/component/types/Types'));
const Packages = React.lazy(() => import('@/app/explainer-videos-animations/component/packages/Packages'));
const Statistics = React.lazy(() => import('@/app/explainer-videos-animations/component/statistics/Statistics'));
const Header = React.lazy(() => import('@/app/explainer-videos-animations/component/header/Header'));
const Footer = React.lazy(() => import('@/app/explainer-videos-animations/component/footer/Footer'));
const Clients = React.lazy(() => import('@/app/explainer-videos-animations/component/clients/Clients'));
const Work = React.lazy(() => import('@/app/explainer-videos-animations/component/work/Work'));
const Streamlined = React.lazy(() => import('@/app/explainer-videos-animations/component/streamlined/Streamlined'));
const Faqs = React.lazy(() => import('@/app/explainer-videos-animations/component/faqs/Faqs'));
const Thinking = React.lazy(() => import('@/app/explainer-videos-animations/component/thinking/Thinking'));
// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.jpg";
import Thumnail2 from "media/thumbnails/2d-animation/2.jpg";
import Thumnail3 from "media/thumbnails/2d-animation/3.jpg";
import Thumnail4 from "media/thumbnails/2d-animation/4.jpg";
import Thumnail5 from "media/thumbnails/2d-animation/5.jpg";
import Thumnail6 from "media/thumbnails/2d-animation/6.jpg";
import Thumnail7 from "media/thumbnails/3d-animation/1.jpg";
import Thumnail8 from "media/thumbnails/3d-animation/2.jpg";
import Thumnail9 from "media/thumbnails/3d-animation/3.jpg";
import Thumnail10 from "media/thumbnails/3d-animation/4.jpg";
import Thumnail11 from "media/thumbnails/3d-animation/5.jpg";
import Thumnail12 from "media/thumbnails/3d-animation/6.jpg";
import Thumnail13 from "media/thumbnails/whiteboard/1.jpg";
import Thumnail14 from "media/thumbnails/whiteboard/2.jpg";
import Thumnail15 from "media/thumbnails/whiteboard/3.jpg";
import Thumnail16 from "media/thumbnails/whiteboard/4.jpg";
import Thumnail17 from "media/thumbnails/whiteboard/5.jpg";
import Thumnail18 from "media/thumbnails/whiteboard/6.jpg";
import Thumnail19 from "media/thumbnails/motion-graphics/1.jpg";
import Thumnail20 from "media/thumbnails/motion-graphics/2.jpg";
import Thumnail21 from "media/thumbnails/motion-graphics/3.jpg";
import Thumnail22 from "media/thumbnails/motion-graphics/4.jpg";
import Thumnail23 from "media/thumbnails/motion-graphics/5.jpg";
import Thumnail24 from "media/thumbnails/motion-graphics/6.jpg";
import Thumnail25 from "media/thumbnails/hybrid/1.jpg";
import Thumnail26 from "media/thumbnails/hybrid/2.jpg";
import Thumnail27 from "media/thumbnails/hybrid/3.jpg";
import Thumnail28 from "media/thumbnails/hybrid/4.jpg";
import Thumnail29 from "media/thumbnails/hybrid/5.jpg";
import Thumnail30 from "media/thumbnails/hybrid/6.jpg";

export default function Page() {

    //=====Portfilio Fold=====// 
    const tabInfo = [
        { label: "2D Animations", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Motion Graphics", index: 3 },
        { label: "Hybrid Animation", index: 4 },
    ];
    const tabContents = [
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
                thumbnail: Thumnail1,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
                thumbnail: Thumnail2,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
                thumbnail: Thumnail3,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
                thumbnail: Thumnail4,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
                thumbnail: Thumnail5,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
                thumbnail: Thumnail6,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
                thumbnail: Thumnail7,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
                thumbnail: Thumnail8,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
                thumbnail: Thumnail9,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
                thumbnail: Thumnail10,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
                thumbnail: Thumnail11,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
                thumbnail: Thumnail12,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
                thumbnail: Thumnail13,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
                thumbnail: Thumnail14,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
                thumbnail: Thumnail15,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
                thumbnail: Thumnail16,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
                thumbnail: Thumnail17,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
                thumbnail: Thumnail18,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
                thumbnail: Thumnail19,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
                thumbnail: Thumnail20,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
                thumbnail: Thumnail21,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
                thumbnail: Thumnail22,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
                thumbnail: Thumnail23,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
                thumbnail: Thumnail24,
            }
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
                thumbnail: Thumnail25,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
                thumbnail: Thumnail26,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
                thumbnail: Thumnail27,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
                thumbnail: Thumnail28,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
                thumbnail: Thumnail29,
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
                thumbnail: Thumnail30,
            }
        ],
    ];
    const portfolio = {
        title: (<> Our <span className='text-primary-100'>Streamlined</span> Projects </>),
        para: (<> </>),
        tabContents: tabContents,
        tabsInfo: true,
        tabInfo: tabInfo
    };

    //===== FAQS =====//
    const accordionData1 = [
        {
            question: 'What Is The Cost Of Tech Video Production?',
            ans: "For our customers, we create meaningful and entertaining videos at Infinity Animations Pro. The entire video content is produced and tailored to our client's requirements. Our team excels at creating high-quality videos, whether you need a corporate video to boost your brand awareness or a product demo to promote your services. Our process entails a series of meticulous animation and development steps, from brainstorming various concepts to the final delivery.",
        }
    ];
    const accordionData2 = [
        {
            question: "What Is The Infinity Animations Pro's Video Delivery Timeframe?",
            ans: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
        },
        {
            question: 'What Kind Of Videos Infinity Animations Pro Provides With Tech Video Production Services?',
            ans: "Simplify the complex and engage your audience with our dynamic animation services like 2D Animations, 3D Animations, Whiteboard Animations, etc. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        },
        {
            question: 'Do I get Full Copyrights to the videos?',
            ans: "Yes, You retain full copyrights to the videos you create. When we produce content, you automatically hold the copyright to that work, granting you exclusive rights to reproduce, distribute, perform, and display the work publicly.",
        }
    ];
    const faqs = {
        accordionData1: accordionData1,
        accordionData2: accordionData2,
    }

    return (
        <>
            <Header />
            <Banner />
            <Logo />
            <Video />
            <Streamlined content={portfolio} />
            <Display />
            <Types />
            <Packages />
            <Statistics />
            <Work />
            <Faqs content={faqs} />
            <Thinking />
            <Clients />
            <Explainer />
            <Footer />
            <Script id="websiteSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Animation Explainer Videos Company | Infinity Animations",
                        "url": "https://infinityanimations.com/video-explainer-lp2",
                        "potentialAction": {
                          "@type": "SearchAction",
                          "target": "{search_term_string}",
                          "query-input": "required name=search_term_string"
                        }                      
                    }
                `}
            </Script>
            <Script id="organizationSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Corporation",
                        "name": "Animation Explainer Videos Company | Infinity Animations",
                        "url": "https://infinityanimations.com/video-explainer-lp2",
                        "logo": "https://infinityanimations.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.957f7aac.gif&w=256&q=75"
                    }
                `}
            </Script>
            <Script id="localBusinessSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Animation Explainer Videos Company | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner.e85b7a7f.jpg",
                        "@id": "",
                        "url": "https://infinityanimations.com/video-explainer-lp2",
                        "telephone": "833-666-6689",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "One World Trade Center, Suite 8500",
                            "addressLocality": "New York",
                            "addressRegion": "NY",
                            "postalCode": "10007",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.7130082,
                            "longitude": -74.0131689
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                            ],
                            "opens": "08:00",
                            "closes": "21:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/infinityanimationsofficial",
                            "https://www.instagram.com/infinityanimationsofficials"
                        ] 
                    }
                `}
            </Script>
            <Script id="productSchema" type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "Product", 
                        "name": "Animation Explainer Videos Company | Infinity Animations",
                        "image": "https://infinityanimations.com/_next/static/media/banner.e85b7a7f.jpg",
                        "description": "Animated Explainer Videos Company, Contact our team today to create captivating animated explainer videos that engage and inform your audience.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Infinity Animations"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "1087"
                        }
                    }
                `}
            </Script>
        </>
    )
}