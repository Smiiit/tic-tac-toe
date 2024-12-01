import React, {useState} from "react";
import Sqaure from "./Sqaure";
import "../App.css";

const Board = () => {
    const [state, setState ] = useState(Array(9).fill(null));

    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6],
        ];
        
        for(let logic of winnerLogic) {
            const [a, b, c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();
    
    const handleClick = (index) => {
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }


    const handleReset = () => {
        setState(Array(9).fill(null));
    };

    return (
        <div className='board-container'>
            {isWinner ? (
                <p style={{ fontWeight: "bold", fontSize: "50px", textAlign: "center", color: "green"}}>
                    Player "{isWinner}" Won the Game {" "}
                <br />

                <button onClick={handleReset}>Play Again</button>

                </p>
                ) : (
                <>

                    <h3 style={{ fontWeight: "bold", fontSize: "50px", textAlign: "center", color:"red"}}>
                         TIC TAC TOE <br /> Game 
                    </h3>

                <h4 style={{ fontWeight: "bold", fontSize: "50px", textAlign: "center"}}>Player {isXTurn ? 'X' : "O" } Turns </h4>
                    <div className="board-row">
                        <Sqaure onClick={() => handleClick(0)} value = {state[0]} />
                        <Sqaure onClick={() => handleClick(1)} value = {state[1]}/>
                        <Sqaure onClick={() => handleClick(2)} value = {state[2]}/>
                    </div>
                    <div className="board-row">
                        <Sqaure onClick={() => handleClick(3)} value = {state[3]}/>
                        <Sqaure onClick={() => handleClick(4)} value = {state[4]}/>
                        <Sqaure onClick={() => handleClick(5)} value = {state[5]}/>
                    </div>
                    <div className="board-row">
                        <Sqaure onClick={() => handleClick(6)} value = {state[6]}/>
                        <Sqaure onClick={() => handleClick(7)} value = {state[7]}/>
                        <Sqaure onClick={() => handleClick(8)} value = {state[8]}/>
                    </div>
                </> 
            )}
        </div>
    )
}

export default Board