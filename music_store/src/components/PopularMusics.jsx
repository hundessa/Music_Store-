import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { music } from "./data/musicData";

const PopularMusics = () => {
  return (
    <>
      <div className="bg-slate200 pt-10 min-h-screen pb-56">
        <div className="flex justify-center mb-12">
          <h1 className="font-bold text-6xl text-slate-300 w-[600px] text-center">
            The Hottest Tracks Of The Week
          </h1>
        </div>
        <Swiper
          modules={[Virtual, Navigation]}
          slidesPerView={4}
          spaceBetween={-35}
          navigation={true}
        >
          {music.map((music) => (
            <SwiperSlide className="">
              <div className="border-[1px] w-[270px] py-4 rounded-lg bg-slate400 bg-gradient-to-b from-[#130D2B] to-[#150D2F] b-opacity-85">
                <div className="w-[230px] relative flex justify-center mx-auto mb-8">
                  <img
                    className="rounded-lg blur-[1px]"
                    src={music.image}
                    alt=""
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <FaPlay className="text-3xl text-white" />
                  </div>{" "}
                </div>
                <div className="">
                  <h1 className="font-bold flex ml-[28px] mb-2 text-slate-300">
                    {music.title}
                  </h1>
                  <h1 className="flex ml-[24px] text-xs mb-4 text-gray-400">
                    {music.name}
                  </h1>
                  <div className="flex ml-[22px] space-x-2">
                    <CiHeadphones className="text-md text-gray-600" />
                    <p className="text-[10px] flex items-center mt-[3px] text-gray-400">
                      {music.listens} Listens
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PopularMusics;
