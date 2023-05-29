import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../../utils/Variables";
import { Box, Container } from "@mui/material";
import CardInfo from "../Cards/CardInfo";
import Paginations from "../Pagination/Paginations";
import Spinner from "../Spinner/Spinner";

export default function ViewMovies() {
  const [infoMovies, setInfoMovies] = useState([]);
  const [infoPage, setInfoPage] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const { movies } = useParams();

  useEffect(() => {
    const load = async () => {
      if (movies === "Lanzamientos") {
        try {
          const { data } = await axios(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&languaje=es-ES&page=${pages}`
          );
          const { results } = data;
          setInfoPage(data);
          setLoading(true);
          setInfoMovies(results);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const { data } = await axios(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&languaje=es-ES&page=${pages}`
          );
          const { results } = data;
          setInfoPage(data);
          setInfoMovies(results);
          setLoading(true);
        } catch (error) {
          console.log(error);
        }
      }
    };

    load();
  }, [pages, movies]);

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "90vh",
        width: 1,
        p: 0,
        pt: 7,
        pb: 5,
        p: 2,
        bgcolor: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {loading ? "" : <Spinner />}

      {infoMovies &&
        infoMovies.map((movie) => (
          <CardInfo
            key={movie.id}
            id={movie.id}
            title={movie.title}
            img={movie.poster_path}
            vote={movie.vote_average}
          />
        ))}

      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "center",
          mt: 4,
          bgcolor: "primary.main",
          p: 1,
        }}
      >
        <Paginations
          totalPag={infoPage.total_pages}
          pages={pages}
          setPages={setPages}
        />
      </Box>
    </Container>
  );
}
