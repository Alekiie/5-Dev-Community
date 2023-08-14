import Footer from "../components/Footer";
import { Mwatheka, Alex, Kimani, Avatar } from "../assets/images";

import Cards from "../components/cards/Cards";

const props = [
  {
    name: "John Mwatheka",
    image: Mwatheka,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254757909044?text=Hello%20John",
    github: "https://github.com/Mwatheka",
    twitter: "https://twitter.com/",
  },
  {
    name: "Alexander Maina",
    image: Alex,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254768444197?text=Hello%20Alex",
    github: "https://github.com/Alekiie",
    twitter: "https://twitter.com/",
  },
  {
    name: "Washington Kimani",
    image: Kimani,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254745811535?text=Hello%20Washington",
    github: "https://github.com/Washington-Kimani",
    twitter: "https://twitter.com/",
  },
  {
    name: "Joseph Junior",
    image: Avatar,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254112858989?text=Hello%20Joseph",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Nick Teck",
    image: Avatar,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254716453748?text=Hello%20Nick",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  }
];

const Team = () => {
  return (
    <>
      <div className="mt-16 md:mt-10 mx-10">
        <p className="text-white font-display text-medium md:text-lg">
          {/* Welcome to 5Devs.com, where creativity meets innovation!  */}
          We are a dynamic team of five young and passionate developers,
          dedicated to delivering cutting-edge frontend and backend solutions.
          With a perfect blend of technical expertise and imaginative thinking,
          we strive to bring your digital visions to life. From stunning user
          interfaces to seamless functionality, we are here to transform your
          ideas into reality. Join us on this exciting journey of endless
          possibilities as we craft exceptional web experiences tailored to your
          unique needs. Let&apos;s build the future together, one line of code
          at a time.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mt-8">
          <Cards name={props[0].name} image={props[0].image} location={props[0].location} whatsapp={props[0].whatsapp} github={props[0].github} twitter={props[0].twitter}/>
          <Cards name={props[1].name} image={props[1].image} location={props[1].location} whatsapp={props[1].whatsapp} github={props[1].github} twitter={props[1].twitter}/>
          <Cards name={props[2].name} image={props[2].image} location={props[2].location} whatsapp={props[2].whatsapp} github={props[2].github} twitter={props[2].twitter}/>
          <Cards name={props[3].name} image={props[3].image} location={props[3].location} whatsapp={props[3].whatsapp} github={props[3].github} twitter={props[3].twitter}/>
          <Cards name={props[4].name} image={props[4].image} location={props[4].location} whatsapp={props[4].whatsapp} github={props[4].github} twitter={props[4].twitter}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
