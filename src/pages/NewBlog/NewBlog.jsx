import { useState } from "react"
import styles from './NewBlog.module.css'

const NewBlog = (props) => {
  const [form, setForm] = useState({
    content: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddBlog(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content-input">Enter a Manifestation in the Box Below:</label>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.text}
          placeholder=""
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewBlog