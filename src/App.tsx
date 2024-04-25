import { useEffect, useState } from 'react';
import './style.css';
import Board from './Board';
import { XO, FieldMoves } from './types';
import GameInfo from './GameInfo';

function App() {
  const [fields, setFields] = useState<(FieldMoves | null)[]>(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<XO>('X');

  useEffect(() => {
    setPlayerTurn(Math.random() >= 0.5 ? 'X' : 'O');
  }, []);

  const handleOnClick = (fieldIndex: number) => {
    if (fields[fieldIndex] || calculateWinner(fields)) {
      return;
    }

    const oldFieldsMoves = [...fields];
    const moveNum = 9 - oldFieldsMoves.filter((f) => f === null).length;
    oldFieldsMoves[fieldIndex] = { value: playerTurn, moveNum: moveNum };

    setFields(oldFieldsMoves);
    setPlayerTurn((oldPlayerTurn) => (oldPlayerTurn === 'X' ? 'O' : 'X'));
  };

  function jumpToMove(move: number, playerTurn: XO) {
    const fieldsCopy = [...fields];
    for (let i = 0; i < fieldsCopy.length; i++) {
      if (fieldsCopy[i] !== null && fieldsCopy[i]!.moveNum > move) {
        fieldsCopy[i] = null;
      }
    }

    setFields(fieldsCopy);
    const nextPlayer = playerTurn === 'X' ? 'O' : 'X';
    setPlayerTurn(nextPlayer);
  }

  const winner = calculateWinner(fields);

  return (
    <div className="app">
      <GameInfo
        winner={winner}
        fields={fields}
        currentPlayerTurn={playerTurn}
        jumpToMove={jumpToMove}
      />
      <Board
        fields={fields}
        handleOnClick={handleOnClick}
      />
    </div>
  );
}

// The function's initial logic is from React's official docs/tutorial
function calculateWinner(fieldsMoves: (FieldMoves | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const fields = fieldsMoves.map((fm) => {
    if (fm === null) {
      return null;
    }
    return fm.value;
  });

  for (const line of lines) {
    const [a, b, c] = line;
    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      return fields[a];
    }
  }
  return null;
}

export default App;
