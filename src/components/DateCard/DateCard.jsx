import styles from './DateCard.module.css'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  console.log("DATE!!!!!!!!", date)
  return (
    <div className={styles.container}>
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard