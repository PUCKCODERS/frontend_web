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
    <div className="productItem shadow-[8px_7px_12px_#b8b8b8] rounded-md  overflow-hidden !border-1 !border-[#b1cdee] mb-2">
      <div className="imgWrapper w-[100%] h-[200px] overflow-hidden rounded-md relative">
        <img
          src="https://polipapel.vteximg.com.br/arquivos/ids/174453-1000-1000/O76237.png?v=638191796905070000"
          className=" w-full"
        />
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#556f8d] text-white h-[20px] p-1 text-[12px] font-[500] rounded-lg">
          10%
        </span>

        <div className="actions absolute top-[15px] right-[15px] z-50 flex items-center gap-4 flex-col w-[80px]">
          <Button className="!w-[45px] !h-[45px] !min-w-[45px] rounded-full bg-![#fd0505] !text-[#f88787] !hover:bg-[#fd0505] !hover:text-[#fd0505] ">
            <FaHeart />
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
