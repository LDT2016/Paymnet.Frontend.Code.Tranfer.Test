import CHeader from '../CHeader';
import Footer from '../Footer';
import Grid from '../Grid';
import React from 'react';
import Vaccine from '../Vaccine';
import styles from './CMain.module.scss';
import useSetup from '../useSetup';

const CMain = () => {
  useSetup();

  return (
    <>
      <div className={styles['main']}>
        <CHeader />
        <div className={styles['body']}>
          <Grid>
            <>
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
            </>
          </Grid>
          <Grid>
            <>
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
              <Vaccine />
            </>
          </Grid>
        </div>
        <Footer text={'请留意屏幕信息，保持安静，有序留观！'} />
      </div>
    </>
  );
};

export default CMain;
