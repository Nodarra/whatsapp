import { Avatar } from '@material-ui/core'
import React from 'react'
import '../Styles/SidebarChat.css'

function SidebarChat() {
  return (
    <div className="sidebar-chat">
      <Avatar />
      <div className="info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
