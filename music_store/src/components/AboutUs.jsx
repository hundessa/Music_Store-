import about_us from "../assets/about_us/about_us-removebg-preview.png";
const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center py-28 mt[-100px] relative top[-150px] z-10 bgwhite">
        <div className="flex space-x-20">
          <div className=" bg-gradient-to-l from-[#1A0D1B] via-[#401137] to-[#1A0D1B]">

          <img className="size-96 rounded-lg" src={about_us} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <h1 className="font-bold text-5xl text-slate-300 w-[500px] justifycenter mx-auto mb-6 text-center">
                Discover Somethings About Us
              </h1>
              <p className="flex jusitfy-center items-center w-[450px] text-slate-400 text-justify font-semibold text-opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, quasi. Adipisci natus molestias amet minima incidunt
                hic ad suscipit ratione, nisi sequi error enim aperiam et eos
                illo quos deleniti! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate, quasi. Adipisci natus molestias
                amet minima incidunt hic ad suscipit ratione, nisi sequi error
                enim aperiam et eos illo quos deleniti!
              </p>
              <button className="mt-4 border-2 border-gray-500 p-[3px] rounded-md text-slate-300 hover:text-white hover:bg-slate-500 transition-all ease-out duration-300">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
