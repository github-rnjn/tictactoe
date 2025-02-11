import { useState } from "react"
import "../css/square.css"

const Square = ({value,onSquareClick}) => {
    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}

export default Square
