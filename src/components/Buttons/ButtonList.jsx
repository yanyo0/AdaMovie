import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { IconButton } from "@mui/material";

export default function ButtonList({
  addMovie,
  infoMovie,
  existMovie,
  status,
  removeMovie,
}) {
  existMovie(infoMovie.id);

  return (
    <IconButton
      onClick={() => {
        status ? removeMovie(infoMovie.id) : addMovie(infoMovie);
      }}
      color="primary"
      aria-label="add to list"
      size="small"
    >
      {status ? <PlaylistRemoveIcon /> : <PlaylistAddIcon />}
    </IconButton>
  );
}
