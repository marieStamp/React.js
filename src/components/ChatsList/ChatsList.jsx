import React from 'react'
import "./chatsList.scss"
import { NavLink } from "react-router-dom"


const chatsList = [
  {
    name: 'Work',
    id: 0
  },
  {
    name: 'Crazy friends',
    id: 1
  },
  {
    name: 'Lovely family',
    id: 2
  }
]
export const ChatsList = () => {
    return (
      <main>
        <h3>Chats list</h3>
        <ul className="chatsList">
        {chatsList.map((chat) => (
          <>
            <li>
              <NavLink className="eachChat"
                style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
                to={`/chats/${chat.id}`}
              >
                {chat.name}
              </NavLink>
            </li>
          </>
        ))}
      </ul>
      </main>
    )
  }