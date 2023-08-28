import * as FaIcons from 'react-icons/fa';
import * as CiIcons from 'react-icons/ci';
import "./cards.css";


const Cards = ({data}) => {
  return (
    <div className="card-container">
      <span className="pro">PRO</span>
      <img className="round" src={data.image} alt="user"/>
      <h3>{data.name}</h3>
      <div className="location">
        <CiIcons.CiLocationOn className='location_icon'/>
        <h6>{data.location}</h6>
      </div>
      <p>{data.role}</p>
      <div className="socials">
        <a href={data.whatsapp} target='_blank'><FaIcons.FaWhatsapp className='social_icon'/></a>
        <a href={data.github} target='_blank'><FaIcons.FaGithub className='social_icon'/></a>
        <a href={data.linkedin} target='_blank'><FaIcons.FaLinkedin className='social_icon'/></a>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {data.skills.map((skill, index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
