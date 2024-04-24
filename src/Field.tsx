type FieldPropsType = { value: 'X' | 'O'; onFieldClick: () => void };

export default function Field({ value, onFieldClick }: FieldPropsType) {
  return (
    <div
      className="field"
      onClick={() => onFieldClick()}
    >
      <p>{value}</p>
    </div>
  );
}
