import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";

export default function App() {
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
    <div
      id="main-container"
      className="flex flex-col border-8 h-screen max-w-[480px]"
    >
      <div id="header" className="flex items-center space-x-2 p-4 h-[100px]">
        <MenuIcon />
        <span className="text-3xl font-bold">Quotle</span>
      </div>
      <div id="movie-information" className="flex justify-between p-4">
        <span>Year: </span>
        <span>Rating: </span>
      </div>
      <div id="quote-section" className="p-4">
        <div>Quote 1: </div>
        <div>Quote 2: </div>
        <div>Quote 3: </div>
        <div>Quote 4: </div>
        <div>Quote 5: </div>
        <div>Quote 6: </div>
      </div>
      <div id="search-box" className="p-4">
        <TextField fullWidth label="Search" />
      </div>
    </div>
  );
}
