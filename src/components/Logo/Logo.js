import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <div className={styles['logo']}>
        <img className={styles['logo-img']} alt='' src='resources/logo.jpg' />
      </div>
    </>
  );
};

export default Logo;
