import MenuIcon from "@mui/icons-material/Menu";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useEffect, useState } from "react";
import MovieSearch from "./components/MovieSearch.jsx";
import HeroSection from "./components/HeroSection.jsx";
import QuoteBar from "./components/QuoteBar.jsx";
import WinnerModal from "./components/WinnerModal.jsx";
import getTodaysDate from "./helpers/getTodaysDate.js";
import setLocalStorage from "../src/helpers/setLocalStorage.js"

export default function App() {

  const todaysDate = () => getTodaysDate();

  const defaultData = {numberOfQuotes: -1, correctGuess: false, numberOfGuesses: 0}

  const gameData = JSON.parse(localStorage.getItem(todaysDate()))
  if (!gameData) {
    localStorage.setItem(todaysDate(), JSON.stringify(defaultData))
  } else {
    localStorage.setItem(todaysDate(), JSON.stringify(gameData));
  }
  const [quotesToShow, setQuotesToShow] = useState(gameData.numberOfGuesses);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const dummyData = {
    id: "tt0838283",
    title: "Step Brothers",
    quotes: [
      "Why are you so sweaty? I was watching cops.",
      "This house is a fucking prison! On Planet Bullshit! In the galaxy of this sucks camel dicks!",
      "That's cute. I remember by first beer.",
      "Did we just become best friends? YUP!",
      "Hey Derek you know what's good for shoulder pain? If you lick my butthole.",
      "Boats and Hoes!",
    ]
  }
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const handleQuoteBarOnClick = (index) => {
    console.log(quotesToShow)
    if (index === quotesToShow + 1) {
      setLocalStorage("numberOfQuotes", index, todaysDate());
      setQuotesToShow(index);
    }
  }

  useEffect(() => {
      setQuotesToShow(gameData.numberOfQuotes)
  }, [])

  const handleWinnerModal = () => {
    setShowWinnerModal(true);
  }

  const handleGuessMovie = () => {
    setNumberOfGuesses((prev) => prev + 1);
    setLocalStorage('numberOfGuesses', gameData.numberOfGuesses + 1, todaysDate());
    selectedMovie.imdbID === dummyData.id && handleWinnerModal()
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
      <div id="game-container" className="flex flex-col items-center w-full max-w-[600px] p-4">
        <HeroSection />
        <div id="quote-section" className="p-4 w-full max-w-[600px] flex flex-col">
          {dummyData.quotes.map((quote, index) => (
            <QuoteBar key={quote.id} text={quote} isExpanded={quotesToShow >= index} onClick={() => handleQuoteBarOnClick(index)}/>
          ))}
          <div className="text-white mt-6 mb-1">{6 - numberOfGuesses} more guesses....</div>
          <MovieSearch 
            onMovieSelect={(movie) => {
              setSelectedMovie(movie);
              // Add any other logic you need when a movie is selected
            }} 
          />
        <button 
          onClick={() => handleGuessMovie()} 
          className="bg-[#00bf63] text-white p-2 rounded-md w-full mt-4"
          disabled={!selectedMovie}
        >Guess</button>
        </div>
        {showWinnerModal && <WinnerModal onClose={() => setShowWinnerModal(false)} />}
      </div>
    </div>
  );
}
