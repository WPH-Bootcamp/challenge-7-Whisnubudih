import iconDoubleThick from "../../../assets/iconDoubleThick.svg";
import Rating from "../../../assets/Rating.svg";
import imgProfile1 from "../../../assets/imgProfile1.svg";
import imgProfile2 from "../../../assets/imgProfile2.svg";
import imgProfile3 from "../../../assets/imgProfile3.svg";
import Pagination from "../../../assets/Pagination.svg";

export default function TestimoniSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-30 items-center px-4 md:px-0 py-10 md:py-0">
      <div className="flex flex-col items-center text-center gap-3">
        <p className="font-bold text-[28px] md:text-[40px] leading-tight md:leading-14">
          What Partners Say About Working With Us
        </p>
        <p className="font-medium text-sm md:text-lg text-[#A4A7AE]">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="hidden md:flex flex-col rounded-2xl dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#FF6C37] gap-4 md:gap-6 pb-12 pt-4 md:pt-6 px-6 relative md:w-148 md:h-73">
          <div className="absolute ml-10 w-[50px] h-[37px] -top-5 md:-top-10">
            <img src={iconDoubleThick} alt="iconDoubleThick" />
          </div>

          <div className="flex flex-col gap-3 items-center text-center">
            <img src={Rating} alt="Rating" />
            <p className="font-semibold text-sm md:text-lg">
              “Working with this team was a game-changer for our project. They
              understood our vision and turned it into reality efficiently and
              effectively.”
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <p className="font-semibold text-lg">John Lee</p>
            <p className="font-semibold text-lg text-[#FF623E]">
              Creative Director at Innovate Corp
            </p>
            <img src={imgProfile1} alt="imgProfile1" />
          </div>
        </div>

        <div className="flex flex-col rounded-2xl dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#FF6C37] gap-4 md:gap-6 pb-12 pt-4 md:pt-6 px-6 relative md:w-148 md:h-73">
          <div className="absolute ml-10 w-[50px] h-[37px] -top-5 md:-top-10">
            <img src={iconDoubleThick} alt="iconDoubleThick" />
          </div>

          <div className="flex flex-col gap-3 items-center text-center">
            <img src={Rating} alt="Rating" />
            <p className="font-semibold text-sm md:text-lg">
              “The team delivered exactly what we needed — on time and with
              outstanding quality. Their attention to detail and communication
              were top-notch.”
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <p className="font-semibold text-lg">Sarah Tan</p>
            <p className="font-semibold text-lg text-[#FF623E]">
              Product Manager at Finovate
            </p>
            <img src={imgProfile3} alt="imgProfile3" />
          </div>
        </div>

        <div className="hidden md:flex flex-col rounded-2xl dark:bg-[#0A0D12] bg-[#FAFAFA] border-[#FF6C37] gap-6 pb-12 pt-6 px-6 relative md:w-148 md:h-73">
          <div className="absolute ml-10 -top-10">
            <img src={iconDoubleThick} alt="iconDoubleThick" />
          </div>

          <div className="flex flex-col gap-3 items-center text-center">
            <img src={Rating} alt="Rating" />
            <p className="font-semibold text-lg">
              “The collaboration was seamless, and the results surpassed our
              expectations. Their expertise transformed our ideas into a
              successful product.”
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <p className="font-semibold text-lg">Emily Chen</p>
            <p className="font-semibold text-lg text-[#FF623E]">
              Marketing Head at Tech Solutions
            </p>
            <img src={imgProfile2} alt="imgProfile2" />
          </div>
        </div>
      </div>

      <div className="my-10 md:my-0">
        <img src={Pagination} alt="Pagination" />
      </div>
    </section>
  );
}
