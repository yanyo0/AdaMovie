import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function ButtonInfo({ color, size, id }) {
  return (
    <Link to={`/InfoMovie/${id}`}>
      <Button variant="outlined" color={color} size={size && size}>
        <AddIcon sx={{ mr: 2 }} /> Info
      </Button>
    </Link>
  );
}
