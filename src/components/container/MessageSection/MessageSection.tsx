import iconDoubleThick from "../../../assets/iconDoubleThick.svg";
import Rating from "../../../assets/Rating.svg";
import imgProfile1 from "../../../assets/imgProfile1.svg";
import imgProfile2 from "../../../assets/imgProfile2.svg";
import imgProfile3 from "../../../assets/imgProfile3.svg";
import Pagination from "../../../assets/Pagination.svg";

export default function MessageSection() {
  return (
    <section className="flex flex-col gap-16 px-4 md:px-35 py-10 md:py-20 items-center">
      <div className="flex flex-col items-center text-center gap-3">
        <p className="font-bold text-[28px] md:text-[40px] leading-tight md:leading-14">
          Ready to Start? Let’s Talk.
        </p>
        <p className="font-medium text-sm md:text-lg text-[#A4A7AE]">
          Tell us what you need, and we’ll get back to you soon.
        </p>
      </div>

      <form className="flex flex-col gap-10 w-full md:w-180">
        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="h-12 px-4 py-2 rounded-xl border border-[#252B37]"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="h-12 px-4 py-2 rounded-xl border border-[#252B37]"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="h-32 md:h-33.5 px-4 py-2 rounded-xl border border-[#252B37]"
          />
        </div>

        <div className="flex flex-col gap-3.5">
          <p className="font-bold text-sm">Services</p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="flex flex-col">
              <label className="flex items-center my-4 gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded-[6px] accent-[#FF623E]"
                />
                <span className="text-sm md:text-base font-medium">
                  Web Development
                </span>
              </label>

              <label className="flex items-center my-4 gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-[6px] accent-[#FF623E]"
                />
                <span className="text-sm md:text-base font-medium">
                  Mobile App Development
                </span>
              </label>

              <label className="flex items-center my-4 gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-[6px] accent-[#FF623E]"
                />
                <span className="text-sm md:text-base font-medium">
                  UI/UX Design
                </span>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="flex items-center my-4 gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-[6px] accent-[#FF623E]"
                />
                <span className="text-sm md:text-base font-medium">
                  Cloud Solutions
                </span>
              </label>

              <label className="flex items-center my-4 gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-[6px] accent-[#FF623E]"
                />
                <span className="text-sm md:text-base font-medium">
                  Software Development
                </span>
              </label>

              <label className="flex items-center my-4 gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-[6px] accent-[#FF623E]"
                />
                <span className="text-sm md:text-base font-medium">Other</span>
              </label>
            </div>
          </div>
        </div>

        <button className="bg-[#FF623E] h-11 md:h-12 rounded-full font-semibold">
          Lets Talk
        </button>
      </form>
    </section>
  );
}
