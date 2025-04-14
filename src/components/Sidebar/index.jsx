import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { VscTriangleDown } from "react-icons/vsc";
import { Button } from "@mui/material/Button";

const Sidebar = () => {
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="mb-3 text-[15px] font-[bold] flex items-center text-[#556f8d]">
          FILTRAR POR CATEGORIA
          <Button>
            <VscTriangleDown />
          </Button>
        </h3>
        <Collapse isOpened={false}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="MAQUINAS"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="CORTE"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="PLANCHADO"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="ACCESORIOS"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="REPUESTOS"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="OFERTAS"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="NOSOTROS"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="CONTACTO"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
