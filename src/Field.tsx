import { XO } from './types';
type FieldPropsType = { value: XO | null; onFieldClick: () => void };

export default function Field({ value, onFieldClick }: FieldPropsType) {
  const classes = ['field'];
  if (value) {
    classes.push('clicked');
  }
  if (value === 'O') {
    classes.push('field-o');
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={() => onFieldClick()}
    >
      <p>{value}</p>
    </button>
  );
}
