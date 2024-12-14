import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import photo from "../../assets/daniel.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import html from "../../assets/html5.png";
import tailwindcss from "../../assets/tailwindcss.png";
import ContinuousZoom from "./ContinuousZoom";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000, //delay 10 sec
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="lg:relative pb-10 h-[100vh]  w-full">
            <div className="absolute inset-0 bg-[url('/src/assets/bg6.jpg')] bg-cover bg-center bg-no-repeat aspect-w-16 aspect-h-9 border border-b-red-200 opacity-10"></div>

            <div className="text-center  font-lato text-xl md:text-4xl pt-7">
              <p className="font-semibold text-red-800">Frontend Developer</p>
              <p className="font-semibold italic">DANIEL AMAECHI NWANKWO</p>
            </div>

            {/* Stack screen */}
            <div className="flex lg:mt-10 justify-start  mt-10 md:flex-col items-center  px-3 md:ml-5 w-full md:mt-7 ">
              <div className="flex md:justify-between md:gap-10  gap-3 items-center w-full md:px-0">
                <div className="lg:absolute md:px-3  lg:left-[150px] lg:top-[150px] ">
                  {" "}
                  <ContinuousZoom>
                    <img
                      src={react}
                      alt="photo"
                      width="100"
                      className="  w-[450px]  md:w-[70%]"
                    />
                  </ContinuousZoom>
                </div>
                <div className="lg:absolute  md:px-10 lg:left-[80px] lg:top-[350px]">
                  <ContinuousZoom>
                    <img
                      src={next}
                      alt="photo"
                      width="100"
                      className=" w-[200px]  md:w-[60%]"
                    />
                  </ContinuousZoom>
                </div>
              </div>

              <div className="flex gap-3 md:justify-between md:gap-10 items-center w-full md:px-10 px-3">
                <div className="md:absolute md:top-[310px]   lg:right-[100px] lg:top-[130px] ">
                  <ContinuousZoom>
                    <img
                      src={tailwindcss}
                      alt="photo"
                      width="100"
                      className=" w-[400px] md:w-[50%]"
                    />
                  </ContinuousZoom>
                </div>

                <div className="md:absolute md:top-[310px] md:right-[-100px]  lg:right-[10px] lg:top-[400px] ">
                  <ContinuousZoom>
                    <img
                      src={html}
                      alt="photo"
                      width="100"
                      className=" w-[450px] md:w-[60%]"
                    />
                  </ContinuousZoom>
                </div>
              </div>
            </div>

            {/* Photo screen */}
            <div className="absolute  top-[200px] m-1 lg:p-28 lg:top-0 h-full">
              <img
                src={photo}
                alt="photo"
                className="md:w-full w-full h-[40vh] lg:h-full  md:h-[65vh] md:p-20 lg:p-0 object-cover "
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
