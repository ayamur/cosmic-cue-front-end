import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <img src="/Logo.png" alt="" />
      <h1>Welcome to Cosmic Cue, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
