import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ButtonInfo from "../Buttons/ButtonInfo";
import { urlImg } from "../../utils/Variables";

export default function CardInfo({ title, img, vote, id }) {
  return (
    <Card
      sx={{
        mt: 4,
        ml: 1,
        mr: 1,
        maxWidth: 220,
        width: 220,
        height: "460px",
        bgcolor: "secondary.light",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="300"
        image={`${urlImg}${img}?w=161&fit=crop&auto=format`}
      />
      <CardContent sx={{ p: 1 }}>
        <Typography
          gutterBottom
          variant="body1"
          color={"primary"}
          sx={{ height: "65px" }}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          color={"primary"}
          sx={{ height: "20px", mt: 1 }}
        >
          {vote}
          <Rating
            name="read-only"
            value={vote / 2}
            readOnly
            size="small"
            sx={{ color: "primary", ml: 2 }}
          />
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: "flex-end", height: "30px" }}>
        <ButtonInfo color={"primary"} size={"small"} id={id} />
      </CardActions>
    </Card>
  );
}
