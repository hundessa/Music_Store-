import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { CiPlay1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { music } from "./data/musicData";

const PopularMusics = () => {
  return (
    <>
      <div className="bg-slate-200 py-10 min-h-screen">
        <div className="flex justify-center">
          <h1 className="font-bold text-6xl w-[600px] mb-6">
            The hottest Tracks Of The Week
          </h1>
        </div>
        <Swiper
          modules={[Virtual, Navigation]}
          slidesPerView={3}
          spaceBetween={-100}
          navigation={true}
        >
          {music.map((music, index) => (
            <SwiperSlide>
              <div className="border-[1px] border-gray-400 w-[200px] pt-4 rounded-lg bg-slate-400 bg-opacity-85 pb-4">
                <div className="w-36 relative justify-center mx-auto mb-8">
                  <img
                    className="rounded-lg opacity65 blur-[2px]"
                    src={music.image}
                    alt=""
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    {/* <CiPlay1 className="text-2xl text-white" /> */}
                    <IoPlayOutline className="text-3xl text-white" />
                  </div>{" "}
                </div>
                <div className="">
                  <h1 className="font-bold flex ml-[28px] mb-2 text-white">
                    {music.title}
                  </h1>
                  <h1 className="flex ml-[24px] text-sm mb-4 text-gray-200">
                    {music.name}
                  </h1>
                  <div className="flex ml-[22px] space-x-2">
                    <CiHeadphones className="text-md text-white" />
                    <p className="text-[10px] flex items-center mt-[3px] text-gray-100">
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
