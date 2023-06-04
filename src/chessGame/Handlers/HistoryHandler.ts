import { GameStatus } from "../GameStatus";
import react from "react";
import * as _ from "lodash";

const HistoryHandler = (newBoardHistory: string, status: string, setGameStatus?: react.Dispatch<react.SetStateAction<any>>) => {
    switch(status) {
        case "add":
            GameStatus.boardHistory.splice(GameStatus.boardHistory.length - GameStatus.historyBackCounter, GameStatus.historyBackCounter);
            GameStatus.boardHistory.push(newBoardHistory);
            GameStatus.historyBackCounter = 0;

            
            break;
        case "back": 
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 1) {
                if(GameStatus.boardHistory.length - GameStatus.historyBackCounter > 1) {
                    GameStatus.historyBackCounter++;
                    GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 1 - GameStatus.historyBackCounter];
                    GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                    GameStatus.isClicked = false;
                    setGameStatus({
                        ...GameStatus,
                    })
                }
            } else {
                console.log("cannot go back");
            }
            break;
        case "next":
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 1) {
                if(GameStatus.historyBackCounter > 0) {
                    GameStatus.historyBackCounter--;
                    GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 1 - GameStatus.historyBackCounter];
                    GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                    GameStatus.isClicked = false;
                    setGameStatus({
                        ...GameStatus,
                    })
                }
            }
            break;
    }
    console.log(GameStatus.boardHistory)
}

export default HistoryHandler;