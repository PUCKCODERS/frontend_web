import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../bannerBoxV2";

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
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/489614285_122105091482827692_7959849418440280950_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=yzIyN3PN5cQQ7kNvwHcTpbF&_nc_oc=AdlTjHZ0w0Wi6ra8queWSnEl5Xlss7SLKzTr1F4us3IhJMK4S0voLZ1X8Ufu0vpJi3w&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=oEIMTTTpBrCoy-JwS-mXDA&oh=00_AfFPYqueLrDtf_SmXsWPq53kqK2kToFcFUTCcvLlOAjkug&oe=6802CD18"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/489560778_122105067530827692_1523181666928420912_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=WyBQleP6qO0Q7kNvwHWzf1O&_nc_oc=Adlji0-951fP1yPJ5c77M05xBAo534m7RlMCAIri1CPRpg0TX9YLKtOT0rhdmy-76wc&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=5xrFF9lc67GNAq-fNE0bKQ&oh=00_AfGf9P1TqUU_hl_jfyOJL4oabAAOp94NJHxl0QpqkuqR_g&oe=6802F2F6"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490914340_122107052882827692_4934114322789984951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rFL2MCpoA5kQ7kNvwGm3UF3&_nc_oc=AdnfHlZvHVETzbdulmw7WmzdquWhncEWzdMkZqb0ZAmumdU5UWsbjWXWfzupuhNPCSA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=PAD2xicGI9tGIgc01u--Pg&oh=00_AfGQbaKCAK80ia9Px_L9j9PGjbF4fpzZjMjGM_7SMVrfIg&oe=67FF7F31"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490914340_122107052882827692_4934114322789984951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rFL2MCpoA5kQ7kNvwGm3UF3&_nc_oc=AdnfHlZvHVETzbdulmw7WmzdquWhncEWzdMkZqb0ZAmumdU5UWsbjWXWfzupuhNPCSA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=PAD2xicGI9tGIgc01u--Pg&oh=00_AfGQbaKCAK80ia9Px_L9j9PGjbF4fpzZjMjGM_7SMVrfIg&oe=67FF7F31"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490914340_122107052882827692_4934114322789984951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rFL2MCpoA5kQ7kNvwGm3UF3&_nc_oc=AdnfHlZvHVETzbdulmw7WmzdquWhncEWzdMkZqb0ZAmumdU5UWsbjWXWfzupuhNPCSA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=PAD2xicGI9tGIgc01u--Pg&oh=00_AfGQbaKCAK80ia9Px_L9j9PGjbF4fpzZjMjGM_7SMVrfIg&oe=67FF7F31"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490914340_122107052882827692_4934114322789984951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rFL2MCpoA5kQ7kNvwGm3UF3&_nc_oc=AdnfHlZvHVETzbdulmw7WmzdquWhncEWzdMkZqb0ZAmumdU5UWsbjWXWfzupuhNPCSA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=PAD2xicGI9tGIgc01u--Pg&oh=00_AfGQbaKCAK80ia9Px_L9j9PGjbF4fpzZjMjGM_7SMVrfIg&oe=67FF7F31"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490914340_122107052882827692_4934114322789984951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rFL2MCpoA5kQ7kNvwGm3UF3&_nc_oc=AdnfHlZvHVETzbdulmw7WmzdquWhncEWzdMkZqb0ZAmumdU5UWsbjWXWfzupuhNPCSA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=PAD2xicGI9tGIgc01u--Pg&oh=00_AfGQbaKCAK80ia9Px_L9j9PGjbF4fpzZjMjGM_7SMVrfIg&oe=67FF7F31"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image={
              "https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/490914340_122107052882827692_4934114322789984951_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rFL2MCpoA5kQ7kNvwGm3UF3&_nc_oc=AdnfHlZvHVETzbdulmw7WmzdquWhncEWzdMkZqb0ZAmumdU5UWsbjWXWfzupuhNPCSA&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=PAD2xicGI9tGIgc01u--Pg&oh=00_AfGQbaKCAK80ia9Px_L9j9PGjbF4fpzZjMjGM_7SMVrfIg&oe=67FF7F31"
            }
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
