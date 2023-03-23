import { GameStatus } from "../GameStatus";
import { initialBoard } from "../InitialStatus";
import react from "react";
// import { setOriginalNode } from "typescript";
import * as _ from "lodash";

const HistoryHandler = (newBoardHistory: string, status: string, setGameStatus?: react.Dispatch<react.SetStateAction<any>>, gamestatus?: any) => {
    switch(status) {
        case "add":
            // const tmpArr = _.cloneDeep(GameStatus.boardHistory);
            // tmpArr.push(newBoardHistory);
            // console.log(tmpArr)
            // GameStatus.boardHistory = tmpArr;
            
            GameStatus.boardHistory[GameStatus.boardHistory.length] = newBoardHistory;
            // GameStatus.boardHistory = [...GameStatus.boardHistory, newBoardHistory];
            break;
        case "back": 
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 1) {
                // const tmpArr = _.cloneDeep(GameStatus.boardHistory);
                // tmpArr.pop();
                // GameStatus.boardHistory = tmpArr;
                GameStatus.boardHistory.pop();
                GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 1];
                // console.log(GameStatus.boardHistory[GameStatus.boardHistory.length - 1])
                GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                GameStatus.isClicked = false;
                setGameStatus({
                    GameStatus
                })
                console.log(GameStatus.boardHistory);
            } else {
                console.log("cannot go back");
            }
            break;
        case "next":
            console.log("next")
            break;
    }
    console.log(GameStatus.boardHistory)
}

export default HistoryHandler;