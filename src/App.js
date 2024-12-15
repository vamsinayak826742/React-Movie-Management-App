import React, { useState } from "react";
import { MovieProvider } from "./context/MovieContext";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import "./styles.css";

function App() {
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  // Toggle Add Movie Form visibility
  const toggleAddMovieForm = () => {
    setShowAddMovieForm(!showAddMovieForm);
  };

  return (
    <MovieProvider>
      <h1><center>Movie Management app</center></h1>
      <center><AddMovieForm/></center>  
      <MovieList />
          
    </MovieProvider>
  );
}

export default App;
