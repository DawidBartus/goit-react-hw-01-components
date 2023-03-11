import React from 'react';
import 'components/style/FriendList.css';

const isOnline = status => {
  let color;
  status
    ? (color = { backgroundColor: 'green' })
    : (color = { backgroundColor: 'red' });

  return (
    <span
      className="status"
      style={{
        ...color,
        display: 'flex',
        margin: '0px 20px',
        width: 15,
        height: 15,
        borderRadius: '50%',
      }}
    ></span>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          {isOnline(friend.isOnline)}
          <img src={friend.avatar} alt="" className="avatar" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
