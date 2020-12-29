import React from 'react';
import { getPaymentInfo } from '../selector';
import styles from './Left.module.scss';
import { useSelector } from 'react-redux';

const Left = () => {
  const payment = useSelector(getPaymentInfo);
  return (
    <>
      <div className={styles['left']}>
        {payment && (
          <>
            <div className={styles['label']}>{'员工信息'}</div>
            <div className={styles['photo']}>
              {payment.doctorPhoto && (
                <img
                  className={styles['photo-img']}
                  src={payment.doctorPhoto}
                  alt={payment.doctorName}
                />
              )}
            </div>
            <div className={styles['name']}>{payment.doctorName}</div>
            <div className={styles['number']}>{payment.doctorNo}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Left;
