import Left from '../Left';
import React from 'react';
import Right from '../Right';
import styles from './Body.module.scss';

const Body = () => {
  return (
    <>
      <div className={styles['body']}>
        <Left />
        <Right />
      </div>
    </>
  );
};

export default Body;
