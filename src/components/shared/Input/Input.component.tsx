import React from 'react';
import classNames from 'classnames';

import {Typography} from '~/components';

import styles from './Input.module.scss';
import {TInputProps} from './Input.types';

const Input: React.FC<TInputProps> = ({
  name,
  error,
  errorText,
  disabled,
  placeholder,
  type = 'text',
  className = '',
  innerClassName = '',
  ...rest
}) => {
  const inputClasses = classNames(styles.container, className);

  const inputInnerClasses = classNames(styles.container__inner, {
    [innerClassName]: innerClassName,
    [styles.container__inner_disabled]: disabled,
  });

  return (
    <div className={inputInnerClasses}>
      <input
        {...rest}
        id={name}
        name={name}
        autoComplete="off"
        disabled={disabled}
        className={inputClasses}
        placeholder={placeholder}
        type={type}
      />

      {!!error && <Typography>{errorText}</Typography>}
    </div>
  );
};

export default Input;
