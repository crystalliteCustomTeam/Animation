"use client"

const CTA = ({ text, icon, bg, color, border, hover, href, iconCss }) => {
    return (

        <>
            {icon ? <div dangerouslySetInnerHTML={{ __html:
                `
                    <a href=${href} class="h-[40px] xl:h-[50px] px-6 rounded-md text-[16px] xl:text-[18px] font-normal font-sans flex items-center gap-x-2 ${color} ${bg}"> 
                        <span class="text-[16px] xl:text-[18px] font-normal">${text}</span>
                        <img src=${icon} alt="Icons" class="object-contain ${iconCss}" />
                    </a>
                `
            }} />
                :
                <a href={href} className={`${color} ${bg} h-[40px] xl:h-[50px] px-6 rounded-md flex items-center gap-x-2`}>
                    <span className="text-[16px] xl:text-[18px] tracking-wider font-normal font-sans">{text}</span>
                </a>}
        </>
    );
}

export default CTA