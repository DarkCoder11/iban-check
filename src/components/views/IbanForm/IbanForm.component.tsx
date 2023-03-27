import React, {useState} from 'react';

import {Input, Button} from '~/components';

import {checkIBAN} from './IbanForm.utils';
import styles from './IbanForm.module.scss';
import {TIbanFormProps} from './IbanForm.types';

const IbanForm: React.FC<TIbanFormProps> = ({onSubmit}) => {
  const [iban, setIban] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = checkIBAN(iban);

    onSubmit(iban, isValid);

    setIban('');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        type="text"
        name="iban"
        value={iban}
        placeholder="Enter IBAN"
        onChange={(e) => setIban(e.target.value.toUpperCase())}
      />
      <Button type="submit">Check IBAN</Button>
    </form>
  );
};

export default IbanForm;
