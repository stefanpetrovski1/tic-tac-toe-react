import { XO } from './types';
type GameInfoProps = { winner: XO | null; fields: XO[]; currentPlayerTurn: XO };

export default function GameInfo({ winner, fields, currentPlayerTurn }: GameInfoProps) {
  return (
    <div>
      {winner !== null ? (
        <div>Winner: {winner}</div>
      ) : isBoardFull(fields) ? (
        <div>Draw</div>
      ) : (
        <div>Current Player: {currentPlayerTurn}</div>
      )}
    </div>
  );
}
function isBoardFull(fields: XO[]): boolean {
  return fields.every((field) => field !== null);
}
