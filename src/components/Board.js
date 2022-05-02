import Tile from "./Tile";
import Cell from "./Cell";
import React from "react";
import { useEffect, useState } from "react";

const Board = () => {

    const GRID_SIZE = 4;
    const CELL_SIZE = 20;
    const CELL_GAP = 2;

    const [startTile1, setStartTile1] = useState({})
    const [startTile2, setStartTile2] = useState({})

    useEffect(() => {
        setStartTile1(randomEmptyCell());
        setStartTile2(randomEmptyCell());
        setupInput();
    }, [])

    const creatCellElements = () => {
        const cells = [];
        for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++){
            const cell = <Cell/>;
            cells.push(cell)
        }
        return cells   
    };

    const cells = creatCellElements().map((cellElement, index) => {
        return <Cell key={index} xValue={index % GRID_SIZE} yValue={Math.floor(index / GRID_SIZE)}/>
    })

    const emptyCells = cells.filter(cell => cell.tileState == null)

    const randomEmptyCell = () => {
        const randomIndex = Math.floor(Math.random() * emptyCells.length)
        return emptyCells[randomIndex]
    } 

    const setupInput = () => {
        document.addEventListener("keydown", handleInput, {once: true})
    }

    const handleInput = (e) => {
        console.log(e.key);
        switch (e.key){
            case "ArrowUp":
                    moveUp()
                    break
                case "ArrowDown":
                    moveDown()
                    break
                case "ArrowLeft":
                    moveLeft()
                    break
                case "ArrowRight":
                    moveRight()
                    break
                default:
                    setupInput()
                    return
        }
    }

    const moveUp = () => {}
    const moveDown = () => {}
    const moveLeft = () => {}
    const moveRight = () => {}

    return (
        <div className="game-board" style={{"--grid--size": GRID_SIZE,"--cell--size": `${CELL_SIZE}vmin`,"--cell--gap": `${CELL_GAP}vmin`,}}>
            {cells}
            {startTile1 ? <Tile tileObject={startTile1}/> : null}
            {startTile2 ? <Tile tileObject={startTile2}/> : null}
        </div>
    )
};

export default Board;