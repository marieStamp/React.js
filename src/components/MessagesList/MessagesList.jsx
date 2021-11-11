import React from "react"

export const MessagesList = ({ messages }) => (
    <div className="messageWrap">
        { messages.map((message) => (
            <div className="message" key={ message.id }>
                <div className="message_author">{ message.author }</div>
                <div className="textWrap">
                <div className="message_text">{ message.text }</div>
                </div>
            </div>
        ))}
    </div>
)