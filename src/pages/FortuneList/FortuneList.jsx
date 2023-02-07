import styles from './FortuneList.module.css'
import { useEffect , useState } from 'react'

const FortuneList = ({ fortunes, user, profile }) => {
  console.log(fortunes, 'fortunes')
  const [myFortunes, setMyFortunes] = useState([])
  
  useEffect (() => {
    setMyFortunes(fortunes.filter(fortune => fortune.owner._id === user.profile))

  }, [fortunes])

    return (
      <main className={styles.container}>
        <>
        {myFortunes ?
          <>
            {myFortunes.map((fortune) => {
              
              return (
                <>
                  <div key={fortune._id}>
                    <h3 >Your Fortune: {fortune.message}</h3>
                    <h4>Lucky Number: {fortune.luckyNumber}</h4>
                    <h5>Category Chosen: {fortune.category}</h5>
                  </div>
                </>
              )
            })}
            </>
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