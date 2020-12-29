import React from 'react';
import { getCompanyInfo } from '../selector';
import styles from './SubTitle.module.scss';
import { useSelector } from 'react-redux';

const SubTitle = () => {
  const company = useSelector(getCompanyInfo);
  return (
    <>
      <div className={styles['subtitle']}>
        <div className={styles['border']} />
        <div className={styles['lines']}>
          {company.sub_line0 && (
            <div className={styles['line0']}>{company.sub_line0}</div>
          )}
          {company.sub_line1 && (
            <div className={styles['line1']}>{company.sub_line1}</div>
          )}
          {company.sub_line2 && (
            <div className={styles['line2']}>{company.sub_line2}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubTitle;
