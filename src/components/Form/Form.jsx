import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export const Form = ({ onSend }) => {
  const [value, setValue] = useState('');
  let myId = uuidv4()

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({
      author: 'User',
      text: value,
      id: myId
    })
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="textField" type="text" value={value} onChange={handleChange} />
      <input className="submitBtn" type="submit" />
    </form>
  )
}