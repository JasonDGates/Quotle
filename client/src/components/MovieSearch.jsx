import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

export default function MovieSearch({ onMovieSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exactMatch, setExactMatch] = useState(false);

  // Debounced search function - waits 500ms after user stops typing before making API call
  useEffect(() => {
    const searchMovies = async () => {
      if (exactMatch || searchTerm.length < 3) {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=8abd923d&s=${searchTerm}&type=movie`
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
  }, [searchTerm, exactMatch]);

  const handleMovieSelect = (movie) => {
    setSearchTerm(movie.Title);
    setSearchResults([]);
    onMovieSelect?.(movie);
  };

  return (
    <div className="bg-[#d9d9d9] rounded-md w-full mt-4">
      <div className="relative">
        <TextField 
          fullWidth 
          autoComplete="off"
          label="" 
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setExactMatch(false);
          }}
        />
        
        {searchResults.length > 0 && (
          <div className="absolute w-full bg-white shadow-lg rounded-md mt-1 z-10 max-h-[calc(100vh-100px)] overflow-y-auto">
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
          <div className="absolute w-full bg-white shadow-lg rounded-md mt-1 p-2">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
} 