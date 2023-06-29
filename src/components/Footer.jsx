import React from "react";

const Footer = () => {
  return (
    <div className="  shadow-lg mb-0 mx-10 bg-gradient-bg mt-20 ">
      <div className="flex items-center justify-center border border-slate-400 w-full"></div>
      <p className="text-center mt-4 text-slate-600 cursor-pointer">
        Copyright &copy; 2023 5Devs Community,All Rights Reserved
      </p>
      <p className="text-center mt-4 text-slate-600 cursor-pointer mb-8">
        Follow us on <span className="text-subtext">Twitter</span>
      </p>
      <div className="flex items-center justify-center border border-slate-400 w-full"></div>
      <div className="flex text-slate-600 my-8  flex-col md:flex-row text-center">
        <p className="mr-4 cursor-pointer">TradeMark Free Notice </p>
        <p className="cursor-pointer text-subtext"> Review Our Privacy Policy</p>
        <span className="mx-10 hidden md:block">|</span>
        <p className="cursor-pointer">Service Agreement</p>
        <span className="mx-10 hidden md:block">|</span>
        <p className="cursor-pointer text-subtext">Legal Notice</p>
      </div>
    </div>
  );
};

export default Footer;
