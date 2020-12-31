import React, { useEffect } from 'react';

import Top from '../Top';
import { getPaymentInfo } from '../selector';
import styles from './Right.module.scss';
import { useSelector } from 'react-redux';

const Right = () => {
  const payment = useSelector(getPaymentInfo);
  useEffect(() => {
    if (payment.id) {
      try {
        if (window.tts && typeof window.tts === 'function') {
          let ttsText = '';
          if (payment.patients) {
            ttsText += `姓名${payment.patients}`;
          }
          if (payment.paymentType) {
            ttsText += `收费性质${payment.paymentType}`;
          }
          if (payment.accountDue) {
            ttsText += `应收${payment.accountDue}`;
          }
          if (payment.accountReal) {
            ttsText += `实收${payment.accountReal}`;
          }
          if (payment.accountChange) {
            ttsText += `找零${payment.accountChange}`;
          }
          if (ttsText) {
            window.tts(ttsText);
          }
        }
      } catch (_error) {}
    }
    // eslint-disable-next-line
  }, [payment.id]);
  return (
    <>
      <div className={styles['right']}>
        <Top text={'请您仔细核对以下收费信息'} />
        <div className={styles['info']}>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'姓名：'}</div>
            <div className={styles['val']}>{payment.patients}</div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'收费性质：'}</div>
            <div className={styles['val']}>{payment.paymentType}</div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'应收：'}</div>
            <div className={styles['val']}>
              <span className={styles['account']}>
                {payment.accountDue ? payment.accountDue : 0}
              </span>
              {'元'}
            </div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'实收：'}</div>
            <div className={styles['val']}>
              <span className={styles['account']}>
                {payment.accountReal ? payment.accountReal : 0}
              </span>
              {'元'}
            </div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'找零：'}</div>
            <div className={styles['val']}>
              <span className={styles['account']}>
                {payment.accountChange ? payment.accountChange : 0}
              </span>
              {'元'}
            </div>
          </div>
          <div className={styles['cell']}></div>
        </div>
        <div className={styles['bottom']}>{'找零请当面点清！谢谢！'}</div>
      </div>
    </>
  );
};

export default Right;
