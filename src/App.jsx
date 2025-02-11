import { useState } from "react"
import Board from "./components/Board"

function App() {
  const [history,setHistory] = useState([Array(9).fill(null)])
  const currentSquare = history[history.length-1];
  const [xIsNext,setXIsNext] = useState(true)

  const handlePlay = (nextSquares)=>{
    setHistory([...history,nextSquares])
    setXIsNext(!xIsNext)
  }
  const moves = history.map((square,move)=>{
    let description;
    if(move>0){
      description = "Go to move #"+move;
    }
    else{
      description = "Go to start";
    }
    return <li key={move}>
      <button>{description}</button>
    </li>
  })
  return (
    <>
      <div>
        <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay}/>
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </>
  )
}

export default App
