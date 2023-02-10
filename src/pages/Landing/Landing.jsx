import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main>
      <div className="landing">
      <img src="/Logo.png" alt="" />
      <h1>Welcome to Cosmic Cue, {user ? user.name : 'friend'}</h1>


      </div>
    </main>
  )
}

export default Landing
