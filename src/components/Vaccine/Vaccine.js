import React from 'react';
import Td from '../Td';
import Tr from '../Tr';
import styles from './Vaccine.module.scss';

const Vaccine = (props) => {
  const { number, endTime } = props;
  return (
    <>
      <div className={styles['vaccine']}>
        <Tr>
          <Td>{number}</Td>
          <Td>{endTime}</Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </div>
    </>
  );
};

export default Vaccine;
