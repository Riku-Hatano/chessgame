import { initialPieces } from "./InitialStatus";
import { initialBoard } from "./InitialStatus";
import { GameStatusIF } from "../types/types";

export const GameStatus: GameStatusIF = {
    pieces: initialPieces,
    board: initialBoard,
    boardHistory: [],
    historyBackCounter: 0,
    availablePlaces: new Array(),
    isClicked: false,
    isWhiteTurn: true,
    isEdit: false,
    specialFlag: ""
}
