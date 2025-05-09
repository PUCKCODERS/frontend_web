import { Button, TextField } from "@mui/material";
import React from "react";
import AccountSidebar from "../../components/AccountSidebar";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">MI PERFIL</h2>
            <hr className="!text-[#b8b8b8]" />

            <form className="mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="NOMBRE COMPLETO"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    label="CORREO ELECTRONICO"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="NUMERO CELULAR"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 mt-5">
                <Button className="btn-org btn-lg w-[100px]">GUARDAR</Button>
                <Button className="btn-org btn-border btn-lg w-[100px]">
                  CANCELAR
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
