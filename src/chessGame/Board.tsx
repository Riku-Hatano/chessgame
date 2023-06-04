import React from "react";
import { useState } from "react";
import * as _ from "lodash";
import { GameStatus } from "./GameStatus";
import ClickHandler from "./Handlers/ClickHandler";
import HistoryHandler from "./Handlers/HistoryHandler";
import wp from "../imgs/pieces/white/pawn.png";
import wr from "../imgs/pieces/white/rook.png";
import wn from "../imgs/pieces/white/knight.png";
import wb from "../imgs/pieces/white/bishop.png";
import wq from "../imgs/pieces/white/queen.png";
import wk from "../imgs/pieces/white/king.png";
import bp from "../imgs/pieces/black/pawn.png";
import br from "../imgs/pieces/black/rook.png";
import bn from "../imgs/pieces/black/knight.png";
import bb from "../imgs/pieces/black/bishop.png";
import bq from "../imgs/pieces/black/queen.png";
import bk from "../imgs/pieces/black/king.png";

HistoryHandler(_.cloneDeep(GameStatus.board) as any, "add");

const Board = () => {
    const [gamestatus, setGamestatus] = useState(GameStatus);
    
    const trs: any = [];
    let counterRow = 0;
    GameStatus.board.forEach((row: any) => {
    // GameStatus.boardHistory[GameStatus.boardHistory.length - 1].forEach((row: any) => {
        const tds: any = [];
        let counterCell = 0;
        row.forEach((cell: any) => {
            if(cell != null) {
                let img: any;
                switch (cell.shortName[0] + cell.shortName[1]) {
                    case "br":
                        img = React.createElement("img", {src: br})
                        break;
                    case "bn":
                        img = React.createElement("img", {src: bn})
                        break;
                    case "bb":
                        img = React.createElement("img", {src: bb})
                        break;
                    case "bq":
                        img = React.createElement("img", {src: bq})
                        break;
                    case "bk":
                        img = React.createElement("img", {src: bk})
                        break;
                    case "bp":
                        img = React.createElement("img", {src: bp})
                        break;
                    case "wr":
                        img = React.createElement("img", {src: wr})
                        break;
                    case "wn":
                        img = React.createElement("img", {src: wn})
                        break;
                    case "wb":
                        img = React.createElement("img", {src: wb})
                        break;
                    case "wq":
                        img = React.createElement("img", {src: wq})
                        break;
                    case "wk":
                        img = React.createElement("img", {src: wk})
                        break;
                    case "wp":
                        img = React.createElement("img", {src: wp})
                        break;
                }
                const td = React.createElement(
                    "td",
                    {
                        id: `${counterCell}${counterRow}`,
                        key: `${counterCell}:${counterRow}`,
                        onClick: (e: any) => {
                            ClickHandler(e, setGamestatus);
                        }
                    },
                    cell.shortName, img
                )
                tds.push(td);
            } else {
                const td = React.createElement(
                    "td",
                    {
                        id: `${counterCell}${counterRow}`,
                        key: `${counterCell}:${counterRow}`,
                        onClick: (e: any) => {
                            ClickHandler(e, setGamestatus);
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
        <>
            <table>
                {React.createElement("tbody", {}, trs)}
            </table>
            {
                (GameStatus.isWhiteTurn)? <h1>white turn</h1> : <h1>black turn</h1>
            }
            <div>
                <button onClick={() => HistoryHandler("", "back", setGamestatus)}>back</button>
                <button onClick={() => HistoryHandler("", "next", setGamestatus)}>next</button>
            </div>
        </>
    )
}

export default Board;