import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Profile/Profile.module.css';

const statslist = stats => {
  const { followers, views, likes } = stats;
  return (
    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

const Profile = ({ data }) => {
  const { username, tag, location, avatar, stats } = data;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt="User avatar"
          style={{
            width: 100,
            height: 'auto',
            borderRadius: '50%',
          }}
        />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{'@' + tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      {statslist(stats)}
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;
