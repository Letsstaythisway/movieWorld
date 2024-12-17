import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display.jsx";
import Hero from "./components/Hero.jsx";
import {
  accessFromLocalSession,
  storeInLocalSession,
} from "./utils/localStorage";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {}, []);

  const addMovieToList = (movie) => {
    const tempMv = movieList.filter((item) => item.imdbId !== movie.imbdID);

    setMovieList([...tempMv, movie]);
    storeInLocalSession([...tempMv, movie]);
  };

  const handleOnDeleteMovie = (imdbId) => {
    const tempMv = movieList.filter((mv) => mv.imdbID !== imdbId);

    confirm("Are you sure, you want to delete this movie?") &&
      setMovieList(tempMv) &&
      storeInLocalSession(tempMv);
  };

  return (
    <div className="wrapper">
      <Hero addMovieToList={addMovieToList} />
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
    </div>
  );
}

export default App;
