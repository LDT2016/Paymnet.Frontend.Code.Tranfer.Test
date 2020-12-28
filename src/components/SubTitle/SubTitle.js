import React from 'react';
import styles from './SubTitle.module.scss';

const SubTitle = () => {
  return (
    <>
      <div className={styles['subtitle']}>
        <div className={styles['border']} />
        <div className={styles['lines']}>
          <div className={styles['line0']}>
            {'中文域名：威海市妇女儿童医院.公益'}
          </div>
          <div className={styles['line1']}>{'威海市立第二医院'}</div>
          <div className={styles['line2']}>
            {'青岛大学附属威海实例第二医院'}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTitle;
