import { useState } from "react"

const RandomSign = (props) => {
  const [displaySign, setDisplaySign] = useState({ adjective: "", noun: "" });
  const [randomSign, setRandomSign] = useState({});
  
  const getRandomInt = (max) => {
    const randomNum = Math.floor(Math.random() * max);
    setRandomSign(props.signs[randomNum]);
    setDisplaySign(true);
  };
  
  return (
    <>
    <div className="randomSign">
      <h1>Click the button to get a random sign from the universe🌌</h1>
      {displaySign && <h1>{randomSign?.adjective} - {randomSign?.noun}</h1>}
      <button onClick={() => getRandomInt(props.signs.length)}>Get random sign</button>
    </div>
    </>
  )

}

export default RandomSign