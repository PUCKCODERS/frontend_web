import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
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
              <img src="https://scontent.fuio22-1.fna.fbcdn.net/v/t39.30808-6/489456226_4174754722812172_2853351155346051607_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH2mY7wy2fDUjGvHGn3KM4r8LBbFoH-zO_wsFsWgf7M79mf33uBhBY2hFSJlDsajLi6HlBoct386r4zufDM1cj-&_nc_ohc=JjjGIeXg6zkQ7kNvwHKlvuC&_nc_oc=Adn3mnb1FgchcW4etVM132Ga5kgbhLd5Dda0IcRZLbv814BzG4bs8ElXNi8CQpSDmvM&_nc_zt=23&_nc_ht=scontent.fuio22-1.fna&_nc_gid=nG3QFpvsb0WVw6vhCrEy1w&oh=00_AfEIRO0sCyZkjlRgE4DHVK3bRzzW5mRS6N6tA0PdxzWpVA&oe=68041FA5" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
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
