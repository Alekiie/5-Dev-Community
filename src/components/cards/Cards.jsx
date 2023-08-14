import * as FaIcons from 'react-icons/fa';
import "./cards.css";

const Cards = ({ name, image, location,whatsapp, github, twitter }) => {
  return (
    <div className="card-container">
      <span className="pro">PRO</span>
      <img className="round" src={image} alt="user"/>
      <h3>{name}</h3>
      <h6> {location}</h6>
      <p>User interface designer and <br /> front-end developer.</p>
      <div className="socials">
        <a href={whatsapp} target='_blank'><FaIcons.FaWhatsapp className='social_icon'/></a>
        <a href={github} target='_blank'><FaIcons.FaGithub className='social_icon'/></a>
        <a href={twitter} target='_blank'><FaIcons.FaTwitter className='social_icon'/></a>
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
