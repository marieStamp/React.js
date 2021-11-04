import React from 'react'
import { useState } from 'react'

export const SayHello = ({message, handleClick}) => {
    const [theme, setTheme] = useState('blue');

      handleClick = () => {
        setTheme('red');
      }
    return (
    <div>
        <h3 className={theme === 'red' ? 'red': 'blue'}>{message}</h3>
        <button className="clickBtn" onClick={handleClick}>Change color</button>
    </div>
    ) 
}


