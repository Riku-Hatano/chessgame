import Piece from "./Common";

class Knight extends Piece {
    constructor(name: string, shortName: string, color: string, imgPath: string, file: number, rank: number) {
        super(name, shortName, color, imgPath, file, rank);
    }
    toObj() {
        return {
            name: this.name,
            shortName: this.shortName,
            color: this.color,
            imgPath: this.imgPath,
            isSelected: this.isSelected,
            isChecked: this.isChecked,
            isMoved: this.isMoved,
            isTaken: this.isTaken
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = [file.toString() + rank.toString()];
        if (this.color == "black") {
            if (document.getElementById(String(file + 2) + String(rank + 1)) !== null && document.getElementById(String(file + 2) + String(rank + 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 2) + String(rank + 1))}
            if (document.getElementById(String(file + 2) + String(rank - 1)) !== null && document.getElementById(String(file + 2) + String(rank - 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 2) + String(rank - 1))}
            if (document.getElementById(String(file - 2) + String(rank + 1)) !== null && document.getElementById(String(file - 2) + String(rank + 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 2) + String(rank + 1))}
            if (document.getElementById(String(file - 2) + String(rank - 1)) !== null && document.getElementById(String(file - 2) + String(rank - 1))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 2) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank + 2)) !== null && document.getElementById(String(file + 1) + String(rank + 2))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 1) + String(rank + 2))}
            if (document.getElementById(String(file - 1) + String(rank + 2)) !== null && document.getElementById(String(file - 1) + String(rank + 2))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 1) + String(rank + 2))}
            if (document.getElementById(String(file + 1) + String(rank - 2)) !== null && document.getElementById(String(file + 1) + String(rank - 2))?.innerHTML[0] !== "b") {availablePlaces.push(String(file + 1) + String(rank - 2))}
            if (document.getElementById(String(file - 1) + String(rank - 2)) !== null && document.getElementById(String(file - 1) + String(rank - 2))?.innerHTML[0] !== "b") {availablePlaces.push(String(file - 1) + String(rank - 2))}
        } else {
            if (document.getElementById(String(file + 2) + String(rank + 1)) !== null && document.getElementById(String(file + 2) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 2) + String(rank + 1))}
            if (document.getElementById(String(file + 2) + String(rank - 1)) !== null && document.getElementById(String(file + 2) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 2) + String(rank - 1))}
            if (document.getElementById(String(file - 2) + String(rank + 1)) !== null && document.getElementById(String(file - 2) + String(rank + 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 2) + String(rank + 1))}
            if (document.getElementById(String(file - 2) + String(rank - 1)) !== null && document.getElementById(String(file - 2) + String(rank - 1))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 2) + String(rank - 1))}
            if (document.getElementById(String(file + 1) + String(rank + 2)) !== null && document.getElementById(String(file + 1) + String(rank + 2))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank + 2))}
            if (document.getElementById(String(file - 1) + String(rank + 2)) !== null && document.getElementById(String(file - 1) + String(rank + 2))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank + 2))}
            if (document.getElementById(String(file + 1) + String(rank - 2)) !== null && document.getElementById(String(file + 1) + String(rank - 2))?.innerHTML[0] !== "w") {availablePlaces.push(String(file + 1) + String(rank - 2))}
            if (document.getElementById(String(file - 1) + String(rank - 2)) !== null && document.getElementById(String(file - 1) + String(rank - 2))?.innerHTML[0] !== "w") {availablePlaces.push(String(file - 1) + String(rank - 2))}
        }
        return availablePlaces;
    }
}

export default Knight;