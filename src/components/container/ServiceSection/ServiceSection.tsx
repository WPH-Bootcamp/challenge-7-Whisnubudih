import iconWebsite from '../../../assets/iconWebsite.svg'
import iconSecurity from '../../../assets/iconSecurity.svg'
import iconSearch from '../../../assets/iconSearch.svg'
import iconMonitor from '../../../assets/iconMonitor.svg'
import iconInfrastructure from '../../../assets/iconInfrastructure.svg'
import IconHp from '../../../assets/IconHp.svg'
import iconDesign from '../../../assets/iconDesign.svg'
import iconConsultingt from '../../../assets/iconConsultingt.svg'
import IconCloud from '../../../assets/IconCloud.svg'

export default function ServiceSection() {

  const services = [
  {
    title: "Web Development",
    desc: "Build fast, scalable, and SEO-friendly websites.",
    icon: iconWebsite,
  },
  {
    title: "Mobile App Development",
    desc: "Native & cross-platform apps tailored to user needs.",
    icon: IconHp,
  },
  {
    title: "UI/UX Design",
    desc: "Delight users with intuitive and beautiful interfaces.",
    icon: iconDesign,
  },
  {
    title: "Cloud Solutions",
    desc: "Secure and flexible cloud infrastructure for your growth.",
    icon: IconCloud,
  },
  {
    title: "Software Development",
    desc: "Custom solutions built around your business logic.",
    icon: iconMonitor,
  },
  {
    title: "IT Infrastructure",
    desc: "Scale your backend with reliable tech foundations.",
    icon: iconInfrastructure,
  },
  {
    title: "Cybersecurity Services",
    desc: "Stay protected with enterprise-grade security.",
    icon: iconSecurity,
  },
  {
    title: "QA Solutions",
    desc: "Ensure performance with rigorous testing frameworks.",
    icon: iconSearch,
  },
  {
    title: "IT Consulting & Support",
    desc: "Make smarter tech decisions with expert guidance.",
    icon: iconConsultingt,
  },
];



  return (
    <section className="flex flex-col items-center px-4 md:px-35 py-10 md:py-20 gap-10">
      <div className="text-center flex flex-col gap-3">
        <p className="font-bold text-[28px] md:text-[40px] leading-tight">
          Smart IT Solutions That Grow With You
        </p>
        <p className="font-medium text-sm md:text-lg text-[#A4A7AE]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div key={index} className="relative">
            <div className="
              flex flex-col
              w-93.5 h-32.5 md:h-45.5
              rounded-2xl
              bg-[#FAFAFA] dark:bg-[#0A0D12]
              pt-12 md:pt-16 px-5 pb-5
            ">
              <div className="absolute -top-6">
                <img
                  src={item.icon}
                  className="w-16 h-16 md:w-20 md:h-20"
                  alt={item.title}
                />
              </div>

              <p className="font-bold text-base md:text-xl">
                {item.title}
              </p>

              <p className="font-medium text-sm md:text-base text-[#A4A7AE]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )  
}