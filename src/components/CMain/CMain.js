import CHeader from '../CHeader';
import Footer from '../Footer';
import React from 'react';
import Right from '../Right';
import Top from '../Top';
import styles from './CMain.module.scss';
import useSetup from '../useSetup';

const CMain = () => {
  useSetup();
  const Td = ({ children }) => {
    return <div className={styles['td']}>{children}</div>;
  };
  const Tr = ({ children }) => {
    return <div className={styles['tr']}>{children}</div>;
  };
  const Grid = () => {
    return (
      <div className={styles['grid']}>
        <Top
          text={
            <Tr>
              <Td>{'排队号码'}</Td>
              <Td>{'接种时间'}</Td>
              <Td>{'到点时间'}</Td>
              <Td>{'剩余时间'}</Td>
            </Tr>
          }
        ></Top>
      </div>
    );
  };

  return (
    <>
      <div className={styles['main']}>
        <CHeader />
        <div className={styles['body']}>
          <Grid />
          <Grid />
        </div>
        <Footer text={'请留意屏幕信息，保持安静，有序留观！'} />
      </div>
    </>
  );
};

export default CMain;
