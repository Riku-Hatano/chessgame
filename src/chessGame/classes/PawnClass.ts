/* eslint-disable */ 
import Piece from "./Common";

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
        let availablePlaces = new Array();
        if(this.color == "white") {
            if(document.getElementById((file - 1).toString() + (rank - 1).toString())?.innerHTML[0] == "b") { availablePlaces.push((file - 1).toString() + (rank - 1).toString()) };
            if(document.getElementById((file - 0).toString() + (rank - 1).toString())?.innerHTML[0] == undefined) { availablePlaces.push((file - 0).toString() + (rank - 1).toString()) };
            if(document.getElementById((file + 1).toString() + (rank - 1).toString())?.innerHTML[0] == "b") { availablePlaces.push((file + 1).toString() + (rank - 1).toString()) };
            if(this.isMoved == false && document.getElementById(file.toString() + (rank + 2).toString())?.innerHTML[0] == undefined) { availablePlaces.push(file.toString() + (rank - 2).toString())};
        } else {
            if(document.getElementById((file - 1).toString() + (rank + 1).toString())?.innerHTML[0] == "w") { availablePlaces.push((file - 1).toString() + (rank + 1).toString()) };
            if(document.getElementById((file - 0).toString() + (rank + 1).toString())?.innerHTML[0] == undefined) { availablePlaces.push((file - 0).toString() + (rank + 1).toString()) };
            if(document.getElementById((file + 1).toString() + (rank + 1).toString())?.innerHTML[0] == "w") { availablePlaces.push((file + 1).toString() + (rank + 1).toString()) };
            if(this.isMoved == false && document.getElementById(file.toString() + (rank + 2).toString())?.innerHTML[0] == undefined) { availablePlaces.push(file.toString() + (rank + 2).toString())};
        }
        this.isMoved = true;
        return availablePlaces;
    }
}

export default Pawn;