const GuessButton = ({ onClick, selectedMovie, guessOutcome }) => {

    const isIncorrectGuess = guessOutcome === false && selectedMovie;

    // Determine the button styles based on conditions
    const buttonStyle = !selectedMovie
        ? 'bg-gray-700'
        : isIncorrectGuess
        ? 'bg-red-700'
        : 'bg-[#00bf63]';

    // "Wrong Guess!", red, and disabled if the guess was wrong
    // Disabled if no movie is selected
    // If guessOutcome is false and selectedMovie does not equal previousGuess

    const incorrectGuess = () => {
        if (guessOutcome === false && selectedMovie !== previousGuess) {
            return true;
        }

        return false
    }

    return <button 
        onClick={onClick} 
        className={`${buttonStyle} text-white p-2 rounded-md w-full mt-4`}
        disabled={!selectedMovie}
        >
            {!selectedMovie ? 'Select a Movie' : 'Guess!'}
       </button>
}

export default GuessButton;