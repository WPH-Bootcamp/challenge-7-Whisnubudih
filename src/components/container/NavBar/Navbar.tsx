import logoSymbol from '../../../assets/logo-symbol.svg'
import iconHamburgerMenu from '../../../assets/iconHamburgerMenu.svg'
import iconHamburgerLight from '../../../assets/iconHamburgerLight.svg'

export default function Navbar() {


  return (
     <header className="flex justify-between items-center  px-4 py-6 md:px-35  border-1px ">
      <div className="flex items-center w-35 h-8 gap-2">
        <img className="w-6.5 h-7" src={logoSymbol} alt="logo-symbol.svg" />
        <p className="font-semibold font-['Outfit'] text-base w-24 h-8">Your Logo</p>
      </div>

      <div className="block md:hidden">
        <img src={iconHamburgerMenu} alt="iconHamburgerMenu" />
      </div>

       <div className="dark:hidden block md:hidden">
        <img src={iconHamburgerLight} alt="iconHamburgerMenu" />
      </div>


       <div className="hidden md:flex justify-between items-center w-lg gap-3">
            <a className="font-semibold text-base" href="">About</a>
            <a className="font-semibold text-base" href="">Service</a>
            <a  className="font-semibold text-base" href="">Projects</a>
            <a className="font-semibold text-base" href="">Testimonials</a>
            <a className="font-semibold text-base" href="">FAQ</a>
        </div>
        <div className="hidden md:block items-center">
          <button className="bg-[#FF623E] w-50 h-11 p-2 gap-1 rounded-full">Lets Talk</button>
        </div>
    </header>
  );
}