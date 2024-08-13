import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMusic } from "react-icons/fa";
import { PiPlay } from "react-icons/pi";
import { albums } from "./data/musicData";
import "./styles/styles.css";

const PopularAlbums = () => {
  return (
    <>
      <div className="bg-slate200 min-h-screen">
        <div className="flex justify-center ">
          <h1 className="font-bold text-6xl w-[650px] mb-20 text-gray-200 text-center">
            Explore Endless Music Libraries
          </h1>
        </div>
        <Swiper
          modules={[Virtual, Navigation]}
          slidesPerView={4}
          spaceBetween={-35}
          navigation={true}
          className=""
        >
          {albums.map((album) => (
            <SwiperSlide className="">
              <div className="rounded-lg">
                <div className="w-60 relative flex justify-center mb-8">
                  <img
                    className="rounded-lg blur-[2px]"
                    src={album.image}
                    alt=""
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <PiPlay className="text-3xl text-white cursor-pointer" />
                  </div>{" "}
                  <div className="absolute bottom-8 space-y-2 p-4 bg-gradient-to-t from-gray-400 rounded-b-lg">
                    <h1 className="font-bold flex text-2xl justify-center text-white">
                      {album.name}
                    </h1>
                    <div className="flex ml[22px] space-x-2 justify-center">
                      <FaMusic className="text-sm flex items-center text-white" />
                      <p className="text-[10px] flex items-center mt-[3px] text-gray-100">
                        {album.songs} Songs
                      </p>
                    </div>
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

export default PopularAlbums;
