type ResultPanelProps = {
  bill: number;
  tipPercent: number;
  people: number;
  onReset: () => void;
  isResetDisabled: boolean;
};

export default function ResultPanel({
  bill,
  tipPercent,
  people,
  onReset,
  isResetDisabled,
}: ResultPanelProps) {
  const tipAmount = people ? (bill * tipPercent) / 100 / people : 0;

  const total = people ? (bill + (bill * tipPercent) / 100) / people : 0;

  return (
    <section className="results">
      <div className="result-row">
        <div>
          <p className="result-title">Tip Amount</p>
          <span className="result-sub">/ person</span>
        </div>

        <p className="result-value">${tipAmount.toFixed(2)}</p>
      </div>

      <div className="result-row">
        <div>
          <p className="result-title">Total</p>
          <span className="result-sub">/ person</span>
        </div>

        <p className="result-value">${total.toFixed(2)}</p>
      </div>

      <button
        className="reset-btn"
        onClick={onReset}
        disabled={isResetDisabled}
      >
        RESET
      </button>
    </section>
  );
}
