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
      <main>
        <div className="randomSign">
          <img src="https://i.imgur.com/6E6zQUh.png" alt="" />
          <h1>Click the button to get a sign from the universe</h1>
          <h4>The sign you are looking for is a:</h4>
          {displaySign && <h1>{randomSign?.adjective} - {randomSign?.noun}</h1>}
          <button onClick={() => getRandomInt(props.signs.length)}>I WANT A SIGN</button>
        </div>
      </main>
    </>
  )

}

export default RandomSign