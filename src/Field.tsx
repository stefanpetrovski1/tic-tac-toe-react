type FieldPropsType = { value: 'X' | 'O'; onFieldClick: () => void };

export default function Field({ value, onFieldClick }: FieldPropsType) {
  return (
    <button
      className="field"
      onClick={() => onFieldClick()}
    >
      <p>{value}</p>
    </button>
  );
}
