import React from 'react';
import styles from './LeavePrompt.module.scss';

const LeavePrompt = (props) => {
  const { message } = props;
  return (
    <>
      <div className={styles['leaveprompt']}>
        <div className={styles['message']}>{message}</div>
      </div>
    </>
  );
};

export default LeavePrompt;
