# **Movie Management App**

## **Overview**
The Movie Management App is a user-friendly application designed to allow users to add, view, and manage a collection of movies. The application features a responsive interface, dynamic movie list rendering, and modal-based forms for adding new movies. The app demonstrates the use of React, Context API, and CSS for building modern, scalable web applications.

---

## **Features**
- **Dynamic Movie List:** View an interactive list of movies with images, titles, genres, and release years.
- **Add New Movies:** Add movie details such as title, genre, release year, and an image URL using a modal form.
- **Responsive Design:** Ensures the app is accessible and visually appealing on all device sizes.
- **State Management:** Utilizes React’s Context API for seamless data sharing across components.

---

## **Technologies Used**

### **Frontend**
- **React.js**: A JavaScript library for building dynamic user interfaces.
- **Context API**: A lightweight state management solution provided by React.
- **CSS**: Styling for responsiveness and improved user experience.

---

## **File Descriptions**

### **App.js**
- Serves as the root component.
- Wraps the application in the `MovieProvider` for state management.
- Renders the `MovieList` and `AddMovieForm` components.

### **AddMovieForm.js**
- Component for adding a new movie.
- Features:
  - Modal-based UI with input fields for title, genre, release year, and image URL.
  - Validation to ensure all fields are filled before submission.
  - Integration with `MovieContext` for adding movies to the shared state.

### **MovieList.js**
- Component for displaying the list of movies.
- Features:
  - Dynamically renders movie cards using data from `MovieContext`.
  - Includes a fallback message when no movies are available.
  - Shows movie details, including an image, title, genre, and release year.

### **MovieContext.js**
- Implements the Context API for state management.
- Provides a shared state (`movies`) and a method (`addMovie`) to add new movies.
- Includes a preloaded list of sample movies for demonstration purposes.

### **styles.css**
- Contains all styling for the application.
- Includes:
  - Responsive grid layout for the movie list.
  - Modal styles for the "Add Movie" form.
  - Hover effects and transitions for interactive elements.

---

## **How to Run the Project**

### **Prerequisites**
- Node.js and npm installed on your system.

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/movie-management-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-management-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## **Future Enhancements**
- **Search and Filter:** Add functionality to search and filter movies by genre or release year.
- **Database Integration:** Store movies persistently using a backend and a database like MongoDB.
- **Edit and Delete Movies:** Provide options to edit or remove movies from the list.

---

## **Contributions**
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.


