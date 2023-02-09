import styles from './Loading.module.css'
import LogoIcon from '../../assets/icons/Logo.png'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LogoIcon} alt='cosmos decorated hand' />
    </main>
  )
}

export default Loading