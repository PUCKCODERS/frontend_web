import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";
import Footer from "../../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/bannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[65%] shadow-[7px_9px_5px_#556f8d]">
            <HomeBannerV2 />
          </div>
          <div className="part2 w-[35%] flex items-center gap-5 justify-between flex-col">
            <BannerBoxV2
              info="left"
              image={
                "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490415701_122106920300827692_5125056260276947765_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DQRYGZNCYfUQ7kNvwGLjdDE&_nc_oc=AdnIAlnWqizBXkOn0Q9ghEbn6OLN3Buv9eyfPx0ktWU-OjAM88UApCYVnvn0LXAn35s&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=vW6l7DEHyaIUU9cszvKvgw&oh=00_AfHPsrCuyi_iLYL5nnJ5pSSjhA4KpGDlA-wpEG4-Ohlg3A&oe=67FF2847"
              }
            />
            <BannerBoxV2
              info="right"
              image={
                "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490177024_122106922382827692_8539361748793779084_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=lZ28i9S72T8Q7kNvwHSTzsw&_nc_oc=AdmZSL1ktzFhBSPD0KXlJ7KzVJHuO9YM7DxSlXex54vq7lTAioh1jS3o-se2oiQOVYU&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=vSb0Bmad_ePTBvn7itu7MQ&oh=00_AfETtA2CXCMjsaMAfYuhqoYoI1xSJff7q6TzanZqaCvxjw&oe=67FF291C"
              }
            />
          </div>
        </div>
      </section>
      <HomeCatSlider />
      <section className="bg-white py-8 ">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[22px] font-[600]">PRODUCTOS POPULARES</h2>
              <p className="text-[14px] font-[400]">
                NO TE PIERDAS LAS OFERTAS VIGENTES HASTA FINALES DE MARZO
              </p>
            </div>

            <div className="rightSec w-[60%] ">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>
      <section className="py-4 pt-0 bg-white">
        <div className="container">
          <div className="freeShipping w-[90%] m-auto py-4 p-4 border-3 border-[#556f8d] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[30px] font-[600]">ENVIO GRATIS</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[600] uppercase">
                ENVIO GRATIS EN TU PRIMERA COMPRA Y SUPERIORES A $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- SOLO $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <section className="py-5 bg-white ">
        <div className="container ">
          <h2 className="text-[20px] font-[600]">NUEVOS PRODUCTOS</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">PRODUCTOS RECOMENDADOS</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">ARTICULOS DE INTERES</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
