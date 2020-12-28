import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles['footer']}>
        {'请留意语音提示及屏幕信息，保持安静，有序排队！'}
      </div>
    </>
  );
};

export default Footer;
