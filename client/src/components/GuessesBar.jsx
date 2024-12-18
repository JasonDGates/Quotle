import { useEffect, useState } from 'react';

const GuessesBar = ({ guessCount }) => {
  const [bars, setBars] = useState(Array(6).fill(false));

  useEffect(() => {
    // Update bars from right to left
    const newBars = Array(6).fill(false).map((_, index) => {
      return index >= 6 - guessCount;
    });
    setBars(newBars);
  }, [guessCount]);

  return (
    <div className="flex w-full gap-2 mb-2">
      {bars.map((isRed, index) => (
        <div
          key={index}
          className={`flex-1 h-3 rounded-lg transition-colors duration-500 ease-in-out
            ${isRed ? 'bg-red-500' : 'bg-green-500'}`}
        />
      ))}
    </div>
  );
};

export default GuessesBar;
