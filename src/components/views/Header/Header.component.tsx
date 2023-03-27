import React from 'react';

import {BankIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.container}>
    <Typography tagName="h1">Montenegro IBAN Checker</Typography>
    <BankIcon width={50} height={50} />
  </header>
);

export default Header;
