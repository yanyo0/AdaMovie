import React, { Modal, Card, CardMedia, Box, useContext } from "react";
import InfoMoviesContext from "../context/InfoMoviesContext";

export default function Modal() {
  const { trailerInfo, modal } = useContext(InfoMoviesContext);
  const { key } = trailerInfo;

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ width: 400 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            component="video"
            image={`https://youtu.be/${key}`}
            title="green iguana"
          />
        </Card>
      </Box>
    </Modal>
  );
}
