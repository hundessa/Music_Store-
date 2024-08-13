import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/styles.css";
import { Autoplay, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative top[-50px]">
      <Swiper
        navigation={true}
        autoplay={{ delay: 6000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="background1 scroll-smooth transition-all duration-300">
            <div className="absolute w-[300px] ml[490px] right-[150px] mb-20 text-5xl text-black font-bold bgblack/50">
              <h1 className="text-[#FBE7DC]">Music Is the peace</h1>
              <p className="text-sm mt-6 text-justify w-[400px] ml-[-35px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus deserunt adipisci optio reiciendis
                consectetur reprehenderit impedit minima, culpa provident, quam
                deleniti nobis excepturi molestias accusantium? Quisquam rem
                dolorem tenetur?
              </p>
              <button className="text-lg border-[1px] border-white text-gray-800 p-1 rounded-md bg-gradient-to-b from-orange-300 to-yellow-800  hover:text-white transition-all ease-in hover:scale90 focus:scale-90">
                Sign Up
              </button>
            </div>
        </SwiperSlide>
        <SwiperSlide className="background2 scroll-smooth transition-all">
          <div className="absolute w-[350px] ml[550px] right-[120px] mb-20 text-5xl text-gray-300 font-bold bgblack/50">
            <h1>Music Is the peace</h1>
            <p className="text-sm text-justify text-gray-300 mt-4 px-4 bg-black/50 rounded-md p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              temporibus autem ut, accusamus unde ex, iusto officia veritatis ea
              quae in explicabo quas dolorum animi ipsa suscipit repellendus
              laborum pariatur!
            </p>
            <button className="text-lg border-[1px] p-1 rounded-md bg-gradient-to-r from-red-400 to-pink-500 text-gray300 text-black hover:text-gray-200 transition-all ease-in">
              Sign Up
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="background3 scroll-smooth transition-all">
          <div className="absolute pt-4 w-[400px] h-[270px] left-[150px] mb-20 text-5xl text-white font-bold bg-black/50 rounded-md">
            <h1>Music Is the peace</h1>
            <p className="text-sm text-justify text-gray-300 mt-4 px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              temporibus autem ut, accusamus unde ex, iusto officia veritatis ea
              quae in explicabo quas dolorum animi ipsa suscipit repellendus
              laborum pariatur!
            </p>
            <button className="text-lg border-2 p-1 rounded-md hover:bg-white hover:text-gray-800 transition-all ease-out duration-500">
              Sign Up
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
