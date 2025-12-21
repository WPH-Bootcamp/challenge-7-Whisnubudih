import chevronUp from '../../../assets/chevronUp.svg'

export default function ProcessSection() {


  return (
       <section className="flex flex-col gap-6 items-center px-4 py-10 md:gap-16 md:px-35 md:py-20" >
        <div className="flex flex-col items-center text-center gap-3">
          <p className="font-bold md:text-[40px] md:leading-14 text-[28px] leading-9.5">Our Process</p>
          <p className="font-medium text-sm md:text-lg  text-[#A4A7AE]">Clear steps. Smart execution. Results you can count on.</p>
        </div>

        
        <div className="flex md:hidden flex-col h-161 gap-4">
          <div className="flex h-29 gap-6 items-center">
            <div className="flex bg-[#FF623E] h-10 w-10 p-1.5 gap-1.5 rounded-full items-center justify-center">
              <p className="font-bold text-xs">1</p>
            </div>
            <div className="flex  w-77 h-23.5 rounded-2xl p-6 gap-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div className="gap-6">
                <p className="font-bold text-base mb-1 ">Discovery & Consultation</p>
                <p className="font-medium text-xs text-[#A4A7AE]">Understand Your Needs & Goals</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex h-29 gap-6 items-center">
            <div className="flex bg-[#FF623E] h-10 w-10 p-1.5 gap-1.5 rounded-full items-center justify-center">
              <p className="font-bold text-xs">2</p>
            </div>
            <div className="flex  w-77 h-23.5 rounded-2xl p-6 gap-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div className="gap-6">
                <p className="font-bold text-base mb-1 ">Planning & Strategy</p>
                <p className="font-medium text-xs text-[#A4A7AE]">Build a Clear, Scalable Roadmap</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex h-29 gap-6 items-center">
            <div className="flex bg-[#FF623E] h-10 w-10 p-1.5 gap-1.5 rounded-full items-center justify-center">
              <p className="font-bold text-xs">3</p>
            </div>
            <div className="flex  w-77 h-23.5 rounded-2xl p-6 gap-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div className="gap-6">
                <p className="font-bold text-base mb-1 ">Design & Prototyping</p>
                <p className="font-medium text-xs text-[#A4A7AE]">Craft UX That Converts</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex h-29 gap-6 items-center">
            <div className="flex bg-[#FF623E] h-10 w-10 p-1.5 gap-1.5 rounded-full items-center justify-center">
              <p className="font-bold text-xs">4</p>
            </div>
            <div className="flex  w-77 h-23.5 rounded-2xl p-6 gap-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div className="gap-6">
                <p className="font-bold text-base mb-1 ">Development & Implementation</p>
                <p className="font-medium text-xs text-[#A4A7AE]">Deliver With Speed & Precision</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex h-29 gap-6 items-center">
            <div className="flex bg-[#FF623E] h-10 w-10 p-1.5 gap-1.5 rounded-full items-center justify-center">
              <p className="font-bold text-xs">5</p>
            </div>
            <div className="flex  w-77 h-23.5 rounded-2xl p-6 gap-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div className="gap-6">
                <p className="font-bold text-base mb-1 ">Testing & Optimization</p>
                <p className="font-medium text-xs text-[#A4A7AE]">Ensure Quality at Every Step</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex h-29 gap-6 items-center">
            <div className="flex bg-[#FF623E] h-10 w-10 p-1.5 gap-1.5 rounded-full items-center justify-center">
              <p className="font-bold text-xs">6</p>
            </div>
            <div className="flex  w-77 h-23.5 rounded-2xl p-6 gap-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div className="gap-6">
                <p className="font-bold text-base mb-1 ">Launch & Growth</p>
                <p className="font-medium text-xs text-[#A4A7AE]">Scale, Measure & Improve Continuously</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col w-290 h-194.5 gap-4">
          <div className="flex w-290 h-29 gap-6 items-center">
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA]  border-[#181D27]">
              <div>
                <p className="font-bold text-xl ">Discovery & Consultation</p>
                <p className="font-medium text-base text-[#A4A7AE]">Understand Your Needs & Goals</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
            <div className="flex bg-[#FF623E] h-12 w-12 p-2 gap-2 rounded-full items-center justify-center">
              <p className="font-bold text-base">1</p>
            </div>
          </div>
          <div className="flex w-290 h-29 gap-6 items-center">
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between">
            </div>
            <div className="flex bg-[#FF623E] h-12 w-12 p-2 gap-2 rounded-full items-center justify-center">
              <p className="font-bold text-base">2</p>
            </div>
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div>
                <p className="font-bold text-xl ">Planning & Strategy</p>
                <p className="font-medium text-base text-[#A4A7AE]">Build a Clear, Scalable Roadmap</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex w-290 h-29 gap-6 items-center">
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div>
                <p className="font-bold text-xl ">Design & Prototyping</p>
                <p className="font-medium text-base text-[#A4A7AE]">Craft UX That Converts</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
            <div className="flex bg-[#FF623E] h-12 w-12 p-2 gap-2 rounded-full items-center justify-center">
              <p className="font-bold text-base">3</p>
            </div>
          </div>
          <div className="flex w-290 h-29 gap-6 items-center">
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between">
            </div>
            <div className="flex bg-[#FF623E] h-12 w-12 p-2 gap-2 rounded-full items-center justify-center">
              <p className="font-bold text-base">4</p>
            </div>
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div>
                <p className="font-bold text-xl ">Development & Implementation</p>
                <p className="font-medium text-base text-[#A4A7AE]">Deliver With Speed & Precision</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
          <div className="flex w-290 h-29 gap-6 items-center">
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div>
                <p className="font-bold text-xl ">Testing & Optimization</p>
                <p className="font-medium text-base text-[#A4A7AE]">Ensure Quality at Every Step</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
            <div className="flex bg-[#FF623E] h-12 w-12 p-2 gap-2 rounded-full items-center justify-center">
              <p className="font-bold text-base">5</p>
            </div>
          </div>
          <div className="flex w-290 h-29 gap-6 items-center">
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between">
            </div>
            <div className="flex bg-[#FF623E] h-12 w-12 p-2 gap-2 rounded-full items-center justify-center">
              <p className="font-bold text-base">6</p>
            </div>
            <div className="flex  w-133 h-29 rounded-2xl p-6 justify-between dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#181D27]">
              <div>
                <p className="font-bold text-xl ">Launch & Growth</p>
                <p className="font-medium text-base text-[#A4A7AE]">Scale, Measure & Improve Continuously</p>
              </div>
              <img src={chevronUp} className="h-6 w-6" alt="chevron"/>
            </div>
          </div>
        </div>
      </section>
  );
}