import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Button, Tooltip } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { FaUser } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(MyContext);

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-300 bg-[#e5e5e5] border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                OBTENGA HASTA UN 50 % DE DESCUENTO EN ESTILOS DE LA NUEVA
                TEMPORADA
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    CENTRO DE AYUDA{""}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    PEDIDOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300 bg-[#fff]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="https://maquitexperu.com/wp-content/uploads/2021/04/maquitex.png" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              {context.isLogin === false ? (
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition text-[15px] font-[500]"
                  >
                    ACCESO
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/register"
                    className="link transition text-[15px] font-[500]"
                  >
                    REGISTRARSE
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="myAccountWrap flex items-center gap-3 cursor-pointer shadow-[7px_7px_7px_#e5e5e5]"
                    onClick={handleClick}
                  >
                    <Button
                      className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#274a72] hover:!text-[#fff] !bg-[#fff] hover:!bg-[#274a72] !shadow-[0px_0px_0px_3px_#7994b1] transition-all duration-300"
                      title="MI CUENTA"
                      placement="top"
                    >
                      <FaUser className="text-[25px]" />
                    </Button>

                    <div className="info flex flex-col">
                      <h4 className="leading-6 text-[14px] mb-0 capitalize text-left justify-start font-[500] text-[#274a72]">
                        JONATHAN RODRIGUEZ
                      </h4>
                      <span className="text-[13px] capitalize text-left justify-start font-[400] text-[#979797]">
                        jlc.rodriguez316@gmail.com
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 !text-[#274a72] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none"
                      >
                        <FaUser className="text-[20px]" />{" "}
                        <span className="text-[14px]">MI CUENTA</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 !text-[#274a72] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none"
                      >
                        <FaShoppingCart className="text-[20px]" />{" "}
                        <span className="text-[14px]">PEDIDOS</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 !text-[#274a72] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none"
                      >
                        <FaHeart className="text-[20px]" />
                        <span className="text-[14px]">MI LISTA</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleClose}
                      className="flex gap-2 !py-2 !text-[#274a72] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none"
                    >
                      <GiExitDoor className="text-[20px]" />
                      <span className="text-[14px]">CERRAR SESIÓN</span>
                    </MenuItem>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="COMPARTIR" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoMdGitCompare className="text-[#0a7fec]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="ME GUSTA" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaHeart className="text-[#e73821]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="CARRITO" placement="top">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaShoppingCart className="text-[#274a72]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
