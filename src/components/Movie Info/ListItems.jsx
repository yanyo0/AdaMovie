import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ListItems({ name, id }) {
  return (
    <ListItem key={id}>
      <ListItemText primary={`- ${name}`} sx={{ color: "primary.main" }} />
    </ListItem>
  );
}
