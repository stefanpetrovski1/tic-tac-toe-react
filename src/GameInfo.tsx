import { XO, FieldMoves } from './types';
type GameInfoProps = {
  winner: XO | null;
  fields: (FieldMoves | null)[];
  currentPlayerTurn: XO;
  jumpToMove: (move: number, playerTurn: XO) => void;
};

export default function GameInfo({
  winner,
  fields,
  currentPlayerTurn,
  jumpToMove,
}: GameInfoProps) {
  const fieldsSortedByMoveNum: FieldMoves[] = fields.filter(
    (f): f is FieldMoves => f !== null
  );

  fieldsSortedByMoveNum.sort((a, b) => a.moveNum - b.moveNum);
  return (
    <div className="status">
      {winner !== null ? (
        <div>Winner: {winner}</div>
      ) : isBoardFull(fields) ? (
        <div>Draw</div>
      ) : (
        <div>Current Player: {currentPlayerTurn}</div>
      )}

      <ul>
        {fieldsSortedByMoveNum.map((f) => {
          return (
            <li key={f.moveNum}>
              Move no.{f.moveNum} Player: {f.value}{' '}
              <button onClick={() => jumpToMove(f.moveNum, f.value)}>Jump to move</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function isBoardFull(fields: (FieldMoves | null)[]): boolean {
  return fields.every((field) => field !== null);
}
