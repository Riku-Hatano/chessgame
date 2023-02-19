import Piece from "./Common";

class Rook extends Piece {
    canCastle: boolean = false;
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
            canCastle: this.canCastle
        }
    }
    place(rank: number, file: number) {
        let availablePlaces = new Array();
        availablePlaces.push({
            rank: rank,
            file: file
        })
        return availablePlaces;
    }
}

export default Rook;

// constructor(name: string, color: string, isSelected: boolean = false, isChecked: boolean = false, isMoved: boolean = false, isEnpassaint: boolean = false, isPromoted: boolean = false) {
//     super(name, color, isSelected, isChecked, isMoved)
//     this.isEnpassaint = isEnpassaint,
//     this.isPromoted = isPromoted
// }