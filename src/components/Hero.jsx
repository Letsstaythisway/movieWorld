import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList, handleOnDeleteMovie }) => {
  const [displayList, setDisplayList] = useState([
    {
      Title: "Z",
      Year: "1969",
      Rated: "M/PG",
      Released: "08 Dec 1969",
      Runtime: "127 min",
      Genre: "Crime, Drama, Thriller",
      Director: "Costa-Gavras",
      Writer: "Vassilis Vassilikos, Jorge Semprún, Costa-Gavras",
      Actors: "Yves Montand, Irene Papas, Jean-Louis Trintignant",
      Plot: "The public murder of a prominent politician and doctor amid a violent demonstration is covered up by military and government officials. A tenacious magistrate is determined not to let them get away with it.",
      Language: "French, Russian, English",
      Country: "France, Algeria",
      Awards: "Won 2 Oscars. 12 wins & 13 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDRkZGI0YTctNWRiNy00MTFhLWE2NTQtM2Y3YTY0MTM0MGE0XkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "8.1/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "94%",
        },
        {
          Source: "Metacritic",
          Value: "86/100",
        },
      ],
      Metascore: "86",
      imdbRating: "8.1",
      imdbVotes: "32,032",
      imdbID: "tt0065234",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$83,305",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      mood: "action",
    },
    {
      Title: "App",
      Year: "2013",
      Rated: "Not Rated",
      Released: "09 May 2014",
      Runtime: "75 min",
      Genre: "Sci-Fi, Thriller",
      Director: "Bobby Boermans",
      Writer: "Robert A. Jansen",
      Actors: "Hannah Hoekstra, Isis Cabolet, Robert de Hoog",
      Plot: "A young psychology student is drawn into the dark and fearful world of a diabolic and mysterious App that starts to terrorize her, distributing compromising photographs, videos and text messages about herself and delves deeper and...",
      Language: "Dutch",
      Country: "Netherlands",
      Awards: "2 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxMzc4NTEyN15BMl5BanBnXkFtZTgwNDgyMjA3MTE@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "5.4/10",
        },
      ],
      Metascore: "N/A",
      imdbRating: "5.4",
      imdbVotes: "2,791",
      imdbID: "tt2536436",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      mood: "dram",
    },
  ]);

  useEffect(() => {}, []);

  const handleOnFilter = (mood) => {};

  return (
    <div className="container mt-5 ">
      <div className="bg-dark p-3 rounded">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => handleOnFilter("all")}
                type="button"
                className="btn btn-primary"
              >
                All
              </button>
              <button
                onClick={() => handleOnFilter("dram")}
                type="button"
                className="btn btn-warning"
              >
                Drama
              </button>
              <button
                onClick={() => handleOnFilter("action")}
                type="button"
                className="btn btn-info"
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-light">
              {displayList.length} movies listed
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md  ">
            <div className="d-flex justify-content-around gap-2 flex-wrap">
              {displayList.map((item, i) => (
                <div className="" key={i}>
                  <MovieCard
                    searchedMovie={item}
                    deleteFunc={handleOnDeleteMovie}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
