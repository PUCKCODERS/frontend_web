import React from "react";
import { FcShipped } from "react-icons/fc";

const Footer = () => {
  return (
    <footer
      className="py-6 bg-[#eef0f3] border border-[#fff] shadow-[0_-4px_6px_-1px_#b1cdee,0_4px_6px_-1px_#b1cdee]

 "
    >
      <div className="container">
        <div className="flex items-center justify-center gap-5">
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FcShipped className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
            <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
              ENVIO GRATIS
            </h3>
            <p className="text-[12px] font-[500] text-[#6c8199]">
              COMPRAS SUPERIORES A $100
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FcShipped className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
            <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
              COMPRA EN LINEA
            </h3>
            <p className="text-[12px] font-[500] text-[#6c8199]">
              COMPRAS SUPERIORES A $100
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FcShipped className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
            <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
              COMPRA CON TARJETA
            </h3>
            <p className="text-[12px] font-[500] text-[#6c8199]">
              COMPRAS SUPERIORES A $100
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FcShipped className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
            <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
              PAGO EFECTIVO Y TRANSFERECIA
            </h3>
            <p className="text-[12px] font-[500] text-[#6c8199]">
              COMPRAS SUPERIORES A $100
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <FcShipped className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
            <h3 className="text-[12px] font-[900] text-[#556f8d] mt-3">
              GARANTIA Y DEVOLUCIONES
            </h3>
            <p className="text-[12px] font-[500] text-[#6c8199]">
              COMPRAS SUPERIORES A $100
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
