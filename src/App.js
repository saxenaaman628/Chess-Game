import React, {useState, useEffect,
useRef} from "react";
import './App.css';
import ChessBoard from "chessboardjsx";
import Chess from "chess.js";

function App() {
const [fen, setFen] = useState("start");

let game = useRef(null);

useEffect(() => {
  game.current=new Chess();
},[]);

console.log(game);

const onDrop = ({sourceSquare, targetSquare}) =>{
  let move = game.current.move({
    from : sourceSquare,
    to : targetSquare
  })
  if(move === null) return;

  setFen(game.current.fen());
};


  return (
    <>
    {game.current && 
      game.current.game_over()
      ? <div className="over"><h1>Game Over</h1></div>:<span></span>
      }
    <div className="container">
      <ChessBoard position={fen}
      onDrop={onDrop}/>
    </div>
    </>
  );
}

export default App;