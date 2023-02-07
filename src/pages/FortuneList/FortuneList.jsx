import styles from './FortuneList.module.css'

const FortuneList = ({ fortunes, user, id }) => {
  console.log(fortunes, 'fortunes')
  // if (user === id)

    return (
      <main className={styles.container}>
        <>
        {fortunes ?
          <>
            {fortunes.map((fortune) => {
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
        Fortune List
      </main>
    )
}

export default FortuneList