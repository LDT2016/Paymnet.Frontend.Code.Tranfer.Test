import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Top from '../Top';
import { getPaymentInfo } from '../selector';
import { put } from '../../utils/request';
import styles from './Right.module.scss';
import { ttsAction1 } from '../../utils/common';

const Right = () => {
  const dispatch = useDispatch();
  const payment = useSelector(getPaymentInfo);
  const paymentHideAction = (id, timeout) => {
    const _action = () => put(`/api/Payment/${id}`).then((res) => {});
    if (timeout) {
      setTimeout(() => _action, 3 * 1000);
    } else {
      _action();
    }
  };
  useEffect(() => {
    if (payment.id && payment.id > 0) {
      try {
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
          dispatch(ttsAction1(ttsText))
            .then((res) => {
              console.log('tt-then');
              paymentHideAction(payment.id, true);
            })
            .catch((res) => {
              console.log('tt-catch');
              paymentHideAction(payment.id);
            })
            .finally(() => {});
        } else {
          paymentHideAction(payment.id);
        }
      } catch (_error) {}
    }
    // eslint-disable-next-line
  }, [payment, payment.id]);
  return (
    <>
      {payment && (
        <div className={styles['right']}>
          <Top
            text={
              payment.id !== undefined &&
              payment.id > 0 &&
              '请您仔细核对以下收费信息'
            }
          />
          {payment.id !== undefined && payment.id > 0 && (
            <>
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Right;
