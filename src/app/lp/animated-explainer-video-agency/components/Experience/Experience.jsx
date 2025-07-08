// Next
import Image from "next/image"
// Media
import Logo1 from "media/animated-explainer-video-agency/logos/1.webp"
import Logo2 from "media/animated-explainer-video-agency/logos/2.webp"
import Logo3 from "media/animated-explainer-video-agency/logos/3.webp"
import Logo4 from "media/animated-explainer-video-agency/logos/4.webp"
import Logo5 from "media/animated-explainer-video-agency/logos/5.webp"
import Logo6 from "media/animated-explainer-video-agency/logos/6.webp"
import Logo7 from "media/animated-explainer-video-agency/logos/7.webp"
import Logo8 from "media/animated-explainer-video-agency/logos/8.webp"
import Logo9 from "media/animated-explainer-video-agency/logos/9.webp"
import Logo10 from "media/animated-explainer-video-agency/logos/10.webp"
import Logo11 from "media/animated-explainer-video-agency/logos/11.webp"
import Logo12 from "media/animated-explainer-video-agency/logos/12.webp"
import Logo13 from "media/animated-explainer-video-agency/logos/13.webp"
import Logo14 from "media/animated-explainer-video-agency/logos/14.webp"
// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.png"
import Thumnail2 from "media/thumbnails/2d-animation/2.png"
import Thumnail3 from "media/thumbnails/2d-animation/3.png"
import Thumnail4 from "media/thumbnails/2d-animation/4.png"
import Thumnail5 from "media/thumbnails/2d-animation/5.png"
import Thumnail6 from "media/thumbnails/2d-animation/6.png"
import Thumnail7 from "media/thumbnails/3d-animation/1.png"
import Thumnail8 from "media/thumbnails/3d-animation/2.png"
import Thumnail9 from "media/thumbnails/3d-animation/3.png"
import Thumnail10 from "media/thumbnails/3d-animation/4.png"
import Thumnail11 from "media/thumbnails/3d-animation/5.png"
import Thumnail12 from "media/thumbnails/3d-animation/6.png"
import Thumnail13 from "media/thumbnails/whiteboard/1.png"
import Thumnail14 from "media/thumbnails/whiteboard/2.png"
import Thumnail15 from "media/thumbnails/whiteboard/3.png"
import Thumnail16 from "media/thumbnails/whiteboard/4.png"
import Thumnail17 from "media/thumbnails/whiteboard/5.png"
import Thumnail18 from "media/thumbnails/whiteboard/6.png"
import Thumnail19 from "media/thumbnails/motion-graphics/1.png"
import Thumnail20 from "media/thumbnails/motion-graphics/2.png"
import Thumnail21 from "media/thumbnails/motion-graphics/3.png"
import Thumnail22 from "media/thumbnails/motion-graphics/4.png"
import Thumnail23 from "media/thumbnails/motion-graphics/5.png"
import Thumnail24 from "media/thumbnails/motion-graphics/6.png"
import Thumnail25 from "media/thumbnails/hybrid/1.png"
import Thumnail26 from "media/thumbnails/hybrid/2.png"
import Thumnail27 from "media/thumbnails/hybrid/3.png"
import Thumnail28 from "media/thumbnails/hybrid/4.png"
import Thumnail29 from "media/thumbnails/hybrid/5.png"
import Thumnail30 from "media/thumbnails/hybrid/6.png"

// Components
import Portfolio from "../Portfolio/portfolio"

//=====Portfilio Fold=====//
const tabInfo = [
  { label: "Hybrid Animation", index: 0 },
  { label: "3D Animation", index: 1 },
  { label: "2D Animation", index: 2 },
  { label: "Whiteboard Animation", index: 3 },
  { label: "Motion Graphics", index: 4 },
]
const tabContents = [
  [
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
      thumbnail: Thumnail25,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
      thumbnail: Thumnail26,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
      thumbnail: Thumnail27,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
      thumbnail: Thumnail28,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
      thumbnail: Thumnail29,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
      thumbnail: Thumnail30,
    },
  ],
  [
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
      thumbnail: Thumnail7,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
      thumbnail: Thumnail8,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
      thumbnail: Thumnail9,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
      thumbnail: Thumnail10,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
      thumbnail: Thumnail11,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
      thumbnail: Thumnail12,
    },
  ],
  [
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
      thumbnail: Thumnail1,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
      thumbnail: Thumnail2,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
      thumbnail: Thumnail3,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
      thumbnail: Thumnail4,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
      thumbnail: Thumnail5,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
      thumbnail: Thumnail6,
    },
  ],
  [
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
      thumbnail: Thumnail13,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
      thumbnail: Thumnail14,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
      thumbnail: Thumnail15,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
      thumbnail: Thumnail16,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
      thumbnail: Thumnail17,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
      thumbnail: Thumnail18,
    },
  ],
  [
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
      thumbnail: Thumnail19,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
      thumbnail: Thumnail20,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
      thumbnail: Thumnail21,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
      thumbnail: Thumnail22,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
      thumbnail: Thumnail23,
    },
    {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
      thumbnail: Thumnail24,
    },
  ],
]
const portfolio = {
  tabContents: tabContents,
  tabsInfo: true,
  tabInfo: tabInfo,
}
const Experience = () => {
  return (
    <section>
      <div className="bg-[#161513] lg:pt-[100px] md:pt-[80px] pt-[60px] pb-[50px] font-mono">
        <div className="container">
          <div className="max-w-[1240px] mx-auto grid grid-cols-12 items-center place-items-center bg-lp_gradient md:p-[40px] sm:p-[30px] p-[20px] rounded-[6px]">
            <div className="col-span-12">
              <span className="block lg:text-lg md:text-[16px] text-[14px] lg:pb-[25px] pb-[15px] text-[#01e3b2] sm:tracking-[13px] tracking-[8px] font-semibold leading-tight uppercase ">
                Our Experience
              </span>
              <h2 className="lg:text-[48px] md:text-[38px] text-[24px] leading-tight font-semibold lg:mb-[25px] mb-[15px]">
                Infinity Animations works with all types of companies.
              </h2>
              <p className="text-[rgb(189,_189,_189)] md:text-[16px] text-[14px] font-normal leading-normal ">
                From startups and non-profits to industry leaders like Uber,
                Amazon, HubSpot, and Google. But no matter the client, we
                strategically tailor our approach to support your specific needs
                to produce compelling videos.
              </p>
            </div>
            <div className="col-span-12 grid md:grid-cols-7 sm:grid-cols-4 grid-cols-5 gap-5 items-center lg:mt-[25px] mt-[15px]">
              {[
                Logo1,
                Logo2,
                Logo3,
                Logo4,
                Logo5,
                Logo6,
                Logo7,
                Logo8,
                Logo9,
                Logo10,
                Logo11,
                Logo12,
                Logo13,
                Logo14,
              ].map((e, i) => (
                <Image
                  key={i}
                  src={e}
                  width={848}
                  height={424}
                  alt={`logo ${++i}`}
                  className="transition-all ease-in-out duration-500 h-[40px] mx-auto object-contain brightness-0 invert hover:brightness-100 hover:invert-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Portfolio content={portfolio} />
    </section>
  )
}

export default Experience
