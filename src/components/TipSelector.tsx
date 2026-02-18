type TipSelectorProps = {
  tipPercent: number;
  setTipPercent: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipSelector({
  tipPercent,
  setTipPercent,
}: TipSelectorProps) {
  const tips: number[] = [5, 10, 15, 25, 50];

  return (
    <div className="input-group">
      <p>Select Tip %</p>

      <div className="tip-grid">
        {tips.map((tip) => (
          <button
            key={tip}
            className={`tip-btn ${tipPercent === tip ? 'active' : ''}`}
            onClick={() => setTipPercent(tip)}
          >
            {tip}%
          </button>
        ))}

        <input
          type="number"
          placeholder="Custom"
          className="tip-custom"
          onChange={(e) => setTipPercent(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
