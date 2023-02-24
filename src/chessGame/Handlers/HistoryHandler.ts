import { GameStatus } from "../GameStatus";
import react from "react";

const HistoryHandler = (newBoardHistory: string, status: string, setGameStatus?: react.Dispatch<react.SetStateAction<any>>, gamestatus?: any) => {
    switch(status) {
        case "add":
            if(GameStatus.boardHistory.length == 0) {
                GameStatus.boardHistory[0] = newBoardHistory;
            } else {
                GameStatus.boardHistory.push(newBoardHistory);
            }
            break;
        case "back": 
            if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 1) {
                GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 2];
                // console.log(GameStatus.boardHistory[GameStatus.boardHistory.length - 2]);
                GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
                // GameStatus.availablePlaces = GameStatus.boardHistory[GameStatus.boardHistory.length - 2].availablePlaces;
                GameStatus.isClicked = false;
                GameStatus.boardHistory.pop();
                setGameStatus({
                    GameStatus
                })
                console.log(GameStatus.board);
            } else {
                console.log("cannot back");
            }
            break;
        case "next":
            console.log("next");
            break;
    }
}
// const HistoryHandler = (newBoardHistory: string, status: string, setGameStatus?: react.Dispatch<react.SetStateAction<any>>, gamestatus?: any) => {
//     switch(status) {
//         case "add":
//             if(GameStatus.boardHistory.length == 0) {
//                 GameStatus.boardHistory[0] = newBoardHistory;
//             } else {
//                 GameStatus.boardHistory.push(newBoardHistory);
//             }
//             break;
//         case "back": 
//             if(setGameStatus != null && setGameStatus != undefined && GameStatus.boardHistory.length > 2) {
//                 GameStatus.board = GameStatus.boardHistory[GameStatus.boardHistory.length - 2];
//                 GameStatus.boardHistory.pop();
//                 GameStatus.isWhiteTurn = !GameStatus.isWhiteTurn;
//                 GameStatus.isClicked = false;
//                 setGameStatus({
//                     GameStatus
//                 })
//             } else {
//                 console.log("cannot back");
//             }
//             break;
//         case "next":
//             console.log("next");
//             break;
//     }
// }

export default HistoryHandler;