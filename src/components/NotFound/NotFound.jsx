import { Container } from "@mui/material";
import React from "react";
import NotFoundImg from "../../assets/img/notFound.gif";

export default function NotFound() {
  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "80vh",
        width: 1,
        p: 2,
        pt: 10,
        bgcolor: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={NotFoundImg} alt="Not Found" />
    </Container>
  );
}
