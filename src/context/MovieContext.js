import React, { createContext, useState } from "react";

// Create Context
export const MovieContext = createContext();

// MovieProvider Component
export const MovieProvider = ({ children }) => {
  // Initial movie list
  const initialMovies = [
    {
      title: "Kalki 2898 AD",
      genre: "Action",
      year: 2024,
      image: "https://i.pinimg.com/736x/6d/22/3f/6d223f50dfe4af0e0088c351ed1a4464.jpg"
    },
    {
      title: "Pushpa 2: The Rule",
      genre: "Drama",
      year: 2024,
      image: "https://4kwallpapers.com/images/wallpapers/pushpa-2-the-rule-2048x2048-17953.jpg"
    },
    {
      title: "Joe",
      genre: "Love",
      year: 2024,
      image: "https://i.pinimg.com/736x/a3/f0/d8/a3f0d8df3f8ec2d50735c1cf7797ecf1.jpg"
    },
    {
      title: "Sita Ramam",
      genre: "Love",
      year: 2022,
      image: "https://i.pinimg.com/originals/71/cd/a2/71cda21394f180cf10c12e3a5b833b01.jpg"
    },
    {
      title: "The Family Star",
      genre: "Drama",
      year: 2024,
      image :" https://images.filmibeat.com/img/popcorn/fan_images/movie/18371/family-star-photos-images-87407.jpg"
    },
    {
      title: "vikram",
      genre: "Action",
      year: 2024,
      image: "https://m.media-amazon.com/images/M/MV5BMjM4MThmMzEtN2VkYy00ZjdlLWJlMWUtNDY0NTUxMmM5YzRkXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Pushpa: The Rise",
      genre: "Drama",
      year: 2019,
      image: "https://images.filmibeat.com/img/popcorn/fan_images/movie/18075/pushpa-photos-images-75003.jpg"
    },
    {
      title: "Rangasthalam",
      genre: "Love",
      year: 2019,
      image: "https://m.media-amazon.com/images/M/MV5BOTJiZDU1Y2YtMDc1ZC00YTRkLThkNjUtY2NiMzMyZjBiMWE3XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Ala vaikunthapurramuloo",
      genre: "Love",
      year: 2022,
      image: "https://i.pinimg.com/originals/43/1b/8f/431b8f4ae38ba8a3710e363ccbba7b17.jpg"
    },
    {
      title: "Bahubali",
      genre: "Drama",
      year: 2018,
      image :" https://i.pinimg.com/1200x/8c/fc/38/8cfc38e0584517a074213ab3e38905d2.jpg"
    }
  ];

  const [movies, setMovies] = useState(initialMovies);

  // Add new movie to the list
  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
