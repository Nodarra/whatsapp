import React, { useState } from 'react'
import '../Styles/Chat.css'
import { Avatar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Send, Mic } from '@material-ui/icons';
import axios from './axios';

function Chat({ messages }) {
  const [input, setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "Dino Sisic",
      timestamp: "Just now",
      received: true
    })

    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-header-info">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        {messages.map((message) => (
          <p className={`chat-message ${message.received && "chat-sent"}`}>
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat-input">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <IconButton type="submit" onClick={sendMessage}>
            <Send />
          </IconButton>
          <IconButton >
            <Mic />
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Chat
