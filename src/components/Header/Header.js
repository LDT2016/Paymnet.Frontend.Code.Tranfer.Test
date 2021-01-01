import CurrentTime from '../CurrentTime';
import Logo from '../Logo';
import React from 'react';
import SubTitle from '../SubTitle';
import Title from '../Title';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles['header']}>
        <Logo icon={'payment-logo.jpg'} />
        <Title />
        <SubTitle />
        <CurrentTime />
      </div>
    </>
  );
};

export default Header;
