import React from 'react'
import '../Styles/Sidebar.css'
import { IconButton, Avatar } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src='https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'/>
        <div className="header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      
      <div className="sidebar-search">
        <div className="search-container">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
