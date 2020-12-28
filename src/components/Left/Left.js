import React from 'react';
import styles from './Left.module.scss';

const Left = () => {
  return (
    <>
      <div className={styles['left']}>
        <div className={styles['label']}>{'员工信息'}</div>
        <div className={styles['photo']}>
          <img className={styles['photo-img']} alt='111' />
        </div>
        <div className={styles['name']}>{'刘正华'}</div>
        <div className={styles['number']}>{'100092'}</div>
      </div>
    </>
  );
};

export default Left;
