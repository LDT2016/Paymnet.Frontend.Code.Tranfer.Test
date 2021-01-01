import PropTypes from 'prop-types';
import React from 'react';
import Td from '../Td';
import Tr from '../Tr';
import styles from '../CMain/CMain.module.scss';

const Vaccine = (props) => {
  const { id, number, serveTime, endTime, remainMins } = props;

  return (
    <>
      <div className={styles['vaccine']}>
        <Tr>
          {!id ? (
            <>
              {Array.from({ length: 4 }).map((_, i) => (
                <Td key={`td-${i}`}></Td>
              ))}
            </>
          ) : (
            <>
              <Td>{number}</Td>
              <Td>{serveTime}</Td>
              <Td>{endTime}</Td>
              <Td>{remainMins}</Td>
            </>
          )}
        </Tr>
      </div>
    </>
  );
};

Vaccine.propTypes = {
  id: PropTypes.number,
  serveTime: PropTypes.string,
  endTime: PropTypes.string,
};

Vaccine.defaultProps = {
  id: 0,
  serveTime: '',
  endTime: '',
};

export default Vaccine;
