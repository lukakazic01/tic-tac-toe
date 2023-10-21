import './App.css'
import {useState} from "react";
import Square from "./assets/Square.tsx";
import {SquareContext} from "./context/contexts.ts";
function App() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleSquareSetting = (i: number): void => {
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
            <SquareContext.Provider value="dark">
              <Square board={board} handleSquareSetting={handleSquareSetting}/>
            </SquareContext.Provider>
          </div>
      </div>
    </>
  )
}

export default App
