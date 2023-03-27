import React from 'react';
import classNames from 'classnames';

import {Typography} from '~/components';

import styles from './PreviousChecks.module.scss';
import {TPreviousCheckProps} from './PreviousChecks.types';

const PreviousChecks: React.FC<TPreviousCheckProps> = ({checks}) => {
  const renderChecks = checks.map((check, index) => (
    <li
      key={index}
      className={classNames(styles.container__item, {
        [styles.container__item_valid]: check.valid,
        [styles.container__item_invalid]: !check.valid,
      })}>
      {check.iban} - {check.valid ? 'Valid' : 'Invalid'}
    </li>
  ));

  return (
    <div className={styles.container}>
      <Typography tagName="h2">Previous Checks:</Typography>
      <ul>{renderChecks}</ul>
    </div>
  );
};

export default PreviousChecks;
