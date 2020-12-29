import React from 'react';
import { getCompanyInfo } from '../selector';
import styles from './Title.module.scss';
import { useSelector } from 'react-redux';

const Title = () => {
  const company = useSelector(getCompanyInfo);
  return (
    <>
      {company.title && <div className={styles['title']}>{company.title}</div>}
    </>
  );
};

export default Title;
