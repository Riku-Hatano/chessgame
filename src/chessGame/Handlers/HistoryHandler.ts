import { GameStatus } from "../GameStatus";
import react from "react";
import * as _ from "lodash";

const HistoryHandler = (newBoardHistory: string, flag: string, setGameStatus?: react.Dispatch<react.SetStateAction<any>>) => {
    switch(flag) {
        case "add":
            // GameStatus.boardHistory.splice(GameStatus.boardHistory.length - GameStatus.historyBackCounter, GameStatus.historyBackCounter);
            GameStatus.boardHistory.push(newBoardHistory);
            // GameStatus.historyBackCounter = 0;
            console.log(GameStatus.boardHistory);
            break;
        case "back": 
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 1) {
                if(GameStatus.boardHistory.length - GameStatus.historyBackCounter > 1) {
                    GameStatus.boardHistory.pop();
                    GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 1];
                    // GameStatus.historyBackCounter++;
                    // GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 1 - GameStatus.historyBackCounter];
                    GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                    GameStatus.isClicked = false;
                    setGameStatus({
                        ...GameStatus,
                    })
                    console.log(GameStatus.boardHistory);
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
}

export default HistoryHandler;





