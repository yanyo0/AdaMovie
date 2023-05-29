import React from "react";
import { urlImg } from "../../utils/Variables";
import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ array }) {
  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      cols={array.length}
      gap={10}
    >
      {array &&
        array.map((item) => (
          <Link to={`/InfoMovie/${item.id}`} key={item.id}>
            <ImageListItem cols={1} rows={1}>
              <img
                src={`${urlImg}${item.poster_path}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Link>
        ))}
    </ImageList>
  );
}
