import IconMinus from "../../../assets/IconMinus.svg";
import IconPlus from "../../../assets/IconPlus.svg";
import imgDiscuss from "../../../assets/imgDiscuss.svg";
import Line from "../../../assets/Line.svg";

export default function FaqSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-20 px-4 md:px-35 py-10 md:py-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0">
        <p className="font-bold text-[28px] md:text-[40px] leading-tight md:w-83">
          Need Help? Start Here.
        </p>
        <p className="font-medium text-sm md:text-lg text-[#A4A7AE] md:text-right md:w-61 md:self-end">
          Everything you need to know — all in one place.
        </p>
      </div>

      <div>
        <img src={Line} alt="Line" />
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-18">
        <div className="flex flex-col gap-7 md:w-199.5">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="font-bold text-lg md:text-2xl">
                What services do you offer?
              </p>
              <img src={IconMinus} alt="IconMinus" />
            </div>
            <p className="font-medium text-sm md:text-xl text-[#A4A7AE]">
              We provide custom web/app development, cloud solutions, UX/UI
              design, and more.
            </p>
          </div>

          <img src={Line} alt="Line" />

          <div className="flex justify-between">
            <p className="font-bold text-lg md:text-2xl">
              How do I know if this is right for my business?
            </p>
            <img src={IconPlus} alt="IconPlus" />
          </div>

          <img src={Line} alt="Line" />

          <div className="flex justify-between">
            <p className="font-bold text-lg md:text-2xl">
              How much does a project cost?
            </p>
            <img src={IconPlus} alt="IconPlus" />
          </div>

          <img src={Line} alt="Line" />

          <div className="flex justify-between">
            <p className="font-bold text-lg md:text-2xl">
              How long does it take?
            </p>
            <img src={IconPlus} alt="IconPlus" />
          </div>

          <img src={Line} alt="Line" />

          <div className="flex justify-between">
            <p className="font-bold text-lg md:text-2xl">
              Can I start with a small project first?
            </p>
            <img src={IconPlus} alt="IconPlus" />
          </div>

          <img src={Line} alt="Line" />
        </div>

        <div className="flex flex-col rounded-3xl p-6 gap-6 bg-[#CC4E32] md:w-82 md:h-113.5">
          <div className="flex flex-col gap-1 md:w-70">
            <p className="font-bold text-[28px] md:text-4xl">
              Let’s talk it through
            </p>
            <p className="font-semibold text-sm md:text-lg">
              book a free consultation with our team.
            </p>
          </div>

          <img
            src={imgDiscuss}
            alt="imgDiscuss"
            className="rounded-2xl"
          />

          <div className="rounded-full p-2 text-center bg-white md:w-70 md:h-12 flex items-center justify-center">
            <p className="font-bold text-base text-black">Free Consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
