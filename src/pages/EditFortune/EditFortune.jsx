import { useState } from 'react';
import { useLocation } from 'react-router-dom'

const EditFortune = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateFortune(form)

  }

  return (
    <main>
      <div className='editFortune'>
        <h1>Edit form</h1>
        <h4>Edit your fortune using this form. Click submit when you are finished.</h4>
        <img src='https://i.imgur.com/ZYdyAnf.png' alt='' />
      </div>
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
    </main>
  )
}

export default EditFortune