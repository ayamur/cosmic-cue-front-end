import { useState, useEffect } from "react"

const RandomFortune = (props) => {
  const [randomFortune, setRandomFortune] = useState({ message: " ", luckyNumber: " " })

  const getRandomInt = (max) => {
    const randomNum = Math.floor(Math.random() * max)
    setRandomFortune(props.fortunes[randomNum])
  }

  return (
    <>
      <main>
        <div className="randomFortune">
          <img src="https://i.imgur.com/k4iOvKo.png" alt="logo" />
          <h1>Need a clue?</h1>
          <h2>Get a Cosmic Cue!</h2>
          <h4>Your message from the universe is:</h4>
          <h4>{randomFortune?.message?.toUpperCase()}</h4>
          <h4>Your lucky number is: {randomFortune?.luckyNumber}</h4>
          <button onClick={() => getRandomInt(props.fortunes.length)}>Button</button>
        </div>
      </main>
    </>
  )

}

export default RandomFortune