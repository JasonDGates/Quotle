const GuessButton = ({ onClick, selectedMovie, guessOutcome }) => {

    // "Wrong Guess!", red, and disabled if the guess was wrong
    // Disabled if no movie is selected

return <button 
    onClick={onClick} 
    className={`${!selectedMovie ? 'bg-gray-700' : 'bg-[#00bf63]'} text-white p-2 rounded-md w-full mt-4`}
    disabled={!selectedMovie}
    >
        {!selectedMovie ? 'Select a Movie' : 'Guess!'}
    </button>
}

export default GuessButton;