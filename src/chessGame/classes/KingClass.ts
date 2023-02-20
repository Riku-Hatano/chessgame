import Piece from "./Common";
import { GameStatus } from "../GameStatus";

class King extends Piece {
    canCastle: boolean = false;
    canMove: boolean = false;
    constructor(name: string, shortName: string, color: string, imgPath: string, file: number, rank: number) {
        super(name, shortName, color, imgPath, file, rank);
    }
    toObj() {
        return {
            name: this.name,
            shortName: this.shortName,
            color: this.color,
            imgPath: this.imgPath,
            file: this.file,
            rank: this.rank,
            isSelected: this.isSelected,
            isChecked: this.isChecked,
            isMoved: this.isMoved,
            isTaken: this.isTaken,
            canCastle: this.canCastle,
            canMove: this.canMove
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = [file.toString() + rank.toString()];
        if(this.color === "black") {
            if (document.getElementById(String(file + 1) + String(rank + 1)) !== null && document.getElementById(String(file + 1) + String(rank + 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 1) + String(rank + 1))}
            if (document.getElementById(String(file) + String(rank + 1)) !== null && document.getElementById(String(file) + String(rank + 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file) + String(rank + 1))}
            if (document.getElementById(String(file - 1) + String(rank + 1)) !== null && document.getElementById(String(file - 1) + String(rank + 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 1) + String(rank + 1))}
            if (document.getElementById(String(file - 1) + String(rank)) !== null && document.getElementById(String(file - 1) + String(rank))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 1) + String(rank))}
            if (document.getElementById(String(file - 1) + String(rank - 1)) !== null && document.getElementById(String(file - 1) + String(rank - 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 1) + String(rank - 1))}
            if (document.getElementById(String(file) + String(rank - 1)) !== null && document.getElementById(String(file) + String(rank - 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank - 1)) !== null && document.getElementById(String(file + 1) + String(rank - 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 1) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank)) !== null && document.getElementById(String(file + 1) + String(rank))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 1) + String(rank))}
            if(this.isMoved == false) {
                if(GameStatus.board[0][1] == null && GameStatus.board[0][2] == null && GameStatus.board[0][3] == null && GameStatus.board[0][0]?.isMoved == false) { //left castling
                    availablePlaces.push(String(this.file - 2) + String(this.rank));
                    GameStatus.specialFlag = "castling";
                } else if (GameStatus.board[0][5] == null && GameStatus.board[0][6] == null && GameStatus.board[0][7]?.isMoved == false) {
                    availablePlaces.push(String(this.file + 2) + String(this.rank));
                    GameStatus.specialFlag = "castling";
                }
            }
        } else {
            if (document.getElementById(String(file + 1) + String(rank + 1)) !== null && document.getElementById(String(file + 1) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank + 1))}
            if (document.getElementById(String(file) + String(rank + 1)) !== null && document.getElementById(String(file) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file) + String(rank + 1))}
            if (document.getElementById(String(file - 1) + String(rank + 1)) !== null && document.getElementById(String(file - 1) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank + 1))}
            if (document.getElementById(String(file - 1) + String(rank)) !== null && document.getElementById(String(file - 1) + String(rank))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank))}
            if (document.getElementById(String(file - 1) + String(rank - 1)) !== null && document.getElementById(String(file - 1) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank - 1))}
            if (document.getElementById(String(file) + String(rank - 1)) !== null && document.getElementById(String(file) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank - 1)) !== null && document.getElementById(String(file + 1) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank)) !== null && document.getElementById(String(file + 1) + String(rank))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank))}
            if(this.isMoved == false) {
                if(GameStatus.board[7][1] == null && GameStatus.board[7][2] == null && GameStatus.board[7][3] == null && GameStatus.board[7][0]?.isMoved == false) { //left castling
                    availablePlaces.push(String(this.file - 2) + String(this.rank));
                    GameStatus.specialFlag = "castling";
                } else if (GameStatus.board[7][5] == null && GameStatus.board[7][6] == null && GameStatus.board[7][7]?.isMoved == false) {
                    availablePlaces.push(String(this.file + 2) + String(this.rank));
                    GameStatus.specialFlag = "castling";
                }
            }
        }
        return availablePlaces;
    }
    castling() {
        if(this.color == "black") {
            if(this.file == 2) { //the rank of king would be 2 or 6
                const movingRook = GameStatus.board[0][0];
                if(movingRook != null) {
                    movingRook.isMoved = true;
                }
                GameStatus.board[0][0] = null;
                GameStatus.board[0][3] = movingRook;
            } else {
                const movingRook = GameStatus.board[0][7];
                if(movingRook != null) {
                    movingRook.isMoved = true;
                }
                GameStatus.board[0][7] = null;
                GameStatus.board[0][5] = movingRook;
            }
        } else {
            if(this.file == 2) { //the rank of king would be 2 or 6
                const movingRook = GameStatus.board[7][0];
                if(movingRook != null) {
                    movingRook.isMoved = true;
                }
                GameStatus.board[7][0] = null;
                GameStatus.board[7][3] = movingRook;
            } else {
                const movingRook = GameStatus.board[7][7];
                if(movingRook != null) {
                    movingRook.isMoved = true;
                }
                GameStatus.board[7][7] = null;
                GameStatus.board[7][5] = movingRook;
            }
        }
    }
}

export default King;