import React from 'react';
import styles from '../CMain/CMain.module.scss';

const Td = ({ children }) => {
  return (
    <>
      <div className={styles['td']}>{children}</div>
    </>
  );
};
export default Td;
