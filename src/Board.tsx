import Field from './Field';
import { FieldMoves } from './types';

type BoardProps = {
  fields: Array<FieldMoves | null>;
  handleOnClick: (idx: number) => void;
};

export default function Board({ fields, handleOnClick }: BoardProps) {
  function getValue(idx: number) {
    if (fields[idx] === null || fields[idx] === undefined) {
      return null;
    }
    return fields[idx]!.value;
  }
  return (
    <div className="board">
      <div className="row">
        <Field
          value={getValue(0)}
          onFieldClick={() => handleOnClick(0)}
        />
        <Field
          value={getValue(1)}
          onFieldClick={() => handleOnClick(1)}
        />
        <Field
          value={getValue(2)}
          onFieldClick={() => handleOnClick(2)}
        />
      </div>
      <div className="row">
        <Field
          value={getValue(3)}
          onFieldClick={() => handleOnClick(3)}
        />
        <Field
          value={getValue(4)}
          onFieldClick={() => handleOnClick(4)}
        />
        <Field
          value={getValue(5)}
          onFieldClick={() => handleOnClick(5)}
        />
      </div>
      <div className="row">
        <Field
          value={getValue(6)}
          onFieldClick={() => handleOnClick(6)}
        />
        <Field
          value={getValue(7)}
          onFieldClick={() => handleOnClick(7)}
        />
        <Field
          value={getValue(8)}
          onFieldClick={() => handleOnClick(8)}
        />
      </div>
    </div>
  );
}
