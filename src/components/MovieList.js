import Movie from "./Movie";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://movie-list-f6525-default-rtdb.firebaseio.com/listMovies.json",
      {}
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const tempMovies = {
            id: key,
            ...data[key],
          };
        }

        setIsLoading(false);
        setMovies(data);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="m-5">
      {movies.map((movie) => {
        return (
          <li key={movie.imdbID}>
            <Movie info={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
