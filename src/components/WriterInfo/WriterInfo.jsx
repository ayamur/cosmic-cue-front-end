import styles from './WriterInfo.module.css'
import ProfileIcon from '../../assets/icons/profile.png'
import DateCard from '../DateCard/DateCard'

const WriterInfo = ({ content }) => {
  const photo = content.writer.photo ? content.writer.photo : ProfileIcon
  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h4>{content.writer.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default WriterInfo