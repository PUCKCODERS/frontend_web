import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="productItem shadow-[8px_7px_12px_#b8b8b8] rounded-md  overflow-hidden border-1 border-[#f0f0f0]">
      <div className="imgWrapper w-[100%] h-[200px] overflow-hidden rounded-md">
        <img
          src="https://polipapel.vteximg.com.br/arquivos/ids/174453-1000-1000/O76237.png?v=638191796905070000"
          className=" w-full"
        />
      </div>

      <div className="info p-3 ">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            COLOR SILVER
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#556f8d]">
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
