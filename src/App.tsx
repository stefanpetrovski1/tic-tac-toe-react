import { useEffect, useState } from 'react';
import './style.css';
import Board from './Board';
import { XO } from './types';
import GameInfo from './GameInfo';

function App() {
  const [fields, setFields] = useState<XO[]>(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<XO>('X');

  useEffect(() => {
    setPlayerTurn(Math.random() >= 0.5 ? 'X' : 'O');
  }, []);

  const handleOnClick = (fieldIndex: number) => {
    if (fields[fieldIndex] || calculateWinner(fields)) {
      return;
    }

    const gameStateCopy = [...fields];
    gameStateCopy[fieldIndex] = playerTurn;

    setFields(gameStateCopy);
    setPlayerTurn((oldPlayerTurn) => (oldPlayerTurn === 'X' ? 'O' : 'X'));
  };

  const winner = calculateWinner(fields);

  return (
    <>
      <GameInfo
        winner={winner}
        fields={fields}
        currentPlayerTurn={playerTurn}
      />
      <Board
        fields={fields}
        handleOnClick={handleOnClick}
      />
    </>
  );
}

// From React's official docs/tutorial
function calculateWinner(fields: XO[]) {
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
  for (const line of lines) {
    const [a, b, c] = line;
    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      return fields[a];
    }
  }
  return null;
}

export default App;
