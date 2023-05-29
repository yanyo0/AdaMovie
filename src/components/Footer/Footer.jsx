import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <Toolbar
      sx={{
        bgcolor: "black",
        p: 1,
        display: "flex",
        fleDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" color="primary">
        Hecho con <FavoriteIcon fontSize={"small"} sx={{ ml: 1, mr: 1 }} /> y{" "}
        <PsychologyIcon fontSize={"small"} sx={{ ml: 1, mr: 1 }} /> por Yanyo{" "}
        <img src={logo} width={20} alt="nariz chanco" />
      </Typography>
    </Toolbar>
  );
}
