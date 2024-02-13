"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import getIcon from "media/icons/arrow-red.png";
import liveChatIcon from "media/icons/chat.png";

const CTA = ({ text, icon1, icon2, bg, color, border, hover, href, }) => {
    return (
        <>
            {/* <Link className={`${color} py-1 px-3 2xl:px-6 rounded-md text-[18px] font-normal font-sans flex flex-row items-center justify-between"} ${hover} ${border}`} href={link}>
                <span className="text-[16px] md:text-[18px] font-normal">{text}</span>
                {icon1 ? <Image className="w-[30px] ms-3 md:ms-5" src={getIcon} alt="Infinity Animation" /> : null}
                {icon2 ? <Image className="w-[40px] ms-3 md:ms-5" src={liveChatIcon} alt="Infinity Animation" /> : null}
            </Link> */}

            {/* <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
                __html: `
                <a href=${href} class=" text-center px-5 h-[50px] ${bg} border-2 text-[18px] font-normal font-sans tracking-wider rounded-md block leading-[48px] ${css} transition-all">
                    ${text}
                </a>`
            }} /> */}

            <Link className={`py-1 xl:py-2 px-3 2xl:px-6 rounded-md text-[16px] xl:text-[18px] font-normal font-sans flex flex-row items-center justify-between"} ${color} ${bg} ${hover} ${border}`} href={href}>
                <span className="text-[16px] xl:text-[18px] font-normal">{text}</span>
                {icon1 ? <div className="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full ms-5"><Image src={getIcon} className="w-[40%]" alt="Infinity Animation" /></div> : null}
                {icon2 ? <Image className="w-[30px] xl:w-[40px] ms-3 md:ms-5" src={liveChatIcon} alt="Infinity Animation" /> : null}
            </Link>
        </>
    );
}

export default CTA

