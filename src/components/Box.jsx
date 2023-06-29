const Box = ({ icon, text,title }) => (
    <div className="flex flex-col border w-full rounded-lg p-8 feature-box-1 cursor-pointer">
      <div
        className=" flex items-center justify-center text-4xl w-[70px] 
          h-[70px] rounded-full bg-[#fc5356]"
      >
        {icon}
      </div>
      <h3 className="text-xl md:text-3xl text-subtext font-bold pb-2">
        {title}
      </h3>
      <p className=" text-medium md:text-lg">{text}</p>
    </div>
  );
  export default Box;