import React from 'react';
import styles from './SubTitle.module.scss';

const SubTitle = () => {
  return (
    <>
      <div className={styles['subtitle']}>
        <div className={styles['border']} />
        <div className={styles['lines']}>
          <div className={styles['line0']}>Line0 Line0 Line0</div>
          <div className={styles['line1']}>Line1 Line1 Line1</div>
          <div className={styles['line2']}>Line2 Line2 Line2</div>
        </div>
      </div>
    </>
  );
};

export default SubTitle;
