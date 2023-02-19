import Game from "../pages/Game";
import { initialPieces } from "./InitialStatus";
import { initialBoard } from "./InitialStatus";


export const GameStatus = {
    pieces: initialPieces,
    board: initialBoard,
    boardHistory: new Array(),
    availablePlaces: new Array(),
    isClicked: false,
    isWhiteTurn: false,
    isEdit: false,
}
