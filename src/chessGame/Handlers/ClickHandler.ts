import react from "react";
import { GameStatus } from "../GameStatus";
import BoardColorHandler from "./BoardColorHandler";
import PieceMoveHandler from "./PieceMoveHandler";
// const board = GameStatus.board;
// const history = GameStatus.boardHistory;

const ClickHandler = (e: any, gamestatus: any, setGamestatus: react.Dispatch<react.SetStateAction<any>>) => {
    BoardColorHandler("remove");
    if(GameStatus.isClicked == true) {
        PieceMoveHandler(e);
        GameStatus.specialFlag = "";
    } else {
        if(e.target.innerHTML != "" && e.target.innerHTML != null && e.target.innerHTML != undefined) {
            const rank = parseInt(e.target.id[1]);
            const file = parseInt(e.target.id[0]);
            // console.log(board);
            // console.log(GameStatus.boardHistory[GameStatus.boardHistory.length - 1][rank][file].place(rank, file));
            // console.log(history[history.length - 1][rank][file].toObj());
            // GameStatus.availablePlaces = GameStatus.boardHistory[GameStatus.boardHistory.length - 1][rank][file].place(rank, file)!;
            // console.log(board[rank][file]?.toObj());
            // console.log(board[rank][file]);
            GameStatus.availablePlaces = GameStatus.board[rank][file]?.place(rank, file)!;
            BoardColorHandler("add");
        } else {
            // console.log("nothing");
            GameStatus.isClicked = !GameStatus.isClicked;
        }
    }
    GameStatus.isClicked = !GameStatus.isClicked;
    setGamestatus({
        GameStatus
    })
}

export default ClickHandler;