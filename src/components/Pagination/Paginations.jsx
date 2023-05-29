import { Pagination } from "@mui/material";
import React from "react";

export default function Paginations({ totalPag, setPages }) {
  const pagination = (page) => {
    setPages(page);
  };

  return (
    <Pagination
      variant="outlined"
      count={totalPag}
      size={"small"}
      onChange={(e) => pagination(e.target.textContent)}
    />
  );
}
