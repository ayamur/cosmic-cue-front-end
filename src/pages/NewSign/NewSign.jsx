import { useState } from "react";
import styles from './NewSign.module.css'

const NewSign = (props) => {
  const [form, setForm] = useState({
    noun: '',
    adjective: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddSign(form)
  }

  return ( 
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noun-input">Noun</label>
        <input
          required
          type="text"
          name="noun"
          id="noun-input"
          value={form.noun}
          placeholder="Noun"
          onChange={handleChange}
        />
        <label htmlFor="adjective-input">Adjective</label>
				<textarea
          required
          type="text"
          name="adjective"
          id="Adjective-input"
          value={form.adjective}
          placeholder="Adjective"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>

  )
}

export default NewSign;