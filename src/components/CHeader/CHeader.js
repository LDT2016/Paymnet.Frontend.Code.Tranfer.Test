import Logo from '../Logo';
import React from 'react';
import Title from '../Title';
import styles from './CHeader.module.scss';

const CHeader = () => {
  return (
    <>
      <div className={styles['header']}>
        <Logo />
        <Title />
        <div className={styles['category']}>{'[新冠疫苗接种留观]'}</div>
      </div>
    </>
  );
};

export default CHeader;
