import Avatar from '../../assets/images/avatar3.jpg'
import './cards.css'

const Cards = ({name}) => {
  return (
    <div className="border rounded-lg p-2 md:px-8  flex flex-col text-sm font-display text-white  card cursor-pointer w-full">
      <div className=" flex  md:px-8 flex-col text-subtext text-sm font-semibold md:text-lg md:flex md:flex-col ">
        <img src={Avatar}  alt="passport" className=" max-w-fit flex justify-center items-center mx-auto  rounded-full py-2" />
        <p className=" my-auto text-sm text-center md:text-xl md:flex md:justify-center md:items-center md:pl-8 ">{name}</p>
      </div>
      <div>
        <p className="text-white font-bold pt-8 grid grid-cols-2">Area of Expertise: 
        <span className="px-0  text-sm col-span-1">

          Frontend Developer
          </span>
          </p>

        <span className='text-slate-500 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          velit ut ipsum blanditiis odio in, doloremque quia. Eum quo beatae
          ratione alias aliquid, deleniti atque repellat voluptatibus quae iure
          cupiditate.
        </span>
      </div>
    </div>
  );
};

export default Cards;
