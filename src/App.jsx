import MenuIcon from "@mui/icons-material/Menu";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useState } from "react";
import MovieSearch from "./components/MovieSearch.jsx";
import HeroSection from "./components/HeroSection.jsx";
import QuoteBar from "./components/QuoteBar.jsx";
import WinnerModal from "./components/WinnerModal.jsx";

export default function App() {
  const [quotesToShow, setQuotesToShow] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dummyData = {
    id: "tt0071853",
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
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const handleWinnerModal = () => {
    setShowWinnerModal(true);
  }
  return (
    // Main container
    <div
      id="main-container"
      className="h-screen w-screen bg-[#292929] flex flex-col items-center"
    >
      {/* Header */}
      <div id="header" className="flex p-4 justify-between text-white w-full">
        <EqualizerIcon fontSize="large"/>
        <MenuIcon fontSize="large"/>
      </div>
      <div id="game-container" className="flex flex-col items-center w-full max-w-[600px]">
        <HeroSection />
        <div id="quote-section" className="p-4 w-full max-w-[600px] flex flex-col">
          {dummyData.quotes.map((quote) => (
            <QuoteBar key={quote.id} text={quote} />
          ))}
          <MovieSearch 
            onMovieSelect={(movie) => {
              setSelectedMovie(movie);
              // Add any other logic you need when a movie is selected
            }} 
          />
        <button 
          onClick={() => selectedMovie.imdbID === dummyData.id && handleWinnerModal()} 
          className="bg-[#00bf63] text-white p-2 rounded-md w-full mt-4"
        >Guess</button>
        </div>
        {showWinnerModal && <WinnerModal onClose={() => setShowWinnerModal(false)} />}
      </div>
    </div>
  );
}
