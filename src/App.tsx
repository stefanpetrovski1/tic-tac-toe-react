import { useEffect, useState } from 'react';
import Field from './Field';
import './style.css';

type XO = 'X' | 'O';

function App() {
  const [gameState, setGameState] = useState<XO[]>(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<XO>();

  useEffect(() => {
    setPlayerTurn(Math.random() >= 0.5 ? 'X' : 'O');
  }, []);

  const handleOnClick = (fieldIndex: number) => {
    if (gameState[fieldIndex] || calculateWinner(gameState)) {
      return;
    }

    const gameStateCopy = [...gameState];
    gameStateCopy[fieldIndex] = playerTurn === 'X' ? 'X' : 'O';
    setGameState(gameStateCopy);
    setPlayerTurn((oldPlayerTurn) => (oldPlayerTurn === 'X' ? 'O' : 'X'));
  };
  const winner = calculateWinner(gameState);
  return (
    <>
      {winner === null && <div>Current Player: {playerTurn === 'X' ? 'X' : 'O'}</div>}
      <div>Winner: {winner}</div>
      <div className="row">
        <Field
          value={gameState[0]}
          onFieldClick={() => handleOnClick(0)}
        />
        <Field
          value={gameState[1]}
          onFieldClick={() => handleOnClick(1)}
        />
        <Field
          value={gameState[2]}
          onFieldClick={() => handleOnClick(2)}
        />
      </div>
      <div className="row">
        <Field
          value={gameState[3]}
          onFieldClick={() => handleOnClick(3)}
        />
        <Field
          value={gameState[4]}
          onFieldClick={() => handleOnClick(4)}
        />
        <Field
          value={gameState[5]}
          onFieldClick={() => handleOnClick(5)}
        />
      </div>
      <div className="row">
        <Field
          value={gameState[6]}
          onFieldClick={() => handleOnClick(6)}
        />
        <Field
          value={gameState[7]}
          onFieldClick={() => handleOnClick(7)}
        />
        <Field
          value={gameState[8]}
          onFieldClick={() => handleOnClick(8)}
        />
      </div>
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      return fields[a];
    }
  }
  return null;
}

export default App;
