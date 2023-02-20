import Piece from "./Common";

class King extends Piece {
    canCastle: boolean = false;
    canMove: boolean = false;
    constructor(name: string, shortName: string, color: string, file: number, rank: number) {
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
    
        } else {
            if (document.getElementById(String(file + 1) + String(rank + 1)) !== null && document.getElementById(String(file + 1) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank + 1))}
            if (document.getElementById(String(file) + String(rank + 1)) !== null && document.getElementById(String(file) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file) + String(rank + 1))}
            if (document.getElementById(String(file - 1) + String(rank + 1)) !== null && document.getElementById(String(file - 1) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank + 1))}
            if (document.getElementById(String(file - 1) + String(rank)) !== null && document.getElementById(String(file - 1) + String(rank))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank))}
            if (document.getElementById(String(file - 1) + String(rank - 1)) !== null && document.getElementById(String(file - 1) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank - 1))}
            if (document.getElementById(String(file) + String(rank - 1)) !== null && document.getElementById(String(file) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank - 1)) !== null && document.getElementById(String(file + 1) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank)) !== null && document.getElementById(String(file + 1) + String(rank))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank))}
        }
        return availablePlaces;
    }
}

export default King;