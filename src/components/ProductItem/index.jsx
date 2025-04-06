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
    <div className="productItem shadow-[8px_7px_12px_#b8b8b8] rounded-md  overflow-hidden !border-1 !border-[#b1cdee] mb-4">
      <div className=" group imgWrapper w-[100%]  overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[200px] overflow-hidden">
            <img
              src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/487313297_4163892343898410_8483451465957424973_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZVwNjnmxeAQQ7kNvwERUBNY&_nc_oc=AdlGVrYk-Oa5k_c9M72I6asS9xyuiCukCNWOEZY-QQ7ZpMbxUR3NRXPRDM77NFv81nw&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=BJXewWJttIXCbVd2DUfPCw&oh=00_AfGMszGvDGtuq44o5hT9O6zFe3aWH4YtaffUnNQcxz8amA&oe=67F7F8EA"
              className=" w-full"
            />

            <img
              src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/487769993_4164970857123892_2742528583091687138_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0_OW6dMCqs4Q7kNvwFkaVI2&_nc_oc=AdlYfPXXX8Sjl0QZ6DikgK2W_0WunjUR19HcBm85tpbLklVuRDk3Fqysezw25Pk-NrI&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=yrW--Gp5F6HjRRr62WPSMg&oh=00_AfFhiHpqA2NJ8i2SzCXMFEkotAiI-2u6QyeA0P88Q5yl2Q&oe=67F7D415"
              className=" w-full"
            />

            <img
              src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/487392436_4163905387230439_619907725970957130_n.png?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=cqyzFiZaX_sQ7kNvwFhNZkr&_nc_oc=AdmiRHtb49Nfd_CcxldwCHvzYkOr2gqXPTaVqfy0vqJa0_KAfdo_S23KDjyGvHY0I1Q&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=rAjK0BzDm7z6kLbjTIqokQ&oh=00_AfFIRtNZACyow4xnVLzjqgRtQDkjtPFHL7eQcxVJo94Nzw&oe=67F7D7A7"
              className=" w-full"
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
