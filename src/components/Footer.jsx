import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-full w-full shadow-lg   bg-black mt-20 ">
      <div>
        <div className="flex flex-col md:grid md:grid-cols-4 m-6 pt-6 text-slate-400 font-body">
          <span>
            <p className="text-white font-extrabold text-xl md:text-2xl ">
              5devs
            </p>
            <p className="text-lg">
              Providing Ultimate solutions from frontend to backend and crafting
              a creative future for the developers.
            </p>
          </span>

          <span className="my-4 flex flex-col md:items-center text-xl md:font-medium md:pl-8 flex-wrap">
            <Link to="/home">Home</Link>
            <Link to="/about">About </Link>
            <Link to="/team">Portfolio</Link>
            <Link to="/about">Services</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
          </span>

          <div className=" my-4 flex flex-col md:items-center justify-center">
            <span>
              <Link to="/privacy">Privacy Policy</Link>
            </span>
            <span>
              <Link to="/privacy">Terms & Conditions</Link>
            </span>
            <span>
              <Link to="/privacy">Partners</Link>
            </span>
          </div>
          <div className="flex md:items-center md:justify-center ">
            <button className="bg-button-color rounded-full  p-3 text-white">
              <Link to='/contact'>

              Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-300  mx-2">
        <span className="text-white font-display flex items-center justify-center pt-2 ">
          &copy; {currentYear} All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
