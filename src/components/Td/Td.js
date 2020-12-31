import React from 'react';
import styles from './Td.module.scss';

const Td = ({ children }) => {
  return (
    <>
      <div className={styles['td']}>{children}</div>
    </>
  );
};
export default Td;
