import Body from '../Body';
import Footer from '../Footer';
import Header from '../Header';
import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <div className={styles['main']}>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default Main;
