import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewMovies from "./components/Pages/ViewMovies";
import Search from "./components/Pages/Search";
import MovieViewInfo from "./components/Movie Info/MovieViewInfo";
import InfoMoviesContextProvider from "./context/InfoMoviesContext";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import ListMovies from "./components/Pages/ListMovies";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InfoMoviesContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/:movies" element={<ViewMovies />} />
            <Route path="/Buscar" element={<Search />} />
            <Route path="/InfoMovie/:id" element={<MovieViewInfo />} />
            <Route path="/Lista" element={<ListMovies />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </InfoMoviesContextProvider>
    </ThemeProvider>
  );
}

export default App;
