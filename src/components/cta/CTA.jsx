"use client"
const CTA = ({ text, icon, bg, color, border, hover, href, iconCss }) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="h-[40px] xl:h-[50px] px-3 2xl:px-6 rounded-md text-[16px] xl:text-[18px] font-normal font-sans flex items-center gap-x-2 ${color} ${bg} ${hover} ${border}"> 
                <span class="text-[16px] xl:text-[18px] font-normal">${text}</span>
                <img src=${icon} alt="Icons" class="object-contain ${iconCss}" />
                </a>`
            }} />
        </>
    );
}

export default CTA