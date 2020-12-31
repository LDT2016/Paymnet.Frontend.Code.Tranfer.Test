import React from 'react';
import styles from './Footer.module.scss';

const Footer = (props) => {
  const { text } = props;
  return (
    <>
      <div className={styles['footer']}>{text}</div>
    </>
  );
};

export default Footer;
