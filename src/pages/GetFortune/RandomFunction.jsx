import { useState, useEffect } from "react"

const RandomFortune = (props) => {
  
  const[randomFortune, setRandomFortune] =useState({})

  const getRandomInt = (max) => {
    const randomNum =  Math.floor(Math.random() * max)

    setRandomFortune(props.fortunes[randomNum])
  }
//dependant on props.length because it's changing
  useEffect(() => {
  getRandomInt(props.fortunes.length)
  }, [props.fortunes])
  



  return (
    <>
    <h1>Random Fortune</h1>
    <h1>{randomFortune?.message}</h1>
    <h1>{randomFortune?.luckyNumber}</h1>
    <button onClick={() => getRandomInt}></button>
    </>
  )

}

export default RandomFortune