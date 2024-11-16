import MenuIcon from "@mui/icons-material/Menu";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useState } from "react";
import MovieSearch from "./components/MovieSearch.jsx";
import HeroSection from "./components/HeroSection.jsx";
import QuoteBar from "./components/QuoteBar.jsx";
export default function App() {
  const [quotesToShow, setQuotesToShow] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dummyData = {
    id: 1,
    title: "Monty Python and the Holy Grail",
    quotes: [
      "A moose once bit my sister",
      "Its just a flesh wound!",
      "We are the knights who say Ni!",
      "What is the air speed velocity of an uladen swallow?",
      "Run away!",
      "Your mother was a hamster and your father smelt of elderberries!",
    ]
  }
  return (
    // Main container
    <div
      id="main-container"
      className="h-screen w-screen"
    >
      {/* Header */}
      <div id="header" className="flex p-4 justify-between bg-[#494747] text-white">
        <EqualizerIcon />
        <MenuIcon />
      </div>
      <div id="game-container" className="flex flex-col bg-[#494747]">
        <HeroSection />
        <div id="quote-section" className="p-4">
          {dummyData.quotes.map((quote) => (
            <QuoteBar key={quote.id} text={quote} />
          ))}
        </div>
        <div id="search-box" className="p-4">
        <MovieSearch 
            onMovieSelect={(movie) => {
              setSelectedMovie(movie);
              // Add any other logic you need when a movie is selected
            }} 
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md">Guess</button>
      </div>
    </div>
  );
}
