import react from "react";
import { GameStatus } from "../GameStatus";
import BoardColorHandler from "./BoardColorHandler";
import PieceMoveHandler from "./PieceMoveHandler";

const ClickHandler = (e: any, setGamestatus: react.Dispatch<react.SetStateAction<any>>) => {
    BoardColorHandler("remove");
    if(GameStatus.isClicked == true) {
        PieceMoveHandler(e);
        GameStatus.specialFlag = "";
    } else {
        if(e.target.innerHTML != "" && e.target.innerHTML != null && e.target.innerHTML != undefined) {
            const rank = parseInt(e.target.id[1]);
            const file = parseInt(e.target.id[0]);
            GameStatus.availablePlaces = GameStatus.board[rank][file]?.place(rank, file)!;
            BoardColorHandler("add");
        } else {
            GameStatus.isClicked = !GameStatus.isClicked;
        }
    }
    GameStatus.isClicked = !GameStatus.isClicked;
    setGamestatus({
       ...GameStatus
    })
    // setGamestatus({
    //     board: GameStatus.board,
    //     boardHistory: GameStatus.boardHistory,
    //     specialFlag: GameStatus.specialFlag,
    //     isClicked: GameStatus.isClicked,
    //     availablePlaces: GameStatus.availablePlaces
    // })
}

export default ClickHandler;