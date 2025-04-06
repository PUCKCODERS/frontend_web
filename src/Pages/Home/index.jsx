import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[22px] font-[600]">PRODUCTOS POPULARES</h2>
              <p className="text-[14px] font-[400]">
                NO TE PIERDAS LAS OFERTAS VIGENTES HASTA FINALES DE MARZO
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-3 border-[#556f8d] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[30px] font-[600]">ENVIO GRATIS</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[600] uppercase">
                ENVIO GRATIS EN TU PRIMERA COMPRA Y SUPERIORES A $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- SOLO $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;
