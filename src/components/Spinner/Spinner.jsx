import React from "react";
import Stack from "@mui/material/Stack";

import { CircularProgress } from "@mui/material";

export default function Spinner({ load }) {
  return (
    <Stack
      sx={{
        color: "grey.500",
        display: "flex",
        justifyContent: "center",
        mt: 10,
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="primary" size={"100px"} />
      {/* <LinearProgress color="success" />
     <LinearProgress color="inherit" />
     <LinearProgress color="success" /> */}
    </Stack>
  );
}
