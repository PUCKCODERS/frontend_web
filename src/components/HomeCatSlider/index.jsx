import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-4">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#8fc1ff] shadow-[5px_4px_2px_#0d7aff] border-[1px] border-[#0d7aff] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#affda5] shadow-[5px_4px_2px_#1eee02] border-[1px] border-[#1eee02] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#faca8c] shadow-[5px_4px_2px_#fa8f02] border-[1px] border-[#fa8f02] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#8ca0fa] shadow-[5px_4px_2px_#153ef3] border-[1px] border-[#153ef3] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fa8c8c] shadow-[5px_4px_2px_#f01b1b] border-[1px] border-[#f01b1b] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fa8cde] shadow-[5px_4px_2px_#f512bc] border-[1px] border-[#f512bc] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#8ce9fa] shadow-[5px_4px_2px_#07cef1] border-[1px] border-[#07cef1] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#affda5] shadow-[5px_4px_2px_#1eee02] border-[1px] border-[#1eee02] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#8fc1ff] shadow-[5px_4px_2px_#0d7aff] border-[1px] border-[#0d7aff] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[600] mt-3">MAQUINA</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
