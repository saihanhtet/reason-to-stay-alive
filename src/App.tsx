import { useEffect, useState } from "react";
import "./App.css";
import { reasonsAlive } from "./assets/data";

function App() {
  const [current, setCurrent] = useState("");

  const capitalize = (text: string) => {
    let capitalizedText = text.toLowerCase();
    capitalizedText =
      capitalizedText.charAt(0).toUpperCase() + capitalizedText.slice(1);
    return capitalizedText;
  };

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * reasonsAlive.length);
    setCurrent(capitalize(reasonsAlive[randomIndex]));
  };

  useEffect(() => {
    generateRandomQuote();
  });
  return (
    <>
      <img className="bgimg" src="download.jpg" alt="Bg image" />
      <div className="container">
        <h3>Reason to Stay Alive</h3>
        <h1>{current}</h1>

        <button className="pushable" onClick={() => generateRandomQuote()}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Generate</span>
        </button>
      </div>
    </>
  );
}

export default App;
