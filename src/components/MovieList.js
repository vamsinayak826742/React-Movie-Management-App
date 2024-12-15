import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies available. Add some movies!</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div key={index} className="movie-item">
             
                <img src={movie.image} alt={movie.title} className="movie-img" />
             
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.genre} ({movie.year})</p>
                <p className="movie-review">{movie.review}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
