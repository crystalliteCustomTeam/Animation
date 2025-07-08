"use client";
import { useState } from "react";
import styles from "../../../../styles/portfolio/portfolioTabs.module.css";
import Image from "next/image";
import Thumnail1 from "media/thumbnails/2d-animation/1.png";
import Thumnail2 from "media/thumbnails/2d-animation/2.png";
import Thumnail3 from "media/thumbnails/2d-animation/3.png";
import Thumnail4 from "media/thumbnails/2d-animation/4.png";
import Thumnail5 from "media/thumbnails/2d-animation/5.png";
import Thumnail6 from "media/thumbnails/2d-animation/6.png";
import Thumnail7 from "media/thumbnails/3d-animation/1.png";
import Thumnail8 from "media/thumbnails/3d-animation/2.png";
import Thumnail9 from "media/thumbnails/3d-animation/3.png";
import Thumnail10 from "media/thumbnails/3d-animation/4.png";
import Thumnail11 from "media/thumbnails/3d-animation/5.png";
import Thumnail12 from "media/thumbnails/3d-animation/6.png";
import Thumnail13 from "media/thumbnails/whiteboard/1.png";
import Thumnail14 from "media/thumbnails/whiteboard/2.png";
import Thumnail15 from "media/thumbnails/whiteboard/3.png";
import Thumnail16 from "media/thumbnails/whiteboard/4.png";
import Thumnail17 from "media/thumbnails/whiteboard/5.png";
import Thumnail18 from "media/thumbnails/whiteboard/6.png";
import Thumnail19 from "media/thumbnails/motion-graphics/1.png";
import Thumnail20 from "media/thumbnails/motion-graphics/2.png";
import Thumnail21 from "media/thumbnails/motion-graphics/3.png";
import Thumnail22 from "media/thumbnails/motion-graphics/4.png";
import Thumnail23 from "media/thumbnails/motion-graphics/5.png";
import Thumnail24 from "media/thumbnails/motion-graphics/6.png";
import Thumnail25 from "media/thumbnails/hybrid/1.png";
import Thumnail26 from "media/thumbnails/hybrid/2.png";
import Thumnail27 from "media/thumbnails/hybrid/3.png";
import Thumnail28 from "media/thumbnails/hybrid/4.png";
import Thumnail29 from "media/thumbnails/hybrid/5.png";
import Thumnail30 from "media/thumbnails/hybrid/6.png";
import VideoModal from "./VideoModal";
const tabs = [
    { label: "2D Animation", tag: 'videoAnimation2D' },
    { label: "3D Animation", tag: 'videoAnimation3D' },
    { label: "Whiteboard Animation", tag: 'videoAnimationWB' },
    { label: "Motion Graphics", tag: 'videoAnimationMG' },
    { label: "Hybrid Animation", tag: 'videoAnimationHB' },
];
const tabContents = [
    [
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/1001764709/rendition/1080p/file.mp4?loc=external&signature=0dcb0baee9191ef3ad3e41f6de41b71cc7910a78e924fbbde2a3bbd9385f12ef",
            thumbnail: Thumnail1,
            tag: 'videoAnimation2D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
            thumbnail: Thumnail2,
            tag: 'videoAnimation2D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
            thumbnail: Thumnail3,
            tag: 'videoAnimation2D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
            thumbnail: Thumnail4,
            tag: 'videoAnimation2D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
            thumbnail: Thumnail5,
            tag: 'videoAnimation2D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
            thumbnail: Thumnail6,
            tag: 'videoAnimation2D'
        },
    ],
    [
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
            thumbnail: Thumnail7,
            tag: 'videoAnimation3D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
            thumbnail: Thumnail8,
            tag: 'videoAnimation3D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
            thumbnail: Thumnail9,
            tag: 'videoAnimation3D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
            thumbnail: Thumnail10,
            tag: 'videoAnimation3D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
            thumbnail: Thumnail11,
            tag: 'videoAnimation3D'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
            thumbnail: Thumnail12,
            tag: 'videoAnimation3D'
        },
    ],
    [
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
            thumbnail: Thumnail13,
            tag: 'videoAnimationWB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
            thumbnail: Thumnail14,
            tag: 'videoAnimationWB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
            thumbnail: Thumnail15,
            tag: 'videoAnimationWB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
            thumbnail: Thumnail16,
            tag: 'videoAnimationWB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
            thumbnail: Thumnail17,
            tag: 'videoAnimationWB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
            thumbnail: Thumnail18,
            tag: 'videoAnimationWB'
        },
    ],
    [
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
            thumbnail: Thumnail19,
            tag: 'videoAnimationMG'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
            thumbnail: Thumnail20,
            tag: 'videoAnimationMG'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
            thumbnail: Thumnail21,
            tag: 'videoAnimationMG'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6",
            thumbnail: Thumnail22,
            tag: 'videoAnimationMG'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
            thumbnail: Thumnail23,
            tag: 'videoAnimationMG'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
            thumbnail: Thumnail24,
            tag: 'videoAnimationMG'
        },
    ],
    [
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
            thumbnail: Thumnail25,
            tag: 'videoAnimationHB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
            thumbnail: Thumnail26,
            tag: 'videoAnimationHB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
            thumbnail: Thumnail27,
            tag: 'videoAnimationHB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
            thumbnail: Thumnail28,
            tag: 'videoAnimationHB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
            thumbnail: Thumnail29,
            tag: 'videoAnimationHB'
        },
        {
            video:
                "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
            thumbnail: Thumnail30,
            tag: 'videoAnimationHB'
        },
    ],
];

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [videoID, setVideoID] = useState(null);
    const videosToDisplay = tabContents[activeTab] || [];

    function handleTabChange(index) {
        setActiveTab(index);
    }

    function extractVimeoIdFromUrl(url) {
        const match = url.match(/playback\/(\d+)\//);
        return match ? match[1] : null;
    }

    function handlePlayClick(videoUrl) {
        setVideoID(videoUrl);
        setModalShow(true);
    }

    function limitWords(text, wordLimit) {
        if (typeof text !== "string" || !text.trim()) return "";
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    }
    return (
        <section className={`${styles.portfolioSection} pt-100`}>
            <ul className={styles.tabHeaders}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`font-sans font-normal ${activeTab === index ? styles.active : ""
                            }`}
                        onClick={() => handleTabChange(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>
                <div className={styles.portfolio}>
                    <div className={styles.gridContainer}>
                        {videosToDisplay.length > 0 ? (
                            videosToDisplay.map((video, index) => (
                                <div
                                    key={index}
                                    className={`${styles.imageBox} ${styles[`image${index + 1}`]}`}
                                >
                                    <Image
                                        src={video.thumbnail}
                                        alt={`Video Thumbnail ${index + 1}`}
                                        fill
                                    />
                                    <div className={styles.bannerContentBox}>
                                        <div className={styles.bannerHeading}>
                                            <div
                                                className={`font-sans font-normal ${styles.title}`}
                                            >
                                                {tabs[activeTab].label}
                                            </div>
                                            <p className="font-sans font-normal">
                                                {limitWords(video.tag, 15)}
                                            </p>
                                        </div>
                                        <div
                                            className={styles.bannerButton}
                                            onClick={() => handlePlayClick(video.video)}
                                        >
                                            <div className={`${styles.buttonSmall} buttonCommon`}>
                                                <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="800"
                                                        height="800"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <g fill="#231F20">
                                                            <path d="M354.2 247.4 219.1 155c-4.2-3.1-15.4-3.1-16.3 8.6v184.8c1 11.7 12.4 11.9 16.3 8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2m-130.5 81.3V183.3L329.8 256z"></path>
                                                            <path d="M256 11C120.9 11 11 120.9 11 256s109.9 245 245 245 245-109.9 245-245S391.1 11 256 11m0 469.1C132.4 480.1 31.9 379.6 31.9 256S132.4 31.9 256 31.9 480.1 132.4 480.1 256 379.6 480.1 256 480.1"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No videos to display.</p>
                        )}
                    </div>
                    <VideoModal
                        show={modalShow}
                        iframeUrl={videoID}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioTabs;
