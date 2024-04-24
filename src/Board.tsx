import Field from './Field';
import { XO } from './types';

type BoardProps = { fields: Array<XO>; handleOnClick: (idx: number) => void };

export default function Board({ fields, handleOnClick }: BoardProps) {
  return (
    <div>
      <div className="row">
        <Field
          value={fields[0]}
          onFieldClick={() => handleOnClick(0)}
        />
        <Field
          value={fields[1]}
          onFieldClick={() => handleOnClick(1)}
        />
        <Field
          value={fields[2]}
          onFieldClick={() => handleOnClick(2)}
        />
      </div>
      <div className="row">
        <Field
          value={fields[3]}
          onFieldClick={() => handleOnClick(3)}
        />
        <Field
          value={fields[4]}
          onFieldClick={() => handleOnClick(4)}
        />
        <Field
          value={fields[5]}
          onFieldClick={() => handleOnClick(5)}
        />
      </div>
      <div className="row">
        <Field
          value={fields[6]}
          onFieldClick={() => handleOnClick(6)}
        />
        <Field
          value={fields[7]}
          onFieldClick={() => handleOnClick(7)}
        />
        <Field
          value={fields[8]}
          onFieldClick={() => handleOnClick(8)}
        />
      </div>
    </div>
  );
}
