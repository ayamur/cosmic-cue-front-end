// import styles from './FortuneList.module.css'
import { useEffect, useState } from 'react'
// import FortuneDetails from '../FortuneDetails/FortuneDetails'
import { Link } from 'react-router-dom'

const FortuneList = ({ fortunes, user , profile}) => {
  const [myFortunes, setMyFortunes] = useState(null)
  console.log(fortunes)

  useEffect(() => {
    setMyFortunes(fortunes.filter(fortune => fortune.owner._id === user.profile))

  }, [fortunes])

  return (
    <main className="fortuneListContainer">
      <h1>Thank you for creating positive fortunes!</h1>
      <>
        {myFortunes ?
        <ul>
          <>
            {myFortunes.map((fortune) => (
              <div key={fortune._id} className="fortuneListOne">
                <Link to={`/fortunes/${fortune._id}`} fortune={fortune} profile={profile}>
                <h4> ✨ {fortune.message}</h4>            
                </Link>             
              </div>
            ))}
          </>
            </ul>
          :
          <>
            <div>Loading ...</div>
          </>
        }
      </>
      <div className="fortuneListTwo">
      <img src="/honeymoon.png" alt="cresent moon icon" />
      </div>
    </main>
  )
}

export default FortuneList