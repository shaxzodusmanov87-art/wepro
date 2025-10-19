import { useEffect, useState } from "react"
import { navbarData } from "../data/data";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[115px] sm:px-[65px] max-sm:px-[45px] 
        ${scrolled
          ? "bg-white shadow-md"
          : "bg-transparent py-4"}
          `}
    >

      <div className="w-full h-[65px] bg-transparent flex justify-between font-sans text-white font-semibold">

        <div className="flex justify-center items-center gap-6 text-[15px]">
          <div className="w-[150px] mr-4">
            {scrolled ? <img src="/wewhite.png" /> : <img src="/weblack.png" />}

          </div>

          <div className="max-xl:hidden flex justify-center items-center gap-6 text-[15px]">
            {navbarData.map((item) => (
              <ul key={item}>
                <li className={`${scrolled ? "text-gray-700" : "text-white"}`}><a href="#">{item}</a></li>
              </ul>
            ))}
          </div>

        </div>

        <div className="flex gap-6 justify-center items-center">
          <select className={`${scrolled ? "bg-transparent appearance-none text-black" : "bg-transparent appearance-none"}`}>
            <option>RU</option>
            <option>UZ</option>
            <option>ENG</option>
          </select>

          <p className={`${scrolled ? "text-black" : "text-white"} max-xl:hidden`}>+998 78 113-70-05</p>

          <button
            className={`flex justify-center items-center w-38 pt-[8px] pb-[10px] rounded-[7px] text-gray-950 ${scrolled ? "bg-blue-500 hover:bg-gray-500" : "bg-white hover:bg-white/50"}`}
          >
            <p className={`${scrolled ? "text-white" : "text-black"}`}>Личный кабинет</p>
          </button>

          <div className='hidden max-xl:block'>
            <GiHamburgerMenu
              className={`${scrolled ? "text-black" : "text-white"}`}
            />
          </div>

        </div>



      </div>
    </header>
  )
}


export default Navbar