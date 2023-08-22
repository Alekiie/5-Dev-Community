import * as FaIcons from 'react-icons/fa';
import * as CiIcons from 'react-icons/ci';
import "./cards.css";

const Cards = ({ name, image, location,whatsapp, github, linkedin }) => {
  return (
    <div className="card-container">
      <span className="pro">PRO</span>
      <img className="round" src={image} alt="user"/>
      <h3>{name}</h3>
      <div className="location">
        <CiIcons.CiLocationOn className='location_icon'/>
        <h6>{location}</h6>
      </div>
      <p>User interface designer and <br /> front-end developer.</p>
      <div className="socials">
        <a href={whatsapp} target='_blank'><FaIcons.FaWhatsapp className='social_icon'/></a>
        <a href={github} target='_blank'><FaIcons.FaGithub className='social_icon'/></a>
        <a href={linkedin} target='_blank'><FaIcons.FaLinkedin className='social_icon'/></a>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
