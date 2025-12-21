
export default function ResultSection() {


  return (
     <section className="flex flex-col  gap-6 items-center px-4 py-20 md:px-35 md:py-20" >
        <div className="flex flex-col items-center text-center gap-3">
          <p className="font-bold md:text-[40px] md:leading-14 text-[28px] leading-9.5">End-to-End IT Solutions That Drive Results</p>
          <p className="font-medium text-sm md:text-lg  text-[#A4A7AE]">From strtegy to execution, we deliver solutions that grow your business.</p>
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-row h-90 gap-4">
          <div className="flex flex-col items-center text-center   justify-center rounded-full border-[#181D27] dark:bg-[#0A0D12] bg-[#DEDCDC] w-43 h-43 gap-1.5 p-4 md:w-69 md:h-69 md:gap-4" >
            <p className="font-bold text-[#FF623E] text-4xl md:text-5xl">50+</p>
            <p className="font-semibold  text-sm md:text-xl">Projects Delivered </p>
          </div>
          <div className="flex flex-col items-center text-center  justify-center rounded-full border-[#181D27] dark:bg-[#0A0D12] bg-[#DEDCDC] w-43 h-43 gap-1.5 p-4 md:w-70 md:h-70 md:gap-4" >
            <p className="font-bold text-[#FF623E] text-4xl md:text-5xl">5+</p>
            <p className="font-semibold  text-sm md:text-xl">Years of Experience </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center rounded-full border-[#181D27] dark:bg-[#0A0D12] bg-[#DEDCDC] w-43 h-43 gap-1.5 p-4 md:w-69 md:h-69 md:gap-4" >
            <p className="font-bold text-[#FF623E] text-4xl md:text-5xl">10+</p>
            <p className="font-semibold  text-sm md:text-xl">Industry Awards Won</p>
          </div>
          <div className="flex flex-col items-center text-center  justify-center rounded-full border-[#181D27] dark:bg-[#0A0D12] bg-[#DEDCDC] w-43 h-43 gap-1.5 p-4 md:w-69 md:h-69 md:gap-4" >
            <p className="font-bold text-[#FF623E] text-4xl md:text-5xl">100%</p>
            <p className="font-semibold  text-sm md:text-xl">Client Satisfaction Rate</p>
          </div>
        </div>
      </section>
  );
}