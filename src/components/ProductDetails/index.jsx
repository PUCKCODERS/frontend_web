import React, { useState } from "react";
import Button from "@mui/material/Button";
import QtyBox from "../QtyBox";
import Rating from "@mui/material/Rating";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
      <h1 className="text-[25px] font-[bold] font-bold text-[#274a72] mb-2">
        MÁQUINA DE COSER INDUSTRIAL DE COLUMNA ZOJE ZJ 9610SA-D3-M-3 MÁQUINA DE
        COSER INDUSTRIAL
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-[13px]">
          MARCA :{" "}
          <span className="font-[500] text-black opacity-75">
            MAQUINA SINGER
          </span>
        </span>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer">RESEÑAS (5)</span>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-[#b8b8b8] text-[20px] font-[500]">
          $69.00
        </span>
        <span className="price text-[#0a7fec] text-[20px] font-[600]">
          $99.00
        </span>

        <span className="text-[14px] ">
          DISPONIBLE EN STOCK:
          <span className="text-green-600 text-[14px] font-bold ml-2">
            1369 ARTICULOS
          </span>
        </span>
      </div>

      <br />

      <p className="mt-3 pr-10 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        quasi? Autem, quia, aliquam similique excepturi, quasi corrupti nisi
        ducimus impedit ullam officia tenetur voluptatem sapiente? Est enim
        minima iusto iste. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Officiis, quasi? Autem, quia, aliquam similique excepturi, quasi
        corrupti nisi ducimus impedit ullam officia
      </p>

      <div className="flex items-center gap-3">
        <span className="text-[16px]text-[#274a72] font-[bold] font-bold">
          TALLA
        </span>
        <div className="flex items-center gap-1 actions button">
          <Button
            className={`${
              productActionIndex === 0 ? "!bg-[#274a72] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-[#274a72] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-[#274a72] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-[#274a72] !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>

      <p className="text-green-600 font-bold text-[14px] mt-5 mb-2">
        ENVIO GRATIS
        <span className="font-[bold] font-bold text-[#7994b1] ml-2">
          ( VALIDO PARA LA CIUDAD DE QUITO )
        </span>
      </p>
      <div className="flex items-center gap-4 py-4">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox />
        </div>

        <Button className="btn-org flex gap-2">
          AGREGAR
          <GiShoppingCart className="text-[25px] scale-x-[-1]" />
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[14px] text-[#556f8d] font-bold link cursor-pointer">
          <FaHeart className="text-[18px] text-red-600 hover:scale-125 transition-transform duration-200" />
          AGREGAR A LISTA DE DESEOS
        </span>

        <span className="flex items-center gap-2 text-[14px] text-[#556f8d] font-bold link cursor-pointer">
          <IoMdGitCompare className="text-[18px] text-[#274a72] hover:scale-125 transition-transform duration-200" />{" "}
          AGREGAR PARA COMPARAR
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
