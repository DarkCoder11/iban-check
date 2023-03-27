import React, {HTMLInputTypeAttribute} from 'react';

export type TInputProps = {
  value: string;
  name: string;
  label?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  labelClassName?: string;
  innerClassName?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
