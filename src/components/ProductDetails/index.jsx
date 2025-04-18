import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../ProductZoom";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  return (
    <>
      <div sectionclassName="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !font-[bold]"
            >
              INICIO
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !font-[bold]"
            >
              MAQUINAS
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !font-[bold]"
            >
              MAQUINA CASERA SILVER
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%]">
            <h1 className="text-[25px] font-[bold] font-bold text-[#274a72]">
              MAQUINA CASERA SILVER
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-gray-500 text-[13px]">
                MARCA :{" "}
                <span className="font-[500] text-black opacity-75">
                  MAQUINA SINGER
                </span>
              </span>

              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">RESEÑA (5)</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-[#b8b8b8] text-[18px] font-[500]">
                $69.00
              </span>
              <span className="price text-[#0a7fec] text-[18px] font-[600]">
                $99.00
              </span>
            </div>

            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              quasi? Autem, quia, aliquam similique excepturi, quasi corrupti
              nisi ducimus impedit ullam officia tenetur voluptatem sapiente?
              Est enim minima iusto iste. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officiis, quasi? Autem, quia, aliquam similique
              excepturi, quasi corrupti nisi ducimus impedit ullam officia
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
