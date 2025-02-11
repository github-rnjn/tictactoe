import { useState } from "react"
import Board from "./components/Board"

function App() {
  const [history,setHistory] = useState([Array(9).fill(null)])
  const [currentMove,setCurrentMove] = useState(0)
  const currentSquare = history[currentMove]
  const xIsNext = currentMove%2===0

  const handlePlay = (nextSquares)=>{
    const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length-1)
  }

  const jumpTo = (nextMove)=>{
    setCurrentMove(nextMove)
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
      <button onClick={()=>jumpTo(move)}>{description}</button>
    </li>
  })

  const handleReset = ()=>{
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }
  return (
    <>
      <div>
        <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay}/>
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
      <div>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
