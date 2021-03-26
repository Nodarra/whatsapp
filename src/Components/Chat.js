import React from 'react'
import '../Styles/Chat.css'
import { Avatar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';

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
    </div>
  )
}

export default Chat
