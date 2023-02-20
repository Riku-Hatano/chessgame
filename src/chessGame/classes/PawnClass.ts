import Piece from "./Common";
import { GameStatus } from "../GameStatus";
import Queen from "./QueenClass";

class Pawn extends Piece {
    isEnpassaint: boolean = false;
    isPromoted: boolean = false;
    constructor (name: string, shortName: string, color: string, file: number, rank: number) {
        super(name, shortName, color, file, rank);
    }
    toObj() {
        return {
            name: this.name,
            shortName: this.shortName,
            color: this.color,
            file: this.file,
            rank: this.rank,
            isSelected: this.isSelected,
            isChecked: this.isChecked,
            isMoved: this.isMoved,
            isEnpassaint: this.isEnpassaint,
            isPromoted: this.isPromoted
        };
    }
    place(rank: number, file: number) {
        let availablePlaces = [file.toString() + rank.toString()];
        if(this.color == "white") {
            if(this.rank == 1) { GameStatus.specialFlag = "promotion" };
            if(document.getElementById((file - 1).toString() + (rank - 1).toString())?.innerHTML[0] == "b") { availablePlaces.push((file - 1).toString() + (rank - 1).toString()) };
            if(document.getElementById((file - 0).toString() + (rank - 1).toString())?.innerHTML[0] == undefined) { availablePlaces.push((file - 0).toString() + (rank - 1).toString()) };
            if(document.getElementById((file + 1).toString() + (rank - 1).toString())?.innerHTML[0] == "b") { availablePlaces.push((file + 1).toString() + (rank - 1).toString()) };
            if(this.isMoved == false && document.getElementById(file.toString() + (rank + 2).toString())?.innerHTML[0] == undefined) { availablePlaces.push(file.toString() + (rank - 2).toString())};
        } else {
            if(this.rank == 6) { GameStatus.specialFlag = "promotion" };
            if(document.getElementById((file - 1).toString() + (rank + 1).toString())?.innerHTML[0] == "w") { availablePlaces.push((file - 1).toString() + (rank + 1).toString()) };
            if(document.getElementById((file - 0).toString() + (rank + 1).toString())?.innerHTML[0] == undefined) { availablePlaces.push((file - 0).toString() + (rank + 1).toString()) };
            if(document.getElementById((file + 1).toString() + (rank + 1).toString())?.innerHTML[0] == "w") { availablePlaces.push((file + 1).toString() + (rank + 1).toString()) };
            if(this.isMoved == false && document.getElementById(file.toString() + (rank + 2).toString())?.innerHTML[0] == undefined) { availablePlaces.push(file.toString() + (rank + 2).toString())};
        }
        return availablePlaces;
    }
    promote() {
        this.isTaken = true;
        let promotedPawn;
        if(this.color == "white") { //hard coding. i am not sure how to access to the properthy with variable. ["white"] and ["black"] should be variable like [color].
            promotedPawn = new Queen("queen", `${this.color[0]}q${GameStatus["pieces"]["white"]["queen"].length + 1}`, this.color, this.file, this.rank);
            GameStatus["pieces"]["white"]["queen"].push(promotedPawn);
        } else {
            promotedPawn = new Queen("queen", `${this.color[0]}q${GameStatus["pieces"]["black"]["queen"].length + 1}`, this.color, this.file, this.rank);
            GameStatus["pieces"]["black"]["queen"].push(promotedPawn);
        }
        GameStatus.board[this.rank][this.file] = promotedPawn;
    }
}

export default Pawn;