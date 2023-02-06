import styles from './FortuneList.module.css'

const FortuneList = (props) => {
  return (
    <main className={styles.container}>
      {props.fortunes.map((fortune) => (
        <>
          <div key={fortune._id}>
            <h3>Your Fortune: {fortune.message}</h3>
            <h4>Lucky Number: {fortune.luckyNumber}</h4>
            <h5>Category Chosen: {fortune.category}</h5>
          </div>
        </>
      ))}
      Fortune List
    </main>
  )
}

export default FortuneList