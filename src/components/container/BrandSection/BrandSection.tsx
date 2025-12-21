
import logoUpwork from '../../../assets/logoUpwork.svg'
import logoZoom from '../../../assets/logoZoom.svg'
import logoPostman from '../../../assets/logoPostman.svg'
import logoDatabricks from '../../../assets/logoDatabricks.svg'
import logoAirbnb from '../../../assets/logoAirbnb.svg'
import logoDropbox from '../../../assets/logoDropbox.svg'
import logoPaypal from '../../../assets/logoPaypal.svg'

export default function BrandSection() {


  return (
     <section className="flex flex-col md:h-59   items-center" >
        <p className="font-bold text-base">Trusted by Global Innovators & Leading Brands</p>
        <div>
          <div className="flex h-28.5 py-10 gap-12 md:w-full md:h-32   overflow-hidden relative">
              <img className="mix-blend-luminosity" src={logoUpwork} alt="logoUpwork"/>
              <img className="mix-blend-luminosity" src={logoZoom} alt="logoZoom"/>
              <img className="mix-blend-luminosity" src={logoPostman} alt="logoPostman"/>
              <img className="mix-blend-luminosity" src={logoDatabricks} alt="logoDatabricks"/>
              <img className="mix-blend-luminosity" src={logoAirbnb} alt="logoAirbnb"/>
              <img className="mix-blend-luminosity" src={logoDropbox} alt="logoDropbox"/>
              <img className="mix-blend-luminosity" src={logoPaypal} alt="logoPaypal"/>
          </div>
        </div>
      </section>
  );
}