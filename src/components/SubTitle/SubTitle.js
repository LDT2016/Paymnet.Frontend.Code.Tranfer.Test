import React from 'react';
import { getCompanyInfo } from '../selector';
import styles from './SubTitle.module.scss';
import { useSelector } from 'react-redux';

const SubTitle = () => {
  const company = useSelector(getCompanyInfo);
  return (
    <>
      <div className={styles['subtitle']}>
        {company.subTitle && (
          <>
            <div className={styles['border']} />
            <div className={styles['lines']}>
              {company.subTitle.line0 && (
                <div className={styles['line0']}>{company.subTitle.line0}</div>
              )}
              {company.subTitle.line1 && (
                <div className={styles['line1']}>{company.subTitle.line1}</div>
              )}
              {company.subTitle.line2 && (
                <div className={styles['line2']}>{company.subTitle.line2}</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SubTitle;
