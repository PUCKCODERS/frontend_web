import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

const CartItems = () => {
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const openSize = Boolean(sizeanchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = () => {
    setSizeAnchorEl(null);
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[#d1d1d1]">
      <div className="img w-[15%] rounded-md shadow-md overflow-hidden">
        <Link to="/product/7845" className="group">
          <img
            src="https://dcdn-us.mitiendanube.com/stores/937/060/products/whatsapp-image-2024-05-08-at-16-49-38-e8501bf0a251c9748817152035761232-1024-1024.jpeg"
            className="w-full group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <RiDeleteBin5Fill className="absolute top-[0px] right-[0px] cursor-pointer text-[25px] text-[#d67070] hover:!text-[#ce0202]  link transition-all" />
        <span className="text-[13px]">MAQUINA SINGER</span>
        <h3 className="text-[15px] font-bold font-[bold]">
          <Link className="link">
            MÁQUINA DE COSER INDUSTRIAL DE COLUMNA ZOJE ZJ 9610SA-D3-M-3
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer shadow-[1px_1px_3px_#274a72]"
              onClick={handleClickSize}
            >
              TAMAÑO: S <GoTriangleDown />
            </span>

            <Menu
              id="size-menu"
              anchorEl={sizeanchorEl}
              open={openSize}
              onClose={handleCloseSize}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleCloseSize}
                className="!text-[#556f8d] !font-bold hover:!text-[white] hover:!bg-[#274a72] !justify-center"
              >
                S
              </MenuItem>
              <MenuItem
                onClick={handleCloseSize}
                className="!text-[#556f8d] !font-bold hover:!text-[white] hover:!bg-[#274a72] !justify-center"
              >
                M
              </MenuItem>
              <MenuItem
                onClick={handleCloseSize}
                className="!text-[#556f8d] !font-bold hover:!text-[white] hover:!bg-[#274a72] !justify-center"
              >
                XL
              </MenuItem>
              <MenuItem
                onClick={handleCloseSize}
                className="!text-[#556f8d] !font-bold hover:!text-[white] hover:!bg-[#274a72] !justify-center"
              >
                L
              </MenuItem>
            </Menu>
          </div>

          <div className="relative">
            <span className="flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer shadow-[1px_1px_3px_#274a72] ">
              COLOR: SILVER <GoTriangleDown />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span className="price text-[#0a7fec] text-[17px] font-[600]">
            $69.00
          </span>
          <span className="oldPrice line-through text-[#b8b8b8] text-[15px] font-[500]">
            $99.00
          </span>

          <span className="price text-[#ec370a] text-[17px] font-[600]">
            39% <span className="text-[10px]">DESCUENTO</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
