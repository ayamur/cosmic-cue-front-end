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
    <main>
      <div className="addSign">
        <h1>Create a Sign</h1>
      <h4>Enter an adjective and a noun in the form below. Your message will be sent to another user who has requested a sign from the universe!</h4>
        <img src="https://i.imgur.com/k4iOvKo.png" alt="" />
      </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="adjective-input">Adjective</label>
          <input
            required
            type="text"
            name="adjective"
            id="Adjective-input"
            value={form.adjective}
            placeholder="Adjective"
            onChange={handleChange}
          />
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
          <button type="submit">SUBMIT</button>
        </form>


    </main>

  )
}

export default NewSign;