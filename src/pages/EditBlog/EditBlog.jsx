import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditBlog.module.css'

const EditBlog = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Update this line shortly...
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Manifestation</h1>
        <label htmlFor="text-input">Update Manifestation Below:</label>
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

export default EditBlog