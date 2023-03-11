import React from 'react';
import PropTypes from 'prop-types';
import 'components/FriendList/FriendList.css';

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
