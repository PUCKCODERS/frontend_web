import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={12}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/src/images/slider/slider1.png"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
