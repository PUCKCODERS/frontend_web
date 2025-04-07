import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem rounded-md  overflow-hidden !border-1 !border-[#b1cdee] mb-4">
      <div className=" group imgWrapper w-[100%]  overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[200px] overflow-hidden">
            <img
              src="https://maquinasecuador.com/wp-content/uploads/2023/11/Recubridora-1-1024x1024.jpg"
              className="w-full"
            />

            <img
              src="https://maquinasecuador.com/wp-content/uploads/2023/11/Recubridora-600x600.jpg"
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#556f8d] text-white h-[20px] p-1 text-[12px] font-[500] rounded-lg">
          10%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#f58686]  hover:!bg-[#fdaeae] hover:!text-[#f10606] group ">
            <FaHeart className="text-[18px] !text-[#f58686] group-hover:!text-[#f10606] hover:!text-[#f10606]" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#b1cdee]  hover:!bg-[#b1cdee] hover:!text-[#556f8d] group ">
            <IoMdGitCompare className="text-[18px] !text-[#b1cdee] group-hover:!text-[#556f8d] hover:!text-[#556f8d]" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#b1cdee]  hover:!bg-[#b1cdee] hover:!text-[#556f8d] group ">
            <MdOutlineZoomOutMap className="text-[18px] !text-[#b1cdee] group-hover:!text-[#556f8d] hover:!text-[#556f8d]" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            COLOR SILVER
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[500] mb-1 text-[#556f8d]">
          <Link to="/" className="link transition-all">
            MAQUINA SINGER COLOR SILVER TAMAÑO SMALL
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-[#b8b8b8] text-[15px] font-[500]">
            $99.00
          </span>
          <span className="price text-[#0a7fec] text-[17px] font-[600]">
            $69.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
