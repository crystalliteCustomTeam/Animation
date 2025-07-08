export default function FullContent1({ content }) {
    const { title, para, para2 } = content;
    return (
        <section className="py-6 md:py-12 lg:py-16 relative overflow-hidden z-10 bg-[linear-gradient(175deg,_rgba(23,22,22,1)_73%,_rgba(0,212,255,0)_73%)]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <h2 className={`text-[#fff] text-[30px] sm:text-[50px] font-bold font-sans leading-tight mb-5 text-start`}>
                        {title}
                    </h2>
                    <p className="text-[15px] lg:text-[16px] text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-start ">
                        {para}
                    </p>
                </div>
                <p className="text-[15px] lg:text-[16px] text-[#fff] font-[300] font-sans leading-[1.52857143] tracking-wider text-start mt-5">
                    {para2}
                </p>
            </div>
        </section>
    )
}