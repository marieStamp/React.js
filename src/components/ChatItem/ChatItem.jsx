import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";
import "./chatItem.scss";

export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteChat(chat.id));
  };

  return (
    <>
      <ListItem className="listItem">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to={`/chats/${chat.id}`}
        >
          {chat.name}
        </NavLink>
      </ListItem>
      <button className="dlt_button" onClick={handleDeleteClick}>
        delete
      </button>
    </>
  );
};
