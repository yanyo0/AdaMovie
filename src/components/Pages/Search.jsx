import { Box, Container, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { apiKey } from "../../utils/Variables";
import CardInfo from "../Cards/CardInfo";
import axios from "axios";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [infoSearch, setInfoSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&languaje=es-ES&query=${searchValue}&page=1`
        );
        const { results } = data;
        setInfoSearch(results);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, [searchValue]);

  const searchMovie = (movie) => {
    setSearchValue(movie);
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "90vh",
        width: 1,
        p: 0,
        mt: "64px",
        p: 2,
        bgcolor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.light",
          width: "100%",
          p: 2,
          display: "flex",
          alignItems: "center",
          mt: 5,
          borderRadius: "10px",
        }}
      >
        <TextField
          onChange={(e) => searchMovie(e.target.value)}
          fullWidth
          label="BUSCAR"
          variant="outlined"
          id="fullWidth"
          sx={{ color: "primary", borderRadius: "10px" }}
        />
      </Box>

      <Box
        sx={{
          p: 2,
          bgcolor: "secondary.main",
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {infoSearch &&
          infoSearch.map((movie) => (
            <CardInfo
              key={movie.id}
              title={movie.title}
              id={movie.id}
              img={movie.poster_path}
              vote={movie.vote_average}
            />
          ))}
      </Box>
    </Container>
  );
}
