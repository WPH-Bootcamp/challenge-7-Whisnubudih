
import imgGearHp from '../../../assets/imgGearHp.svg'
import imgGearLight from '../../../assets/imgGearLight.svg'

export default function HeaderSection() {


  return (
     <section className="flex flex-col md:flex-row px-4 py-12 md:pl-35 ">
      <div className="flex flex-col w-90 h-60 md:w-163 md:h-75 md:mt-35.5 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-['Quicksand'] font-bold md:text-[54px] md:leading-[68px] text-3xl leading-[44px]">Your Tech Partner for <span className="text-[#FF6C37]">Smarter Growth</span> </h1>
          <p className="font-semibold text-base md:text-xl md:leading-[36px] leading-[30px]">We deliver tailored IT solutions to help you scale with speed and confidence.</p>
        </div>
        <div className="items-center">
            <button className="bg-[#FF623E] w-90 h-11 md:w-50 md:h-12 p-2 gap-1 rounded-full">Lets Talk</button>
        </div>
      </div>
      <div className="dark:flex hidden mt-10 md:mt-0">
        <img src={imgGearHp}  alt="imgGearHp"/>
      </div>

      <div className="dark:hidden mt-10 md:mt-0">
        <img src={imgGearLight}  alt="imgGearHp"/>
      </div>
    </section>
  );
}