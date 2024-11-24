import React, { useState } from 'react';

const QuoteBar = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={` my-2
        w-full min-h-6 pl-2 pr-2 cursor-pointer rounded-xl
        ${isExpanded 
          ? 'bg-[#737373]' 
          : 'bg-[#0cc0df]'
        }
        transition-colors duration-300
      `}
    >
      <p className="text-white">{isExpanded && text}</p>
    </div>
  );
};

export default QuoteBar;
