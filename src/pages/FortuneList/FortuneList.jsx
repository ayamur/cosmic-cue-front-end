import styles from './FortuneList.module.css'

const FortuneList = (props) => {
  console.log('FortuneList props:', props)
  return (
    <main className={styles.container}>
      {props.fortunes.map((fortune) => (
        <p key={fortune._id}>
          {fortune.message}
        </p>
      ))}
      Fortune List
    </main>
  )
}

export default FortuneList