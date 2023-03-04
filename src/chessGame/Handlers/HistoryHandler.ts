import { GameStatus } from "../GameStatus";
import react from "react";
import Game from "../../pages/Game";

const HistoryHandler = (newBoardHistory: string, status: string, setGameStatus?: react.Dispatch<react.SetStateAction<any>>, gamestatus?: any) => {
    switch(status) {
        case "add":
            if(GameStatus.boardHistory.length == 0) {
                GameStatus.boardHistory[0] = newBoardHistory;
            } else {
                if(GameStatus.historyBackCounter > 0) {
                    GameStatus.boardHistory.splice(GameStatus.boardHistory.length - GameStatus.historyBackCounter - 1, GameStatus.historyBackCounter);
                    GameStatus.historyBackCounter = 0;
                }
                GameStatus.boardHistory.push(newBoardHistory);
            }
            console.log(GameStatus.boardHistory);
            break;
        case "back": 
            // if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 1) {
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.historyBackCounter + 1 < GameStatus.boardHistory.length) {
                    // GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 2];
                    // GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                    // GameStatus.isClicked = false;
                    // console.log(GameStatus.boardHistory[GameStatus.boardHistory.length - 2]);
                    // GameStatus.historyBackCounter++;
                    // GameStatus.boardHistory.pop();
                GameStatus.historyBackCounter++;
                GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - GameStatus.historyBackCounter - 1];
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
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.historyBackCounter - 1 >= 0) {
                GameStatus.historyBackCounter--;
                GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - GameStatus.historyBackCounter - 1];
                GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                GameStatus.isClicked = false;
                setGameStatus({
                    GameStatus
                })
            } else {
                console.log("board status is already latest");
            }
            break;
    }
}

export default HistoryHandler;