import React from 'react';
import styles from './Tr.module.scss';

const Tr = ({ children }) => {
  return (
    <>
      <div className={styles['tr']}>{children}</div>
    </>
  );
};

export default Tr;
