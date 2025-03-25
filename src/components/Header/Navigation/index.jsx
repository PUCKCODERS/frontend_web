import Button from "@mui/material/Button";
import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    alert();
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[25%]">
            <Button
              className="!text-[#556f8d] gap-1 !bg-[#e5e5e5] shadow-[5px_4px_2px_#556f8d] w-full"
              onClick={openCategoryPanel}
            >
              <ImMenu className="text-[18px]" />
              COMPRAR POR CATEGORÍAS
              <VscTriangleDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>
          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-1">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    INICIO
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    MAQUINAS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    CORTE
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    PLANCHADO
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    ACCESORIOS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    REPUESTOS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    NOSOTROS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    CONTACTO
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[500] !bg-[#b8b8b8] !text-[white] hover:!text-[#556f8d]">
                    OFERTAS
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[15%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <TbTruckDelivery className="text-[20px]" />
              ENVIO GRATIS
            </p>
          </div>
        </div>
      </nav>
      {/*category panel component*/}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
