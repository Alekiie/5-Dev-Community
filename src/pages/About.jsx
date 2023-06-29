import React from "react";
import { PiArrowsOutFill } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import {MdOutlineSupport} from 'react-icons/md'
import "./pages.css";
import Box from "../components/Box.jsx";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="mx-10 mt-16 md:mt-10 text-white font-display">
      <div className="border-l-4 border-l-[#fc5356] px-4 text-2xl   font-display md:text-4xl font-semibold">
        <h2>What 5Devs Do?</h2>
      </div>
      <p className="w-full text-medium md:w-1/2 md:text-lg pt-8">
        5Devs.com is a one-stop solution for responsive web design, custom
        development, e-commerce, mobile apps, API integration, and ongoing
        support. Harness our expertise and innovation to elevate your online
        presence and drive success in the digital world.
      </p>
      <div className="mt-8 flex flex-wrap md:grid md:grid-cols-3 gap-8">
        {/* boxes */}
        <Box
          title="Responsive Web Design"
          icon={<PiArrowsOutFill />}
          text=" We specialize in creating visually appealing and user-friendly websites
        that seamlessly adapt to different devices and screen sizes. Our designs
        prioritize intuitive navigation and engaging user experiences."
        />
        <Box
          title="Custom Web Development"
          icon={<AiOutlineUser />}
          text="We excel in developing tailor-made web solutions that perfectly align with your 
          unique business requirements. Our skilled developers bring your ideas to life using 
          the latest technologies and industry best practices."
        />
        <Box
          title="Maintenance and support"
          icon={<BiSolidMessageRounded />}
          text="Our commitment doesn't end with the launch of your project. We provide comprehensive maintenance
           and support services to ensure your website or application runs smoothly, remains up-to-date, and delivers
            an exceptional user experience."
        />
        <Box
          title="API Integration"
          icon={<BsCodeSlash />}
          text="We offer API development and integration services to connect your systems, platforms,
           and third-party services. Unlock the potential of data sharing, automation, and enhanced
            functionality through seamless API integrations."
        />
        <Box
          title="Mobile App Development"
          icon={<CgMenuGridO />}
          text="Extend your reach and engage your audience on the go with our mobile app
            development services. We craft native and cross-platform applications that deliver 
            seamless performance and delightful user interactions."
        />
        <Box
          title="Technical Support"
          icon={<MdOutlineSupport />}
          text="Our dedicated technical support team is ready to assist you with any issues,
           inquiries, or maintenance needs. We provide reliable and prompt support to ensure your
            website or application runs smoothly and efficiently."
        />
      </div>
      <Footer/>
    </div>
  );
};

export default About;
