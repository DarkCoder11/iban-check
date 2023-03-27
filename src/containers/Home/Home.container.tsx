import React, {useState} from 'react';

import {Header, PreviousChecks, IbanForm} from '~/components';

import {TCheck} from './Home.types';

const HomeContainer: React.FC = () => {
  const [checks, setChecks] = useState<TCheck[]>([]);

  const handleSubmit = (iban: string, isValid: boolean) => {
    setChecks([{iban, valid: isValid}, ...checks]);
  };

  return (
    <section>
      <Header />

      <IbanForm onSubmit={handleSubmit} />

      {checks.length > 0 && <PreviousChecks checks={checks} />}
    </section>
  );
};

export default HomeContainer;
