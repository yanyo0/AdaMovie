import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import CarouselContentCard from "../Cards/CarouselContentCard";
import { Container, Typography } from "@mui/material";
import { apiKey } from "../../utils/Variables";
import Card from "../Cards/Card";
import Spinner from "../Spinner/Spinner";


export default function Home() {
  const [infoNowPlaying, setInfoNowPlaying] = useState([]);
  const [infoPopular, setInfoPopular] = useState([]);
  const [infotopRated, setInfotopRated] = useState([]);
  const [loading, setLoadindg] = useState(false);

  const getInfoToPaint = (array, init, final) => {
    let newArray = array.filter((item, i) => i >= init && i <= final);

    return <Card array={newArray} />;
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es-ES&page=1`
        );
        const { results } = data;
        setInfoNowPlaying(results);
      } catch (error) {
        console.log(error);
      }

      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`
        );
        const { results } = data;
        setInfoPopular(results);
        setLoadindg(true);
      } catch (error) {
        console.log(error);
      }

      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es-ES&page=1`
        );
        const { results } = data;
        setInfotopRated(results);
        setLoadindg(true);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "90vh",
        width: 1,
        p: 0,
        pt: 5,
        pb: 5,
        bgcolor: "secondary.main",
      }}
    >
      {loading ? "" : <Spinner />}

      <Carousel
        sx={{ width: "100%", mt: "65px" }}
        buttonWrapper={{ display: "none" }}
      >
        {infoNowPlaying &&
          infoNowPlaying.map((item, i) => (
            <CarouselContentCard
              key={i}
              img={item.poster_path}
              id={item.id}
              title={item.title}
              overview={item.overview}
            />
          ))}
      </Carousel>

      <Typography variant="h6" color="primary" sx={{ mt: 10, p:2}}>
        Peliculas Populares
      </Typography>

      {loading ? "" : <Spinner />}
      <Carousel
        sx={{ width: "100%", mt: 1 }}
        buttonWrapper={{ display: "none" }}
      >
        {infoPopular && getInfoToPaint(infoPopular, 0, 4)}

        {infoPopular && getInfoToPaint(infoPopular, 5, 9)}

        {infoPopular && getInfoToPaint(infoPopular, 10, 14)}

        {infoPopular && getInfoToPaint(infoPopular, 15, 19)}
      </Carousel>

      <Typography variant="h6" color="primary" sx={{ mt: 10, p:2 }}>
        Peliculas Mejor Puntuadas
      </Typography>

      {loading ? "" : <Spinner />}

      <Carousel
        sx={{ width: "100%", mt: 1 }}
        buttonWrapper={{ display: "none" }}
      >
        {infotopRated && getInfoToPaint(infotopRated, 0, 4)}

        {infotopRated && getInfoToPaint(infotopRated, 5, 9)}

        {infotopRated && getInfoToPaint(infotopRated, 10, 14)}

        {infotopRated && getInfoToPaint(infotopRated, 15, 19)}
      </Carousel>
    </Container>
  );
}
