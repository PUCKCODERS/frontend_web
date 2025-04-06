import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box BannerBox overflow-hidden rounded-lg group shadow-[7px_7px_7px_#556f8d] !border-1 !border-[#556f8d] mb-5">
      <Link to="/">
        <img
          src={props.img}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="banner"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
