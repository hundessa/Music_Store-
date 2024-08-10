import about_us from "../assets/about_us/about_us.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center my-28">
        <div className="flex space-x-20">
          <img className="size-72" src={about_us} alt="" />
          <div>
            <h1 className="font-bold text-3xl w-[310px] justify-center mx-auto mb-6">
              Discover Somethings <span className="flex justify-center">About Us</span> 
            </h1>
            <p className="flex jusitfy-center items-center w-[450px] text-justify font-semibold text-slate-900 text-opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, quasi. Adipisci natus molestias amet minima incidunt
              hic ad suscipit ratione, nisi sequi error enim aperiam et eos illo
              quos deleniti! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate, quasi. Adipisci natus molestias amet minima
              incidunt hic ad suscipit ratione, nisi sequi error enim aperiam et
              eos illo quos deleniti!
            </p>
            <button className="mt-4 border-2 border-gray-500 p-[3px] rounded-md text-gray-600 hover:text-white hover:bg-slate-500">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
