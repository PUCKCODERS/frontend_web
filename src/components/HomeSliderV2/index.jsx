import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

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
      modules={[EffectFade, Navigation, Pagination]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490549001_122105063744827692_1447463573368143286_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=RrxhyNN29sIQ7kNvwGw76kQ&_nc_oc=AdlUXmV-vnCpFpKa9D3-N3fQPtmZcSqSr8r_LRhj3E7L5B0_manxrz-Bu_3mM3l-1dA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=_A0XmFzs2pPlfHdnH9Cu2Q&oh=00_AfHMlGXgdN4pVC7dedX9LFOK4CtgRiXWfH6k1-OmkYF9BA&oe=67FC4174" />

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
        <div className="item w-full rounded-md overflow-hidden ">
          <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/489560778_122105067530827692_1523181666928420912_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=_6gAO6hxIm0Q7kNvwEQtN6u&_nc_oc=AdltuwST3uaB09dnUg3JjZ1LpprYOiw77dSsEZIIdwzQx5zTMZ-w8pHMIllps2cF6D8&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=fC5ukyOX8YQ58uMrA7vkDg&oh=00_AfEb_I-CSKgPYdiNR_trTK5M5qMuE_-SZw0U0HRjP3v_xg&oe=67FC5B76" />
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
        <div className="item w-full rounded-md overflow-hidden ">
          <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/488472695_122105089610827692_821570663625662187_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Z5PHS-rf87wQ7kNvwGQWsC6&_nc_oc=Adn6wzBwEmg0ZRQVUY2ibe0VG-PKEA_oe0ta2OjFRgv3-ePePH1xFLL2spZJvuoUf3Q&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=I5Ai-OiE0jPqF-g-Dnsl-g&oh=00_AfGumCSwbfdwLfdvNauhi-neTQd2bRjh3_9IJRk8t256wQ&oe=67FC6580" />
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
        <div className="item w-full rounded-md overflow-hidden ">
          <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/489614285_122105091482827692_7959849418440280950_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XCTf3vklxIwQ7kNvwEe4_g4&_nc_oc=AdlYSefszxuc7RBJiEhU2pgjW9j9pp_weDUhSyywucIlILwLT2VpkxOj6jP2pXHqK38&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=xeN0n8J18_b0cHRywCbhww&oh=00_AfERf-KVLK3EPqJIiH9b8vs_bX7bab1NR5jjxwY6pFO_xg&oe=67FC6DD8" />
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
