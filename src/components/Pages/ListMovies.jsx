import React, { useContext } from "react";
import { InfoMoviesContext } from "../../context/InfoMoviesContext";
import { Container, Typography } from "@mui/material";
import CardInfo from "../Cards/CardInfo";

export default function ListMovies() {
  const { listMovies } = useContext(InfoMoviesContext);

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "90vh",
        width: 1,
        p: 2,
        pt: 10,
        pb: 5,
        bgcolor: "secondary.main",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {listMovies.length === 0 ? (
        <Typography sx={{ ml: 1 }} color={"primary"} variant="h6">
          No tiene películas agregadas
        </Typography>
      ) : (
        ""
      )}

      {listMovies &&
        listMovies.map((movie) => (
          <CardInfo
            key={movie.id}
            title={movie.title}
            id={movie.id}
            img={movie.poster_path}
            vote={movie.vote_average}
          />
        ))}
    </Container>
  );
}
