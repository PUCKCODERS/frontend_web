import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);

  const context = useContext(MyContext);
  const histoty = useNavigate();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card w-[400px] m-auto rounded-md bg-white p-5 px-10 shadow-[7px_7px_7px_#274a72]">
          <div className="text-center flex items-center justify-center mb-3">
            <img
              src="https://png.pngtree.com/png-vector/20230522/ourmid/pngtree-reset-password-vector-png-image_7104484.png"
              width="120"
            />
          </div>
          <h3 className="text-center text-[20px] font-[bold] font-bold">
            CAMBIO DE CONTRASEÑA
          </h3>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                id="password"
                label="NUEVA CONTRASEÑA *"
                variant="outlined"
                className="w-full"
                name="name"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#274a72]"
                onClick={() => {
                  setIsPasswordShow(!isPasswordShow);
                }}
              >
                {isPasswordShow === false ? (
                  <FaEye className="text-[20px] opacity-75" />
                ) : (
                  <FaEyeLowVision className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow2 === false ? "password" : "text"}
                id="confirm_password"
                label="CONFIRMAR CONTRASEÑA *"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#274a72]"
                onClick={() => {
                  setIsPasswordShow2(!isPasswordShow2);
                }}
              >
                {isPasswordShow === false ? (
                  <FaEye className="text-[20px] opacity-75" />
                ) : (
                  <FaEyeLowVision className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button variant="contained" className="btn-org btn-lg w-full">
                CAMBIAR LA CONTRASEÑA
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
