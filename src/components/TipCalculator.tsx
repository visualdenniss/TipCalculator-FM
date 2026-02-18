import { useState, useEffect, useCallback } from 'react';
import BillInput from './BillInput';
import TipSelector from './TipSelector';
import PeopleInput from './PeopleInput';
import ResultPanel from './ResultPanel';

import '../styles/calculator.css';

type FormErrors = {
  bill?: string;
  people?: string;
};

export default function TipCalculator() {
  const [billInput, setBillInput] = useState<string>('');
  const [peopleInput, setPeopleInput] = useState<string>('1');
  const [tipPercent, setTipPercent] = useState<number>(15);

  const [errors, setErrors] = useState<FormErrors>({});

  const bill = Number(billInput);
  const people = Number(peopleInput);

  const safeBill = isNaN(bill) ? 0 : bill;
  const safePeople = people > 0 ? people : 1;

  const isResetDisabled =
    !billInput && peopleInput === '1' && tipPercent === 15;

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!billInput || Number(billInput) < 0) {
      newErrors.bill = ' must be positive';
    }

    if (!peopleInput || Number(peopleInput) <= 0) {
      newErrors.people = "can't be zero";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [billInput, peopleInput]);

  function resetCalculator() {
    setBillInput('');
    setPeopleInput('1');
    setTipPercent(15);
    setErrors({});
  }

  useEffect(() => {
    validate();
  }, [validate]);

  return (
    <main className="calculator">
      <section className="calculator-left">
        <BillInput
          billInput={billInput}
          setBillInput={setBillInput}
          error={errors.bill}
        />

        <TipSelector tipPercent={tipPercent} setTipPercent={setTipPercent} />

        <PeopleInput
          peopleInput={peopleInput}
          setPeopleInput={setPeopleInput}
          error={errors.people}
        />
      </section>

      <ResultPanel
        bill={safeBill}
        tipPercent={tipPercent}
        people={safePeople}
        onReset={resetCalculator}
        isResetDisabled={isResetDisabled}
      />
    </main>
  );
}
