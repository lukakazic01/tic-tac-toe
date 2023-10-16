import './App.css'
import {ReactNode, useState} from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleSquareSetting = (i: number) => {
      const updatedBoard = [...board]
      if(isX) {
          updatedBoard[i] = 'x'
      } else {
          updatedBoard[i] = 'o'
      }
      setIsX(!isX);
      setBoard(updatedBoard)
  }
    return (
    <>
      <div className="tic-tac-toe-wrapper">
          <div className="tic-tac-toe-inner">
              {board.map((square, index) => {
                  return <button
                          className="btn"
                          value={index}
                          onClick={() => handleSquareSetting(index)}
                          key={index}>
                            <span className="square">{square}</span>
                          </button>
              })}
          </div>
      </div>
    </>
  )
}

export default App
