import Line from "../../../assets/Line.svg";
import logoSymbol from "../../../assets/logo-symbol.svg";
import iconsSosmed from "../../../assets/iconsSosmed.svg";

export default function Footer() {
  return (
    <footer className="px-4 md:px-35 py-6 md:py-10 flex justify-center">
      <div className="w-full md:w-290 rounded-2xl md:rounded-3xl p-5 md:p-15 gap-6 md:gap-15 flex flex-col 
                  bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#252B37]"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h3 className="font-bold text-[28px] md:text-4xl">
              LET&apos;S DISCUSS YOUR IDEAS
            </h3>
          </div>

          <div className="flex items-center gap-2 md:gap-2.5 order-1 md:order-2">
            <img src={logoSymbol} alt="logoSymbol" />
            <p className="font-semibold text-xl">Your Logo</p>
          </div>
        </div>

        <div>
          <img src={Line} alt="Line" />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm md:text-base">
            <p className="font-medium">About</p>
            <p className="font-medium">Service</p>
            <p className="font-medium">Projects</p>
            <p className="font-medium">Testimonials</p>
            <p className="font-medium">FAQ</p>
          </div>

          <div>
            <img src={iconsSosmed} alt="iconsSosmed" />
          </div>
        </div>
      </div>
    </footer>
  );
}
