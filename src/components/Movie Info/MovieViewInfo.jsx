import { Box, Container, Typography, List } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { urlImg } from "../../utils/Variables";
import { useParams } from "react-router-dom";
import "./MovieViewInfo.css";
import ButtonTrailer from "../Buttons/ButtonTrailer";
import ListItems from "./ListItems";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ButtonList from "../Buttons/ButtonList";
import axios from "axios";
import { apiKey } from "../../utils/Variables";
import { InfoMoviesContext } from "../../context/InfoMoviesContext";

export default function MovieViewInfo() {
  const { id } = useParams();
  const { addMovie, existMovie, status, removeMovie } = useContext(InfoMoviesContext);
  const [infoMovie, setInfoMovie] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`
        );
        setInfoMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [id]);

  const {
    backdrop_path,
    title,
    release_date,
    poster_path,
    overview,
    genres,
    vote_average,
  } = infoMovie;

  return (
    <>
      <Container
        maxWidth="false"
        sx={{
          minHeight: "85vh",
          width: 1,
          mt: "64px",
          p: 2,
          mt: "68px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${urlImg}${backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 130%",
        }}
      >
        <Box
          className="bgColor"
          sx={{
            p: 2,
            width: "90%",
            minHeight: "70vh",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "80%", md: "50%" }, p: 1 }}>
            <img
              src={`${urlImg}${poster_path}`}
              alt={title}
              width={"80%"}
              height={"80%"}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "80%", md: "50%" },
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h4" color={"primary"}>
              {title}
            </Typography>

            <Typography
              variant="body1"
              color={"gray"}
              component="div"
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {release_date && release_date.slice(0, 4)}
              <Typography variant="h6" color={"primary"}>
                {vote_average} <StarBorderIcon color={"yellow"} />
              </Typography>
            </Typography>
            <Typography variant="body1" color={"primary"} sx={{ mt: 1 }}>
              {overview}
            </Typography>

            <Typography sx={{ mt: 1 }} color={"primary"} variant="h6">
              Genero
            </Typography>

            <List sx={{ width: "100%", maxWidth: 360 }}>
              {genres &&
                genres.map((elem) => (
                  <ListItems key={elem.id} id={elem.id} name={elem.name} />
                ))}
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "primary",
              }}
            >
              <ButtonList
                removeMovie={removeMovie}
                status={status}
                existMovie={existMovie}
                addMovie={addMovie}
                infoMovie={infoMovie}
              />

              <Typography sx={{ ml: 1 }} color={"primary"} variant="body1">
                {status ? "Eliminar de lista" : "Agregar a lista"}
              </Typography>
              <ButtonTrailer />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
