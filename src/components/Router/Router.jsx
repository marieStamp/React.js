import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatsList } from "../ChatsList/ChatsList";
import { Home } from "../Home/Home";
import { ConnectedProfile } from "../Profile/Profile";
import "./router.scss";
import { ConnectedChats } from "../Chats/Chats";
import { Food } from "../Food/Food";

export const Router = () => {
  return (
    <BrowserRouter>
      <ul className="links">
        <li className="mainLinks">
          <Link className="eachLink" to="/">
            Home
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/chats">
            Chats
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/profile">
            Profile
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/food">
            Breweries
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chats">
          <Route index element={<ChatsList />} />
          <Route path=":chatId" element={<ConnectedChats />} />
        </Route>
        <Route path="profile" element={<ConnectedProfile />} />
        <Route path="food" element={<Food />} />
        <Route path="*" element={<main>404 Not Found</main>} />
      </Routes>
    </BrowserRouter>
  );
};
