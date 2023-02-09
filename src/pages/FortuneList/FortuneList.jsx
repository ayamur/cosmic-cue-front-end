// import styles from './FortuneList.module.css'
import { useEffect, useState } from 'react'
// import FortuneDetails from '../FortuneDetails/FortuneDetails'
import { Link } from 'react-router-dom'

const FortuneList = ({ fortunes, user, profile }) => {
  const [myFortunes, setMyFortunes] = useState(null)
  console.log(fortunes)

  useEffect(() => {
    setMyFortunes(fortunes.filter(fortune => fortune.owner._id === user.profile))

  }, [fortunes])

  return (
    <main className="fortuneList">
      <>
        <h1>Thank you for creating these positive fortunes!</h1>
        <h2>These fortunes are being sent to the random fortune generator, and will be delivered to the person who is meant to read them.</h2>
        <div className="fortuneListContainer">
          {myFortunes ?
            <>
              <>
          <div className="fortuneListTwo">
            <img src="/honeymoon.png" alt="cresent moon icon" />
          </div>
                <div className="fortuneListOne">
                {myFortunes.map((fortune) => (
                  <div key={fortune._id} >
                    <Link to={`/fortunes/${fortune._id}`} fortune={fortune} profile={profile}>
                      <h4> ✨ {fortune.message}</h4>
                    </Link>
                  </div>
                ))}
                </div>
              </>
            </>
            :
            <>
              <div>Loading ...</div>
            </>
          }
        </div>
      </>
    </main>
  )
}

export default FortuneList