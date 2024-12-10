import MenuIcon from "@mui/icons-material/Menu";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useEffect, useState } from "react";
import MovieSearch from "./components/MovieSearch.jsx";
import HeroSection from "./components/HeroSection.jsx";
import QuoteBar from "./components/QuoteBar.jsx";
import WinnerModal from "./components/WinnerModal.jsx";

export default function App() {
  const [quotesToShow, setQuotesToShow] = useState(-1);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const todaysDate = () => {
    const now = new Date();
    const dateOptions = {month: '2-digit', day: '2-digit', year: 'numeric'}
    return new Intl.DateTimeFormat('en-US', dateOptions).format(now)
  }
  const gameData = JSON.parse(localStorage.getItem(todaysDate()))

  const handleQuoteBarOnClick = (index) => {
    console.log(quotesToShow)
    if (index === quotesToShow + 1) {
      localStorage.setItem(todaysDate(), JSON.stringify({numberOfQuotes: index, correctGuess: false, numberOfGuesses: 0}))
      setQuotesToShow(index);
    }
  }

  useEffect(() => {
    if (!gameData) {
      localStorage.setItem(todaysDate(), JSON.stringify({numberOfQuotes: -1, correctGuess: false, numberOfGuesses: 0}))
    } else {
      localStorage.setItem(todaysDate(), JSON.stringify(gameData));
      setQuotesToShow(gameData.numberOfQuotes)
    }
  }, [])

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
      <div id="game-container" className="flex flex-col items-center w-full max-w-[600px] p-4">
        <HeroSection />
        <div id="quote-section" className="p-4 w-full max-w-[600px] flex flex-col">
          {dummyData.quotes.map((quote, index) => (
            <QuoteBar key={quote.id} text={quote} isExpanded={quotesToShow >= index} onClick={() => handleQuoteBarOnClick(index)}/>
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
