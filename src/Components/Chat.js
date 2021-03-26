import React from 'react'
import '../Styles/Chat.css'
import { Avatar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Send, Mic } from '@material-ui/icons';

function Chat() {
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
        <p className="chat-message">
          <span className="chat-name">Nodarra</span>
          This is a message
          <span className="timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat-message chat-sent">
          <span className="chat-name">Nodarra</span>
          This is a message
          <span className="timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat-input">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input 
            placeholder="Type a message"
            type="text"
          />
          <IconButton type="submit">
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
