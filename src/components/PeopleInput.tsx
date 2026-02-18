type PeopleInputProps = {
  peopleInput: string;
  setPeopleInput: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
};

export default function PeopleInput({
  peopleInput,
  setPeopleInput,
  error,
}: PeopleInputProps) {
  return (
    <div className="input-group">
      <div className="label-row">
        <label htmlFor="people">Number of People </label>
        {error && <span className="error-text">{error}</span>}
      </div>

      <input
        id="people"
        type="number"
        value={peopleInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPeopleInput(e.target.value)
        }
        className={`text-input ${error ? 'input-error' : ''}`}
      />
    </div>
  );
}
