import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/FriendList/FriendList.module.css';

const isOnline = status => {
  let color;
  status
    ? (color = { backgroundColor: 'green' })
    : (color = { backgroundColor: 'red' });

  return (
    <span
      className={style.status}
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
    <ul className={style['friend-list']}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          {isOnline(friend.isOnline)}
          <img src={friend.avatar} alt="" className={style.avatar} />
          <p className={style.name}>{friend.name}</p>
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
