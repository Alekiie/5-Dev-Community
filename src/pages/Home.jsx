import Footer from "../components/Footer";
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
            With our team at the helm, you can rest assured that your users will
            enjoy a smooth and streamlined experience. We strive to create
            user-friendly interfaces that engage and captivate, while the
            powerful backend systems work tirelessly behind the scenes to
            deliver optimal performance.
          </span>
          <br />
          <br />
          <div className="flex flex-col">
            <span className="text-color-subtext font-bold text-2xl font-display mb-4 uppercase">
              Become Part of our Team?
            </span>
            <div className="flex text-sm w-full md:block md:text-lg">
              <input
                type="email"
                name=""
                id=""
                placeholder="E-mail Address"
                className="rounded-xl  border-none rounded-r-none bg-[#002846]  w-full md:w-3/4 p-1 md:p-2 outline-none text-white"
              />
              <button className="md:inline-flex  bg-[#ff4820] p-1 md:p-2 rounded-xl rounded-l-none">
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
          Join us on this exciting journey of transforming your digital
          aspirations into reality. Let&apos; work together to create an exceptional
          online presence that sets you apart from the competition. Get ready to
          impress your users and achieve your business goals with our expert
          full-stack development services.
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Home;
