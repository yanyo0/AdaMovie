import React, { useEffect, useState } from "react";
import { Button, Modal, Card, Box } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useParams } from "react-router-dom";
import { apiKey } from "../../utils/Variables";
import axios from "axios";
import ReactPlayer from "react-player";

export default function ButtonTrailer() {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [modal, setModal] = useState(false);
  const [trailerInfo, setTrailerInfo] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&languaje=es-ES`
        );
        const { results } = data;
        setVideo(results);
        filterinfoVideo();
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, [modal]);

  const filterinfoVideo = () =>
    setTrailerInfo(video.find((info) => info.site === "YouTube"));

  const handleClose = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        sx={{ ml: 4 }}
        onClick={() => handleClose()}
      >
        <PlayCircleFilledIcon sx={{ mr: 2 }} /> Ver Trailer
      </Button>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "90%" }}>
            <ReactPlayer
              width={"100%"}
              height={480}
              url={`https://youtu.be/${trailerInfo && trailerInfo.key}`}
            />
          </Card>
        </Box>
      </Modal>
    </>
  );
}
