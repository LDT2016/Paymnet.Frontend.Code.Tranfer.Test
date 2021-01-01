import React, { useEffect, useState } from 'react';

import CHeader from '../CHeader';
import Footer from '../Footer';
import Grid from '../Grid';
import LeavePrompt from '../LeavePrompt';
import Vaccine from '../Vaccine';
import { get } from '../../utils/request';
import { getQueueList } from '../selector';
import { hide as queueHistHide } from '../../slices/queueHistSlice';
import styles from './CMain.module.scss';
import { ttsAction1 } from '../../utils/common';
import { useDispatch } from 'react-redux';
import useLeavePrompt from '../hooks/useLeavePrompt';
import { useSelector } from 'react-redux';
import useVaccineSetup from '../hooks/useVaccineSetup';

const CMain = () => {
  const [leaveMessage, setLeaveMessage] = useState(null);
  const dispatch = useDispatch();
  useVaccineSetup();
  const [leave] = useLeavePrompt();
  const { queueList0, queueList1 } = useSelector((state) => {
    const list = getQueueList(state);
    return {
      queueList0: list.slice(0, 8),
      queueList1: list.slice(8, 16),
    };
  });
  useEffect(() => {
    if (leave && leave.id && leave.number) {
      const msg = `${leave.number}号留观到点`;
      setLeaveMessage(msg);
      dispatch(ttsAction1(msg));
      setTimeout(() => {
        get(`/api/hideVaccine/${leave.id}`).then((_res) => {
          dispatch(queueHistHide({ id: leave.id }));
        });
      }, 3 * 1000);
    } else {
      setLeaveMessage(null);
    }
    // eslint-disable-next-line
  }, [leave]);

  return (
    <>
      <div className={styles['main']}>
        {leaveMessage && <LeavePrompt message={leaveMessage} />}
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
