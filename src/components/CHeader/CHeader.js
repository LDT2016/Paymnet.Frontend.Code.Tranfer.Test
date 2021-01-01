import Logo from '../Logo';
import React from 'react';
import Title from '../Title';
import { getCompanyInfo } from '../selector';
import styles from './CHeader.module.scss';
import { useSelector } from 'react-redux';

const CHeader = () => {
  const company = useSelector(getCompanyInfo);
  return (
    <>
      <div className={styles['header']}>
        <Logo icon={'vaccine-logo.jpg'} />
        <Title />
        {company.sub_line0 && (
          <div className={styles['category']}>{company.sub_line0}</div>
        )}
      </div>
    </>
  );
};

export default CHeader;
