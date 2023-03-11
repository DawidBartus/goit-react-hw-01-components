import React from 'react';
import style from 'components/style/Profile.css';

const statslist = stats => {
  const { followers, views, likes } = stats;
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};

const Profile = ({ data }) => {
  const { username, tag, location, avatar, stats } = data;

  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          style={{
            width: 100,
            height: 'auto',
            borderRadius: '50%',
          }}
        />
        <p className="name">{username}</p>
        <p className="tag">{'@' + tag}</p>
        <p className="location">{location}</p>
      </div>
      {statslist(stats)}
    </div>
  );
};

export default Profile;
