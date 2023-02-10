import { useState } from "react";
// import styles from './newFortune.module.css'

const NewFortune = (props) => {
  const [form, setForm] = useState({
    message: '',
    luckyNumber: '',
    category: 'Love',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddFortune(form)

  }

  return (
    <main>
      <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='message-input'>Message:</label>
        <input required
          type='text'
          name='message'
          id='message-input'
          value={form.message}
          placeholder='Message'
          onChange={handleChange}
        />
        <label htmlFor='luckyNumber-input'>Lucky Number:</label>
        <input required
          type='text'
          name='luckyNumber'
          id='luckyNumber-input'
          value={form.luckyNumber}
          placeholder='Lucky Number'
          onChange={handleChange}
        />
        <label htmlFor='category-input'>Category:</label>
        <select
          required
          name='category'
          id='category-input'
          value={form.category}
          onChange={handleChange}
        >
          <option value='Love'>Love</option>
          <option value='Work'>Work</option>
          <option value='Travel'>Travel</option>
          <option value='Food'>Food</option>
        </select>
        <button type='submit'>SUBMIT</button>
      </form>


      </div>
    </main>
  )
}

export default NewFortune