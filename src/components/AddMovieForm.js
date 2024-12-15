import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import "./AddMovieForm.js"; // Link to the CSS file

const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && year && image) {
      addMovie({ title, genre, year: parseInt(year), image });
      setTitle("");
      setGenre("");
      setYear("");
      setImage("");
      setShowForm(false); // Close the form after submission
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={() => setShowForm(true)}>
        Add Movie
      </button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Movie</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
              <input
                type="number"
                placeholder="Release Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <input
                type="text"
                placeholder="Image URL (Online)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <div className="form-buttons">
                <button type="submit" className="submit-btn">
                  Add Movie
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMovieForm;
