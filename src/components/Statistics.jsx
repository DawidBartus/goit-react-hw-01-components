import React from 'react';
import style from 'components/style/Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(stats => (
          <li className="item" key={stats.id}>
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
