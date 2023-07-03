import React from 'react';
import Footer from "../components/Footer";
import Cards from "../components/cards/Cards";

const Team = () => {
  return (
    <div className="mt-16 md:mt-10 mx-10">
      
      <p className="text-white font-display text-medium md:text-lg">
        {/* Welcome to 5Devs.com, where creativity meets innovation!  */}
        We are a dynamic team of five young and passionate developers, dedicated
        to delivering cutting-edge frontend and backend solutions. With a
        perfect blend of technical expertise and imaginative thinking, we strive
        to bring your digital visions to life. From stunning user interfaces to
        seamless functionality, we are here to transform your ideas into
        reality. Join us on this exciting journey of endless possibilities as we
        craft exceptional web experiences tailored to your unique needs. Let&apos;s
        build the future together, one line of code at a time.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mt-8">

      <Cards name='John Mwatheka'/>
      <Cards name='Washington Kimani'/>
      <Cards name='Alexander Maina'/>
      <Cards name='Member Name'/>
      <Cards name='Member Name'/>
   
      </div>
      <Footer/>
    </div>
  );
};

export default Team;
