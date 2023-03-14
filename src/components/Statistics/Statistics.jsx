import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style['statistics']}>
      <h2 className={style['title']}>{title}</h2>
      <ul className={style['stat-list']}>
        {stats.map(stats => (
          <li className={style['item']} key={stats.id}>
            <span className={style['label']}>{stats.label}</span>
            <span className={style['percentage']}>{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
