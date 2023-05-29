import { useState, createContext, useEffect } from "react";


export const InfoMoviesContext = createContext();

const InfoMoviesContextProvider = ({ children }) => {
  const [listMovies, setListMovies] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("listMovies"))) {
      setListMovies(JSON.parse(localStorage.getItem("listMovies")));
    }
  }, []);

  const addMovie = async (movie) => {
    setListMovies([...listMovies, movie]);
    setTimeout(() =>
      localStorage.setItem("listMovies", JSON.stringify(listMovies), 5000)
    );
  };

  const removeMovie = async (idMovie) => {
    setListMovies(listMovies.filter((elem) => elem.id !== idMovie));
    localStorage.setItem("listMovies", JSON.stringify(listMovies));
  };

  const existMovie = (idMovie) => {
    let exist;
    exist = listMovies.filter((elem) => elem.id === idMovie);
    exist.length > 0 ? setStatus(true) : setStatus(false);
  };

  const data = {
    addMovie,
    listMovies,
    existMovie,
    status,
    removeMovie,
  };

  return (
    <InfoMoviesContext.Provider value={data}>
      {children}
    </InfoMoviesContext.Provider>
  );
};

export default InfoMoviesContextProvider;
