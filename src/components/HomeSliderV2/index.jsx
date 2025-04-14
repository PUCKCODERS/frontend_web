import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeBannerV2 = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490572777_122107028150827692_1912713471712216049_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IJkA6wH-tp4Q7kNvwE0BUMX&_nc_oc=Adl4SHyjz6zPbUEl4ufYE-ifbO0CyyihVcJ8mgo65o3KP83Q17G1eaYRuQSq1u1ZCis&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=TzDR8DxContEix3PiMBsfQ&oh=00_AfGk6HKTg1dPJxQrhiyJrmi8-AGVWTkcjt6FYEWvVfvbvg&oe=67FF755B" />

          <div
            className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 text-[#556f8d]
          flex items-center flex-col justify-center transition-all duration-700"
          >
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 text-[#0a7fec]">
              MAQUINAS EN GENERAL
            </h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
              MAQUINAS CASERAS Y MAQUINAS INDUSTRIALES
            </h2>

            <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3 text-[#0a7fec] relative -right-[100%] opacity-0">
              MAQUINAS CASERAS
              <span className="text-[#000] text-[35px] font-[700]">$99.00</span>
            </h3>

            <div className="w-full relative -bottom-[100%] opacity-0 btn_">
              <Button className="btn-org !bg-[#0a7fec] !shadow-[4px_4px_2px_#000] border !border-[transparent]">
                COMPRAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490572777_122107028150827692_1912713471712216049_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IJkA6wH-tp4Q7kNvwE0BUMX&_nc_oc=Adl4SHyjz6zPbUEl4ufYE-ifbO0CyyihVcJ8mgo65o3KP83Q17G1eaYRuQSq1u1ZCis&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=TzDR8DxContEix3PiMBsfQ&oh=00_AfGk6HKTg1dPJxQrhiyJrmi8-AGVWTkcjt6FYEWvVfvbvg&oe=67FF755B" />

          <div
            className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 text-[#556f8d]
          flex items-center flex-col justify-center transition-all duration-700"
          >
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 text-[#0a7fec]">
              MAQUINAS EN GENERAL
            </h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
              MAQUINAS CASERAS Y MAQUINAS INDUSTRIALES
            </h2>

            <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3 text-[#0a7fec] relative -right-[100%] opacity-0">
              MAQUINAS CASERAS
              <span className="text-[#000] text-[35px] font-[700]">$99.00</span>
            </h3>

            <div className="w-full relative -bottom-[100%] opacity-0 btn_">
              <Button className="btn-org !bg-[#0a7fec] !shadow-[4px_4px_2px_#000] border !border-[transparent]">
                COMPRAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBannerV2;
