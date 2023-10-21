import {useContext} from "react";
import {SquareContext} from "../context/contexts.ts";
import {Board} from "../models/Board.ts";
function Square({board, handleSquareSetting, winner}: Board) {
    const c = useContext(SquareContext);
    return (
        <>
        {board.map((square: string | null, index: number) => {
                return <button
                    className="btn"
                    value={index}
                    disabled={!!square || !!winner}
                    onClick={() => handleSquareSetting(index)}
                    key={index}>
                    <span className="square">{square}</span>
                </button>
            })}
        </>
    );
}

export default Square;