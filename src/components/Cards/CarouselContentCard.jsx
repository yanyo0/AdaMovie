import React from "react";
import { Container, Box, Typography} from "@mui/material";
import ButtonInfo from "../Buttons/ButtonInfo";
import "./CarouselContentCard.css";
import { urlImg } from "../../utils/Variables";

export default function CarouselContentCard({ img, title, overview, id }) {
  

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "70vh",
        width: 1,
        m: 0,
        p: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        backgroundImage: `url(${urlImg}${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 130%",
      }}
    >
      <Box
        className="cardInfo"
        sx={{
          width: { md: "50%" },
          p: 2,
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="secondary.contrastText">
          {overview}
        </Typography>
        <Box
          sx={{
            width: "100%",
            mt: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <ButtonInfo color={"primary"} id={id} />
        </Box>
      </Box>
    </Container>
  );
}
