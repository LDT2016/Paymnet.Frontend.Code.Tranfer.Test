import Body from '../Body';
import Footer from '../Footer';
import Header from '../Header';
import React from 'react';
import styles from './Main.module.scss';
import useSetup from '../hooks/useSetup';

const Main = () => {
  useSetup();
  return (
    <>
      <div className={styles['main']}>
        <Header />
        <Body />
        <Footer text={'请留意语音提示及屏幕信息，保持安静，有序排队！'} />
      </div>
    </>
  );
};

export default Main;
