import Footer from "../components/Footer";
import { Mwatheka, Alex, Kimani,Joseph, Nick } from "../assets/images";

import Cards from "../components/cards/Cards";

const props = [
  {
    name: "Mwatheka John",
    image: Mwatheka,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254757909044?text=Hello%20John",
    github: "https://github.com/Mwatheka",
    linkedin: "https://www.linkedin.com/in/abraham-mwatheka-424250239",
    role : 'Full Stack Developer',
    skills: ['JS', 'PHP', 'Laravel', 'API integration', 'HTML', 'CSS', 'WordPress']
  },
  {
    name: "Alexander Maina",
    image: Alex,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254768444197?text=Hello%20Alex",
    github: "https://github.com/Alekiie",
    linkedin: "https://www.linkedin.com/in/alexander-maina-63ba8a232",
    role : 'MERN Stack Developer',
    skills: ['HTML','CSS','JS', 'MySQL', 'ReactJs', 'TailwindCSS', 'Nextjs','Nodejs','MongoDB','Python3']
  },
  {
    name: "Washington Kimani",
    image: Kimani,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254745811535?text=Hello%20Washington",
    github: "https://github.com/Washington-Kimani",
    linkedin: "https://www.linkedin.com/in/washington-kimani-4a306b232/",
    role : 'MERN Stack Developer',
    skills: ['HTML', 'CSS', 'JS', 'jQuery', 'BootStrap', 'MERN', 'MySQL']
  },
  {
    name: "Joseph Odira",
    image: Joseph,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254112858989?text=Hello%20Joseph",
    github: "https://github.com/",
    linkedin: "https://ke.linkedin.com/in/joseph-odira-52b283225",
    role : 'FrontEnd Developer',
    skills: ['JS', 'PHP', 'Laravel', 'API integration', 'HTML', 'CSS', 'WordPress']
  },
  {
    name: "Nicholas Murimi",
    image: Nick,
    location: "Nairobi",
    whatsapp: "https://wa.me/+254716453748?text=Hello%20Nick",
    github: "https://github.com/nic3holas",
    linkedin: "https://www.linkedin.com/in/nicholas-murimi-684113233",
    role : 'Full Stack Developer',
    skills: ['HTML','CSS', 'BootStrap','Angular','PHP','MySQL', 'JavaScript','Java','C++', 'Python 3', 'FrontEnd', 'Backend', 'Android Dev']
  },
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
          <Cards data={props[0]} />
          <Cards data={props[1]} />
          <Cards data={props[2]} />
          <Cards data={props[3]} />
          <Cards data={props[4]} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
