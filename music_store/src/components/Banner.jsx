import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/banner_styles/banner_style.css";
import { Autoplay, Navigation } from "swiper/modules";
import banner_1 from "../assets/banner/banner-1.jpg";
import banner_2 from "../assets/banner/banner-2.jpg";
// import banner_3 from "../assets/banner/banner-3.jpg";
import banner_4 from "../assets/banner/banner_4.jpg";

const Banner = () => {
  return (
    <div className="mb-28">
      <Swiper
        navigation={true}
        autoplay={{ delay: 8000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner_1} alt="" />
          <h1 className="absolute w-[300px] ml-[490px] mb-20 text-5xl text-black font-bold bgblack/50">
            Music Is the peace
            <p className="text-sm mt-6 text-justify w-[400px] ml-[-35px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              doloribus deserunt adipisci optio reiciendis consectetur
              reprehenderit impedit minima, culpa provident, quam deleniti nobis
              excepturi molestias accusantium? Quisquam rem dolorem tenetur?
            </p>
            <button className="text-lg border-2 border-gray-500 p-1 rounded-md hover:bg-gray-500 hover:text-white">Sign Up</button>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_2} alt="" />
          <div className="absolute w-[300px] ml-[550px] mb-20 text-7xl text-gray-300 font-bold bgblack/50">
            Music Is the peace
            <p className="text-sm text-justify text-gray-300 mt-4 px-2 bg-black/50 rounded-md p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              temporibus autem ut, accusamus unde ex, iusto officia veritatis ea
              quae in explicabo quas dolorum animi ipsa suscipit repellendus
              laborum pariatur!
            </p>
            <button className="text-lg border-2 p-1 rounded-md hover:bg-white bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-transparent">Sign Up</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_4} alt="" />
          <h1 className="absolute pt-4 w-[400px] h-[270px] mr-[490px] mb-20 text-5xl text-white font-bold bg-black/50 rounded-md">
            Music Is the peace
            <p className="text-sm text-justify text-gray-300 mt-4 px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              temporibus autem ut, accusamus unde ex, iusto officia veritatis ea
              quae in explicabo quas dolorum animi ipsa suscipit repellendus
              laborum pariatur!
            </p>
            <button className="text-lg border-2 p-1 rounded-md hover:bg-white hover:text-gray-800">Sign Up</button>
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
