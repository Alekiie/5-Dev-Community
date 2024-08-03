import  { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import {default as Logo} from '../resources/bare_logo.png'


const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuOnClick = () => {
    setShowMenu(!showMenu);
    if (window.innerWidth < 768) {
      setToggleMenu(false);
    }
  };


  const Menu = () => (
    <>
      <div className="flex flex-col justify-end items-end md:flex-row
       text-white gap-8 font-display font-medium text-lg md:text-xl ">
        
        <Link to="/home" onClick={handleMenuOnClick}>
          <span>Home</span>
        </Link>
        <Link to="/about" onClick={handleMenuOnClick}>
          <span>About</span>
        </Link>
        <Link to="/team" onClick={handleMenuOnClick}>
          <span>Team</span>
        </Link>
        <Link to="/contact" onClick={handleMenuOnClick}>
          <span>Contact</span>
        </Link>
      
      </div>
    </>
  );

  return (
    <>
      <div className=" w-full md:flex md:justify-between md:items-center md:py-8 px-24 ">
        <div className="flex flex-1 md:justify-start items-center text-white ">
          <div className="absolute ml-4 md:relative md:pt-0 top-3 mb-4 md:mb-2 left-0 text-xl font-bold">
            <Link to="/home">
              <span className="font-display  md:mb-0 flex text-subtext text-gradient-text gap-2 md:gap-8 items-center justify-center text-2xl">
                <img 
  src={Logo} 
  alt="logo" 
  className="max-w-[95px] max-h-[95px] rounded-full bg-white mb-4" 
/>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center justify-center mt-4 md:ml-16">
            <Menu />
          </div>
        </div>
      </div>
      <div className="absolute top-4 flex right-10  md:hidden cursor-pointer">
        {toggleMenu ? (
          <RiCloseLine
            color="#ffff"
            size={26}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#ffff"
            size={26}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className="flex flex-col justify-center mt-8 items-end absolute
             p-10 min-w-[210px] text-end rounded-lg bg-gradient-bg  right-0 scale-up-center"
          >
            <Menu />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
