import React, { useState, useEffect, useRef } from 'react';
import {v4 as uuidv4} from 'uuid'
import { AUTHORS } from '../../utils/constants'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField';

export const Form = ({ onSend }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  let myId = uuidv4()

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({
      author: AUTHORS.User,
      text: value,
      id: myId
    })
    inputRef.current?.focus();
    setValue('');
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <TextField className="textField" id="outlined-basic" label='Your message' variant="outlined" value={value} onChange={handleChange} inputRef={inputRef}/>
      <Button className="btnSubmit" variant="contained" type="submit" sx={{color: 'lightblue', m: 1}} endIcon={<SendIcon />}>
  Send
</Button>
    </form>
  )
}