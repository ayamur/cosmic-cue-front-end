import styles from './FortuneList.module.css'
import { useEffect, useState } from 'react'
import FortuneDetails from '../FortuneDetails/FortuneDetails'
import { Link } from 'react-router-dom'

const FortuneList = ({ fortunes, user }) => {
  const [myFortunes, setMyFortunes] = useState(null)
  console.log(fortunes)

  useEffect(() => {
    setMyFortunes(fortunes.filter(fortune => fortune.owner._id === user.profile))

  }, [fortunes])

  return (
    <main className={styles.container}>
      <>
        {myFortunes ?
        <ul>
          <h1>All i do is win</h1>
          <>
            {myFortunes.map((fortune) => (
              <li key={fortune._id}>


                <Link to={`/fortunes/${fortune._id}`} fortune={fortune}>
                <h4>{fortune.message}</h4>            
                </Link>             
              </li>
            ))}
          </>
            </ul>
          :
          <>
            <div>Loading ...</div>
          </>
        }
      </>
      Thank you for viewing your "Fortune List"
    </main>
  )
}

export default FortuneList