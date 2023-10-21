import './App.css'
import {useState} from "react";
import Square from "./assets/Square.tsx";
import {SquareContext} from "./context/contexts.ts";
function App() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<string | null>(null)
  const handleSquareSetting = (i: number): void => {
      const updatedBoard = [...board]
      if(isX) {
          updatedBoard[i] = 'x'
      } else {
          updatedBoard[i] = 'o'
      }
      setIsX(!isX);
      setBoard(updatedBoard)
      const winner = determineWinner(updatedBoard);
      const isBoardFullfilled = updatedBoard.every((item) => typeof item === 'string')
      if(isBoardFullfilled && !winner) {
          setWinner('draw');
          return;
      }
      if(winner) {
          setWinner(winner)
      }
  }

  const determineWinner = (updatedBoard: (string | null)[]): string | null => {
      let winner: string | null = null
      const winnerConditions: number[][] = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ]
      for(const [a, b, c] of winnerConditions) {
          if(updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
              winner = updatedBoard[a]
          }
      }
      return winner
  }
    return (
    <>
      <div className="tic-tac-toe-wrapper">
          {winner && (
              <div className="winner-wrapper">
                  <p className="winner">{winner !== 'draw' ? `Winner is ${winner.toUpperCase()}` : 'DRAW'}</p>
                  <span className="try-again" onClick={() => {
                      setBoard(Array(9).fill(null))
                      setWinner(null)
                  }}>Try again</span>
              </div>
          )}
          <div>

          </div>
          <div className="tic-tac-toe-inner">
            <SquareContext.Provider value="dark">
              <Square board={board} handleSquareSetting={handleSquareSetting} winner={winner}/>
            </SquareContext.Provider>
          </div>
      </div>
    </>
  )
}

export default App
