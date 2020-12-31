import React from 'react';
import Td from '../Td';
import Top from '../Top';
import Tr from '../Tr';
import styles from './Grid.module.scss';

const Grid = (props) => {
  const { children } = props;
  return (
    <div className={styles['grid']}>
      <>
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
        {children}
      </>
    </div>
  );
};

export default Grid;
