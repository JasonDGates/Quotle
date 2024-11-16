import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function MovieSearch({ onMovieSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debounced search function - waits 500ms after user stops typing before making API call
  useEffect(() => {
    const searchMovies = async () => {
      if (searchTerm.length < 3) {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=8abd923d&s=${searchTerm}&type=movie`
        );
        const data = await response.json();
        
        if (data.Search) {
          setSearchResults(data.Search.slice(0, 5));
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error searching movies:", error);
        setSearchResults([]);
      }
      setIsLoading(false);
    };

    const timeoutId = setTimeout(searchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleMovieSelect = (movie) => {
    setSearchTerm(movie.Title);
    setSearchResults([]);
    onMovieSelect?.(movie);
  };

  return (
    <div className="relative">
      <TextField 
        fullWidth 
        label="Search" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {searchResults.length > 0 && (
        <div className="absolute left-0 right-0 bg-white shadow-lg rounded-md mt-1 z-10">
          {searchResults.map((movie) => (
            <div 
              key={movie.imdbID}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleMovieSelect(movie)}
            >
              {movie.Title} ({movie.Year})
            </div>
          ))}
        </div>
      )}
      
      {isLoading && (
        <div className="absolute left-0 right-0 bg-white shadow-lg rounded-md mt-1 p-2">
          Loading...
        </div>
      )}
    </div>
  );
} 