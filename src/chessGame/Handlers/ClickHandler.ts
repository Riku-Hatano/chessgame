import react from "react";
import { GameStatus } from "../GameStatus";
import BoardColorHandler from "./BoardColorHandler";
import BoardColor from "./BoardColorHandler";
import PieceMoveHandler from "./PieceMoveHandler";
const board = GameStatus.board;

const ClickHandler = (e: any, gamestatus: any, setGamestatus: react.Dispatch<react.SetStateAction<any>>) => {
    if(GameStatus.isClicked == true) {
        PieceMoveHandler(e);
        GameStatus.isClicked = !GameStatus.isClicked;
    } else {
        if(e.target.innerHTML != "") {
            const rank = parseInt(e.target.id[1]);
            const file = parseInt(e.target.id[0]);
            GameStatus.availablePlaces = board[rank][file]?.place(rank, file)!;
        } else {
            console.log("nothing")
        }
        GameStatus.isClicked = !GameStatus.isClicked;
    }
    BoardColorHandler("remove");
    BoardColorHandler("add");
    setGamestatus({
        GameStatus
    })
}

export default ClickHandler;