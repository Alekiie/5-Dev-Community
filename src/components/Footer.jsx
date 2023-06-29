import React from "react";

const Footer = () => {
  return (
    <div className=" w-full  shadow-lg   bg-gradient-bg mt-20 ">
      <div className=" mx-10 mr-10 flex items-center justify-center border border-slate-400 "></div>
      <p className="text-center mt-4 text-slate-600 cursor-pointer">
        Copyright &copy; 2023 5Devs Community,All Rights Reserved
      </p>
      <p className="text-center mt-4 text-slate-600 cursor-pointer mb-8">
        Follow us on <span className="text-subtext">Twitter</span>
      </p>
      <div className=" mx-10 mr-10 flex items-center justify-center border border-slate-400 "></div>
      <div className="flex text-slate-600 my-8  flex-col md:flex-row text-center">
        <p className="mx-4 cursor-pointer">TradeMark Free Notice </p>
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
