import React from "react";
import react from "react";
import { useState } from "react";
import { GameStatus } from "./GameStatus";
import ClickHandler from "./Handlers/ClickHandler";

const Board = () => {
    const [gamestatus, setGamestatus] = useState(GameStatus);
    const trs: any = [];
    let counterRow = 0;
    GameStatus.board.forEach((row) => {
        const tds: any = [];
        let counterCell = 0;
        row.forEach((cell) => {
            if(cell != null) {
                const td = React.createElement(
                    "td",
                    {
                        id: `${counterCell}${counterRow}`,
                        key: `${counterCell}:${counterRow}`,
                        onClick: (e: any) => {
                            ClickHandler(e, gamestatus, setGamestatus);
                        }
                    },
                    cell.shortName
                )
                tds.push(td);
            } else {
                const td = React.createElement(
                    "td",
                    {
                        id: `${counterCell}${counterRow}`,
                        key: `${counterCell}:${counterRow}`,
                        onClick: (e: any) => {
                            ClickHandler(e, gamestatus, setGamestatus);
                        }
                    },
                    null
                )
                tds.push(td);
            }
            counterCell++;
        })
        const tr = React.createElement("tr", {key: counterRow}, tds);
        trs.push(tr);
        counterRow++;
    })
    return (
        <table>
            {React.createElement("tbody", {}, trs)}
        </table>
    )
}

export default Board;