import imageIndustry from "../../../assets/imageIndustry.svg";


export default function IndustrySection() {
  return (
    <section className="flex flex-col gap-6 md:gap-16 px-4 md:px-35 py-10 md:py-35">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-[28px] md:text-[40px] leading-tight md:leading-14">
          Built for Your Industry
        </p>
        <p className="font-medium text-sm md:text-lg text-[#A4A7AE]">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-5">
        <div className="md:w-80">
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="bg-[#FF623E] w-1 h-6 md:h-8 rounded" />
              <p className="font-bold text-base md:text-xl">Fintech</p>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="bg-[#535862] w-1 h-6 md:h-8 rounded" />
              <p className="font-bold text-[#535862] text-base md:text-xl">
                E-Commerce
              </p>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="bg-[#535862] w-1 h-6 md:h-8 rounded" />
              <p className="font-bold text-[#535862] text-base md:text-xl">
                Healthcare
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-210">
          <p className="font-medium text-sm md:text-lg">
            We build secure, scalable, and compliant fintech solutions — from
            digital wallets to core banking systems — tailored to modern
            financial needs.
          </p>

          <img
            src={imageIndustry}
            alt="imageIndustry"
            className="w-full md:w-210 h-55.5 md:h-88 object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
