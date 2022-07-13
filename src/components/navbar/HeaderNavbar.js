import React, { useState, useEffect } from "react";
import "./navbar.css";
import axios from "axios";
import Logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const NavBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend123.azurewebsites.net/infovision/cart?cartId=dec5ac08-14c2-4d61-bf6a-fc12eaa2597f"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src={Logo} className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div class="dropdown">
          <img
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            alt="Avatar"
            class="avatar"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />

          
        </div>
        &nbsp;
      </nav>
    </div>
  );
};

export default NavBar;
