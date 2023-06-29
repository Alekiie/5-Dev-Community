import Photo1 from "../resources/preview.png";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2  mt-14 mx-8 text-white font-display">
        <h2 className="text-xl">
          <span className="">
            We are a team of developers with skills on how to solve real-world
            situations in fields of web development;both Frontend, Backend and
            FullStack.
          </span>
          <br />
          <br />

          <span className="mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse odit
            rerum in neque provident incidunt molestiae. Dignissimos odio ea,
            harum inventore totam qui similique voluptatibus voluptatem nihil,
            temporibus, officiis quos.
          </span>
          <br />
          <br />
          <div className="flex flex-col">
            <span className="text-color-subtext font-bold text-2xl font-display mb-4 uppercase">
              Become Part of our Team?
            </span>
            <div className="">
              <input
                type="email"
                name=""
                id=""
                placeholder="E-mail Address"
                className="rounded-xl  border-none rounded-r-none bg-[#002846] w-3/4 p-2 outline-none text-white"
              />
              <button className="bg-[#ff4820] p-2 rounded-xl rounded-l-none">
                Contact Us
              </button>
            </div>
            <br />
          </div>
        </h2>
        <div className="flex md:mb-8 ">
          <img
            src={Photo1}
            alt="preview"
            className="flex justify-start items-start"
          />
        </div>
      </div>
      <div className="m-4">
        <span className=" text-white font-display text-lg">
          As full-stack developers, we possess a comprehensive understanding of
          both frontend and backend development. This enables us to handle
          end-to-end development projects efficiently, ensuring a cohesive and
          integrated solution for your business. We take care of every aspect,
          from designing the user interface to implementing the server-side
          logic, ensuring a smooth and streamlined experience for your users.
        </span>
      </div>
    </>
  );
};

export default Home;
