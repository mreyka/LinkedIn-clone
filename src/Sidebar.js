import React from 'react'
import { Avatar } from "@material-ui/core";
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://source.unsplash.com/1600x900/?nature,water" alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">42.578</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">10.788</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
        {recentItem('reactjs')}
      </div>
    </div>
  )
}

export default Sidebar
