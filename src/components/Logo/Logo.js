import React from 'react';
import styles from './Logo.module.scss';

const Logo = (props) => {
  const { icon } = props;
  return (
    <>
      <div className={styles['logo']}>
        <img className={styles['logo-img']} alt='' src={`resources/${icon}`} />
      </div>
    </>
  );
};

export default Logo;
