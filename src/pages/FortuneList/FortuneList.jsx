import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const FortuneList = ({ fortunes, user, profile }) => {
  const [myFortunes, setMyFortunes] = useState(null)

  useEffect(() => {
    setMyFortunes(fortunes.filter(fortune => fortune.owner?._id === user.profile))

  }, [fortunes])
  if (!myFortunes) return "Loading"

  return (
    <main className="fortuneList">
      <>
        <h1>Thank you for creating these positive fortunes!</h1>
        <h2>These fortunes are being sent to the random fortune generator. These messages will be delivered to the person who is meant to see them</h2>
        <h4>Click on a fortune to edit or delete</h4>
        <div className="fortuneListContainer">
          {myFortunes ?
            <>
              <>
          <div className="fortuneListTwo">
        <img src="/icons/Food.png" alt="" />
          </div>
                <div className="fortuneListOne">
                {myFortunes.map((fortune) => (
                  <div key={fortune._id} className="fortuneListOne">
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