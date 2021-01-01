import CHeader from '../CHeader';
import Footer from '../Footer';
import Grid from '../Grid';
import LeavePrompt from '../LeavePrompt';
import React from 'react';
import Vaccine from '../Vaccine';
import { getQueueList } from '../selector';
import styles from './CMain.module.scss';
import { useSelector } from 'react-redux';
import useVaccineSetup from '../hooks/useVaccineSetup';

const CMain = () => {
  useVaccineSetup();
  const { queueList0, queueList1 } = useSelector((state) => {
    const list = getQueueList(state);
    return {
      queueList0: list.slice(0, 8),
      queueList1: list.slice(8, 16),
    };
  });

  return (
    <>
      <div className={styles['main']}>
        <LeavePrompt />
        <CHeader />
        <div className={styles['body']}>
          <Grid>
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <Vaccine key={`queueList0-vaccine-${i}`} {...queueList0[i]} />
              ))}
            </>
          </Grid>
          <Grid>
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <Vaccine key={`queueList1-vaccine-${i}`} {...queueList1[i]} />
              ))}
            </>
          </Grid>
        </div>
        <Footer text={'请留意屏幕信息，保持安静，有序留观！'} />
      </div>
    </>
  );
};

export default CMain;
