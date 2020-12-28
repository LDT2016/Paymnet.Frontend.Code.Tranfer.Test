import React from 'react';
import { getPaymentInfo } from '../selector';
import styles from './Right.module.scss';
import { useSelector } from 'react-redux';

const Right = () => {
  const payment = useSelector(getPaymentInfo);
  return (
    <>
      <div className={styles['right']}>
        <div className={styles['top']}>{'请您仔细核对以下收费信息'}</div>
        <div className={styles['info']}>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'姓名：'}</div>
            <div className={styles['val']}>{payment.patients}</div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'收费信息：'}</div>
            <div className={styles['val']}>{payment.patients}</div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'应收：'}</div>
            <div className={styles['val']}>
              <span className={styles['account']}>{payment.accountReal}</span>
              {'元'}
            </div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'实收：'}</div>
            <div className={styles['val']}>
              <span className={styles['account']}>{payment.accountDue}</span>
              {'元'}
            </div>
          </div>
          <div className={styles['cell']}>
            <div className={styles['lbl']}>{'找零：'}</div>
            <div className={styles['val']}>
              <span className={styles['account']}>{payment.accountChange}</span>
              {'元'}
            </div>
          </div>
          <div className={styles['cell']}></div>
        </div>
        <div className={styles['bottom']}>{'找零请当面店庆！谢谢！'}</div>
      </div>
    </>
  );
};

export default Right;
