export default function Counter() {
  return (
    <section>
      <div className="bg-[#D60925] py-2.5">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 md:grid-cols-4 font-sans md:divide-x-2 text-center xl:text-left">
            {[
              ["200+", "Animators and game <br> Devolopment Artsts"],
              ["6", "Yeare of <br> Experience"],
              ["16", "Months Averge <br> Partnerships"],
              ["72%", "Repeat <br> Clientel"],
            ].map(([num, txt], i) => (
              <div
                key={i}
                className="xl:flex items-center justify-center gap-3"
              >
                <h3 className="font-bold text-[50px] 2xl:text-[70px] leading-tight">
                  {num}
                </h3>
                <p
                  className="text-[14px] font-light font-sans leading-snug tracking-wider"
                  dangerouslySetInnerHTML={{ __html: txt }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
