import react from "react";
import { GameStatus } from "../GameStatus";
import BoardColorHandler from "./BoardColorHandler";
import PieceMoveHandler from "./PieceMoveHandler";
const board = GameStatus.board;

const ClickHandler = (e: any, gamestatus: any, setGamestatus: react.Dispatch<react.SetStateAction<any>>) => {
    BoardColorHandler("remove");
    if(GameStatus.isClicked == true) {
        PieceMoveHandler(e);
    } else {
        if(e.target.innerHTML != "") {
            const rank = parseInt(e.target.id[1]);
            const file = parseInt(e.target.id[0]);
            GameStatus.availablePlaces = board[rank][file]?.place(rank, file)!;
            BoardColorHandler("add");
        } else {
            // console.log("nothing");
        }
    }
    GameStatus.isClicked = !GameStatus.isClicked;
    setGamestatus({
        GameStatus
    })
}

export default ClickHandler;