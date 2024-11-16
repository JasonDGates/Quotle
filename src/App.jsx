import MenuIcon from "@mui/icons-material/Menu";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useState } from "react";
import MovieSearch from "./components/MovieSearch.jsx";
import HeroSection from "./components/HeroSection.jsx";
export default function App() {
  const [quotesToShow, setQuotesToShow] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dummyData = [
    {
      id: 1,
      title: "Monty Python and the Holy Grail",
      quote1: "A moose once bit my sister",
      quote2: "Its just a flesh wound!",
      quote3: "We are the knights who say Ni!",
      quote4: "What is the air speed velocity of an uladen swallow?",
      quote5: "Run away!",
      quote6:
        "Your mother was a hamster and your father smelt of elderberries!",
    },
  ];
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
          <div>Quote 1: {quotesToShow > 0 && dummyData[0].quote1}</div>
          <div>Quote 2: {quotesToShow > 1 && dummyData[0].quote2}</div>
          <div>Quote 3: {quotesToShow > 2 && dummyData[0].quote3}</div>
          <div>Quote 4: {quotesToShow > 3 && dummyData[0].quote4}</div>
          <div>Quote 5: {quotesToShow > 4 && dummyData[0].quote5}</div>
          <div>Quote 6: {quotesToShow > 5 && dummyData[0].quote6}</div>
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
