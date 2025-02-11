import { useState } from "react"
import Board from "./components/Board"

function App() {
  const [history,setHistory] = useState([Array(9).fill(null)])
  const currentSquare = history[history.length-1];
  const [xIsNext,setXIsNext] = useState(true)

  const handlePlay = (nextSquares)=>{
    console.log(history)
    setHistory([...history,nextSquares])
    setXIsNext(!xIsNext)
  }
  return (
    <>
      <div>
        <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay}/>
      </div>
      <div>
        {/* <ol>{TODO}</ol> */}
      </div>
    </>
  )
}

export default App
