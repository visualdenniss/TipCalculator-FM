type BillInputProps = {
  billInput: string;
  setBillInput: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
};

export default function BillInput({
  billInput,
  setBillInput,
  error,
}: BillInputProps) {
  return (
    <div className="input-group">
      <div className="label-row">
        {}
        <label htmlFor="bill">Bill</label>
        {error && <span className="error-text">{error}</span>}
      </div>

      <input
        id="bill"
        type="number"
        value={billInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBillInput(e.target.value)
        }
        className={`text-input ${error ? 'input-error' : ''}`}
      />
    </div>
  );
}
