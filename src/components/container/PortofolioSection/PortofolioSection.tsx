import imagePorto1 from "../../../assets/imagePorto1.svg";
import imagePorto2 from "../../../assets/imagePorto2.svg";
import imagePorto3 from "../../../assets/imagePorto3.svg";

export default function PortofolioSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-16 items-center px-4 md:px-35 py-10 md:py-20">
      <div className="flex flex-col items-center text-center gap-3">
        <p className="font-bold text-[28px] md:text-[40px] leading-tight md:leading-14">
          From Vision to Launch! Projects We’re Proud Of
        </p>
        <p className="font-medium text-sm md:text-lg text-[#A4A7AE]">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-5">
        <div className="flex flex-col gap-2 md:gap-3">
          <img
            src={imagePorto1}
            alt="imagePorto1"
            className="w-90 h-90 md:w-93 md:h-93 rounded-2xl object-cover"
          />
          <p className="font-medium text-sm md:text-base text-[#FF623E]">
            Landing Page
          </p>
          <p className="font-bold text-base md:text-xl">Portofolio 1</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <img
            src={imagePorto2}
            alt="imagePorto2"
            className="w-90 h-90 md:w-93 md:h-93 rounded-2xl object-cover"
          />
          <p className="font-medium text-sm md:text-base text-[#FF623E]">
            Landing Page
          </p>
          <p className="font-bold text-base md:text-xl">Portofolio 2</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <img
            src={imagePorto3}
            alt="imagePorto3"
            className="w-90 h-90 md:w-93 md:h-93 rounded-2xl object-cover"
          />
          <p className="font-medium text-sm md:text-base text-[#FF623E]">
            Landing Page
          </p>
          <p className="font-bold text-base md:text-xl">Portofolio 3</p>
        </div>
      </div>
    </section>
  );
}
