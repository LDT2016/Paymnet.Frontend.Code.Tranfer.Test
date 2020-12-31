import React from 'react';
import styles from './Top.module.scss';

const Top = (props) => {
  const { text } = props;
  return (
    <>
      <div className={styles['top']}>{text}</div>
    </>
  );
};

export default Top;
