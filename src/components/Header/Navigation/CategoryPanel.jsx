import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "@mui/material";
import { TbCopyPlusFilled } from "react-icons/tb";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h3 className="p-3 text-[13px] font-[500] flex items-center justify-between">
        COMPRAR POR CATEGORÍAS
        <FaWindowClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[15px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full !text-left !justify-start !px-3 !text-[#556f8d]">
              MAQUINAS
            </Button>
            <TbCopyPlusFilled className="absolute top-[10px] right-[15px]" />
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
